import React from "react";
import Header from "../components/Header";
import {
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaBalanceScale,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <Header />

      <main className="career-page">
        <section className="career-hero">
          <div className="career-overlay">
            <h1 className="wow fadeInDown" data-wow-delay="0.5s">
              Join the Force Behind Future Innovation
            </h1>
            <p className="wow fadeInUp" data-wow-delay="1s">
              Be a part of WeeTech – where creativity meets technology and
              careers take flight.
            </p>
          </div>
        </section>

        {/* <section className="company-video-section">
          <div className="inner-width">
            <div className="video-wrapper wow zoomIn" data-wow-delay="2s">
              <video src="/images/videoplayback.mp4" autoPlay muted loop />
            </div>
          </div>
        </section> */}

        <section className="why-cybite-career">
          <div className="inner-width">
            <div className="whycwrapper wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="carson-heading">
                Why Build Your Career With WeeTech?
              </h2>
              <div className="carson-grid">
                {[
                  {
                    title: "Innovative Culture",
                    text: "We thrive on innovation and give our team the freedom to create impactful solutions.",
                    icon: <FaLightbulb color="#FFFF00" size={30} />,
                  },
                  {
                    title: "Career Growth",
                    text: "We invest in your development with mentorship, training, and growth opportunities.",
                    icon: <FaChartLine color="#FFFF00" size={30} />,
                  },
                  {
                    title: "Team Spirit",
                    text: "Collaborate with passionate minds in a dynamic and supportive environment.",
                    icon: <FaUsers color="#FFFF00" size={30} />,
                  },
                  {
                    title: "Work-Life Balance",
                    text: "Flexible working options and wellness-first policies ensure a balanced life.",
                    icon: <FaBalanceScale color="#FFFF00" size={30} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`carson-card wow zoomIn`}
                    data-wow-delay={`${0.5 + idx * 0.2}s`}
                  >
                    <div className="card-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* career from */}
        <section className="career-form-section section-margin">
          <div className="inner-width">
            <div
              className="career-form-container wow fadeInUp"
              data-wow-delay=".5s"
            >
              <form className="career-form wow zoomIn" data-wow-delay="1s">
                <div className="form-head">
                  <h2 className="career-title">Apply Here</h2>
                  <p className="career-subtitle">
                    Whether you're looking for solutions or want to explore
                    opportunities, we’re here to collaborate with you.
                  </p>
                </div>
                <div className="form-box">
                  <label htmlFor="fullName">
                    Full name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className="form-box">
                  <label htmlFor="email">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" id="email" placeholder="Email" required />
                </div>

                <div className="form-box">
                  <label htmlFor="phone">
                    Phone number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-box">
                    <label htmlFor="workplace">
                      Workplace type <span className="req">*</span>
                    </label>
                    <select id="workplace" required>
                      <option>On-site</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                    </select>
                  </div>

                  <div className="form-box">
                    <label htmlFor="location">
                      Job location <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Job location"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-box">
                    <label htmlFor="employment">
                      Employment type <span className="req">*</span>
                    </label>
                    <select id="employment" required>
                      <option>Full time</option>
                      <option>Part time</option>
                      <option>Internship</option>
                    </select>
                  </div>

                  <div className="form-box">
                    <label htmlFor="resume">
                      Upload Resume/CV <span className="req">*</span>
                    </label>
                    <input type="file" id="resume" className="upload-btn" />
                  </div>
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    By clicking <strong>Send application</strong>, you agree to
                    our
                    <a href="#">User Agreement</a> &
                    <a href="#"> Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  Send application
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </>
  );
};

export default Career;
