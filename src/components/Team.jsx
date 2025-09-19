import React, { useEffect, useState } from "react";
import { loadSection } from "../utils/util";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideClass, setSlideClass] = useState("");

  useEffect(() => {
    loadSection("Team").then((data) => setTeamMembers(data || []));
  }, []);

  // Build slides of 2 items each
  const slides = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    slides.push(teamMembers.slice(i, i + 2));
  }

  // Keep currentSlide in range when data updates
  useEffect(() => {
    if (currentSlide > Math.max(slides.length - 1, 0)) {
      setCurrentSlide(0);
    }
  }, [teamMembers]);

  const goToSlide = (nextIndex) => {
    if (slides.length <= 1) return;
    const direction = nextIndex > currentSlide || (currentSlide === slides.length - 1 && nextIndex === 0)
      ? "slide-left"
      : "slide-right";
    setSlideClass(direction);
    setCurrentSlide(nextIndex);
    setTimeout(() => setSlideClass(""), 400);
  };

  // Auto-advance slides every 3s, pause on hover
  useEffect(() => {
    if (isHovered || slides.length <= 1) return;
    const id = setInterval(() => {
      const next = slides.length === 0 ? 0 : (currentSlide + 1) % slides.length;
      goToSlide(next);
    }, 3000);
    return () => clearInterval(id);
  }, [isHovered, slides.length, currentSlide]);

  return (
    <section className="team-section section-margin" id="team-section">
      <div className="inner-width">
        <div className="testi-wrapper">
          <div className="section-heading wow fadeInUp" data-wow-delay=".5s">
            <div className="smaller-heading">
              <p>THE PEOPLE BEHIND OUR EXCELLENCE.</p>
            </div>
            <div className="larger-heading">
              <h2>Meet our team</h2>
            </div>
          </div>
          <div
            className="testimonial-carousel h-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`testimonial-row fade-in ${slideClass}`}>
              {slides.length > 0 && (
                slides[currentSlide].map((item, index) => (
                  <div
                    key={`${currentSlide}-${index}`}
                    className={`testimonial-card wow ${
                      index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                    }`}
                    data-wow-delay=".5s"
                  >
                    <img
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="testimonial-content">
                      <p>{item.description}</p>
                      <h4>{item.title}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="testimonial-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
