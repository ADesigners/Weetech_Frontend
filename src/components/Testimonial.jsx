import React, { useEffect, useState } from "react";
import { loadSection } from "../utils/util";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideClass, setSlideClass] = useState("");

  useEffect(() => {
    loadSection("Testimonials").then((data) => setTestimonialData(data || []));
  }, []);

  // Build slides of 2 items each
  const slides = [];
  for (let i = 0; i < testimonialData.length; i += 2) {
    slides.push(testimonialData.slice(i, i + 2));
  }

  // Keep currentSlide in range when data updates
  useEffect(() => {
    if (currentSlide > Math.max(slides.length - 1, 0)) {
      setCurrentSlide(0);
    }
  }, [testimonialData]);

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
    <section className="testimonial-section section-margin" id="testimonial-section">
      <div className="inner-width">
        <div className="testi-wrapper">
          <div className="section-heading wow fadeInUp" data-wow-delay=".5s">
            <div className="smaller-heading">
              <p>WHAT OUR CLIENTS SAY.</p>
            </div>
            <div className="larger-heading">
              <h2>Testimonials</h2>
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
                    <div className="testimonial-content">
                      <p>{item.description}</p>
                      <h4>{item.title}</h4>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`star ${
                              starIndex < parseInt(item.rating) ? 'filled' : 'empty'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
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

export default Testimonial;