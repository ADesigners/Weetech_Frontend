import React from "react";
import { Link } from "react-router-dom";
import { GiTargetArrows } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyCybite from "../components/WhyCybite";
import Seo from "../components/SEO";

const About = () => {
  return (
    <>
      <Seo
        title="About – WeeTech IT Consultancy"
        description="WeeTech is a trusted IT partner delivering cybersecurity, custom software, and strategic guidance to empower growth."
        url="https://adesigners.github.io/Weetech_Frontend/#/about"
        image="/images/founder.png"
      />
      <Header />
      <main className="about-page" id="about-page">
        {/* about hero */}
        <section className="about-hero-section section-margin">
          <div className="inner-width">
            <div className="abt-hero-wrapper">
              <div className="logo-card">
                <Link to="/" className="logo">
                  WeeTech
                </Link>
              </div>

              <div className="mv-card ctl wow zoomInDown" data-wow-delay=".5s">
                <div className="mv-head">
                  <div className="mv-i-bx">
                    <FaEye className="mv-icon" />
                  </div>
                  <p>Our Vision</p>
                </div>
                <div className="mv-txt">
                  {/* We envision a future where businesses and individuals can thrive in a secure and connected digital world. */}
                  To become a globally trusted force in IT consultancy — where
                  innovation meets integrity, and technology goes hand-in-hand
                  with empowerment. We envision a digital world where every
                  organization, regardless of size or sector, can harness
                  technology with confidence, supported by advanced solutions
                  and a well-equipped team that drives sustainable growth.
                </div>
              </div>
              <div className="mv-card cbl wow zoomInDown" data-wow-delay=".5s">
                <div className="mv-head">
                  <div className="mv-i-bx">
                    <GiTargetArrows className="mv-icon" />
                  </div>
                  <p>Our Mission</p>
                </div>
                <div className="mv-txt">
                  To empower businesses and individuals with the expertise and
                  solutions needed to navigate the digital landscape with
                  confidence. We achieve this by delivering comprehensive IT
                  consultancy services, innovative technology solutions, and
                  strategic guidance tailored to every unique need.
                </div>
              </div>
              <div className="mv-card ctr wow zoomInDown" data-wow-delay=".5s">
                <div className="mv-head">
                  <div className="mv-i-bx">
                    <BiTimeFive className="mv-icon" />
                  </div>
                  <p>Save Time</p>
                </div>
                <div className="mv-txt">
                  At WeeTech, we envision a digital future where security is not
                  a luxury, but a standard — accessible, reliable, and proactive
                  for every organization, individual, and institution. We are on
                  a mission to lead this transformation by becoming one of the
                  world’s most trusted cybersecurity enablers
                </div>
              </div>
              <div className="mv-card cbr wow zoomInDown" data-wow-delay=".5s">
                <div className="mv-head">
                  <div className="mv-i-bx">
                    <MdSpeed className="mv-icon" />
                  </div>
                  <p>Best Performances</p>
                </div>
                <div className="mv-txt">
                  WeeTech has emerged as a leading force in IT consultancy by
                  enabling digital transformation, delivering tailored
                  technology solutions, guiding businesses with strategic
                  expertise, and empowering organizations to adopt innovative,
                  future-ready systems that drive growth and resilience.{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why choose cybite */}
        <WhyCybite />

        {/* our team/team */}
        {/* <section className="team-section section-margin" id="team-section">
          <div className="inner-width">
            <div className="team-wrapper">
              <div className="section-heading wow fadeInUp" data-wow-delay=".5s">
                <div className="smaller-heading">
                  <p>MEET THE BRAINS BEHIND THE BRAND</p>
                </div>
                <div className="larger-heading">
                  <h2>Our Dedicated Team of Experts</h2>
                </div>
              </div>
              <div className="team-grid">
                <div className="t-image">
                  <img src="/images/founder.png" alt="founder image" />
                </div>
                <div className="t-text">
                  <div className="t-name">
                    <h3>Om Prakash Sharma</h3>
                  </div>
                  <div className="t-desig">
                    <h3>[Chief Technology Officer, WeeTech]</h3>
                  </div>
                  <div className="t-msg">
                    <br></br>
                    <p>
                    Personally, my work goes far beyond running tools or writing code. I’ve had the privilege of training aspiring cybersecurity professionals — guiding them step by step into the world of ethical hacking, bug hunting, and real-world cyber defense. Whether it's through workshops, mentorship, or one-on-one sessions, I’ve focused on developing both the technical skills and the confidence needed to thrive in this ever-evolving field.

This passion for teaching and leading isn’t just a side task — it’s central to what we do at WeeTech. We believe that strong cybersecurity starts with strong people, and that’s why we invest in building a learning-first culture. We’re not just solving today’s problems — we’re empowering the next generation of ethical hackers, security analysts, and digital defenders to take on tomorrow’s challenges.

WeeTech stands for security, skill, and shared growth — and I’m proud to be part of that journey.
At WeeTech, we don’t just follow cybersecurity trends — we set them.
Our team has been deeply involved in pioneering solutions that help businesses stay ahead of cyber threats. From advanced penetration testing to hands-on incident response strategies, we’ve helped organizations not only detect vulnerabilities but actively build stronger, more resilient systems.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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

        <Footer />
      </main>
    </>
  );
};

export default About;
