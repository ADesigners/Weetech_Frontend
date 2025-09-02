// File: src/components/WhyCybite.jsx

import React, { useEffect, useRef } from "react";
const reasons = [
  {
    img: "/images/Group 5.png",
    text: "We boast a team of seasoned professionals with a proven track record of success in both cybersecurity and development.",
    position: "top-left",
  },
  {
    img: "/images/Group 6.png",
    text: "We prioritize understanding your unique needs to deliver solutions that exceed expectations.",
    position: "top-right",
  },
  {
    img: "/images/Group 8.png",
    text: "Your success is our priority. We provide ongoing support and guidance to ensure your digital journey is secure and prosperous.",
    position: "bottom-left",
  },
  {
    img: "/images/Group 7.png",
    text: "Our services adapt to your growth, ensuring continued security and functionality as your business evolves.",
    position: "bottom-right",
  },
];

const WhyCybite = () => {
  const containerRef = useRef(null);
  const squareRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    const adjustElements = () => {
      requestAnimationFrame(() => {
        const container = containerRef.current;
        const square = squareRef.current;
        const circles = circleRefs.current;

        if (!container || !square || !circles) return;

        const containerWidth = container.clientWidth;
        let squareSize;

        if (window.innerWidth <= 700) {
          squareSize = containerWidth * 0.58;
        }
        if (window.innerWidth <= 500) {
          squareSize = containerWidth * 0.5;
        } else {
          squareSize = containerWidth * 0.35;
        }

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        const circleSize = (2 / 3) * squareSize;
        circles.forEach((circle) => {
          if (circle) {
            circle.style.width = `${circleSize}px`;
            circle.style.height = `${circleSize}px`;
          }
        });
      });
    };

    window.addEventListener("resize", adjustElements);
    window.addEventListener("load", adjustElements);
    adjustElements();

    return () => {
      window.removeEventListener("resize", adjustElements);
      window.removeEventListener("load", adjustElements);
    };
  }, []);

  return (
    <section className="why-WeeTech section-margin">
      <div className="inner-width">
        <div className="section-heading wow fadeInUp" data-wow-delay=".5s">
          <div className="smaller-heading">
            <p>DISCOVER OUR DIFFERENCE</p>
          </div>
          <div className="larger-heading">
            <h2>Why Choose WeeTech?</h2>
          </div>
        </div>

        <div className="reason-container" ref={containerRef}>
          <div
            className="holding-image wow fadeInUp"
            data-wow-delay=".5s"
            ref={squareRef}
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                ref={(el) => (circleRefs.current[index] = el)}
                className={`circle circle-${reason.position} wow zoomIn`}
                data-wow-delay="1s"
              >
                <div className="gradient-border"></div>
                <img src={reason.img} alt="reason" />
                {/* <div className={`circle-text text-${reason.position}`}>
                  <p className="wow zoomIn" data-wow-delay="1.5s">
                    {reason.text}
                  </p>
                </div> */}
              </div>
            ))}
          </div>

          <div className="bottom-text wow fadeInUp" data-wow-delay=".5s">
            <p>
              Partner with WeeTech and experience the peace of mind that comes
              with knowing your data is secure, your applications are
              functional, and your future is connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCybite;
