import React, { useEffect, useState } from "react";
import { loadSection } from "../utils/util";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-advance slides every 5s, pause on hover
  useEffect(() => {
    if (isHovered || slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (slides.length === 0 ? 0 : (s + 1) % slides.length));
    }, 3000);
    return () => clearInterval(id);
  }, [isHovered, slides.length]);

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
            <div className="testimonial-row fade-in">
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
                  onClick={() => setCurrentSlide(i)}
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
