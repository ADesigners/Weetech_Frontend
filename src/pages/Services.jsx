import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookiePopup from "../components/CookiePopup";

const Services = () => {
  return (
    <>
      <Header />
      <main className="services-page" id="services-page">
        {/* Service hero */}
        <div className="service-hero section-margin" id="service-hero">
          <div className="inner-width">
            <div className="ser-hero-wrapper">
              <div className="s-hero-txt">
                <div className="sht-h wow fadeInUp" data-wow-delay=".3s">
                  <h1>Empower your vision with smart, flexible services</h1>
                </div>
                <div className="sht-p wow fadeInUp" data-wow-delay=".5s">
                  <p>
                    Experience the peace of mind that comes with knowing your
                    data is secured by an impenetrable defence. The WeeTech
                    Firewall is a powerful, easy-to-use security device designed
                    to safeguard businesses and individuals from ever-evolving
                    cyber threats.
                  </p>
                  <a
                    href="mailto:hoshangabadwalam@gmail.com"
                    className="sht-b wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Learn More <FaArrowDown className="shtb-icon" />
                  </a>
                </div>
              </div>
              <div className="s-hero-img floating-object">
                <img src="/images/ser-hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* development section  */}
        <div className="dev-section section-margin" id="dev-section">
          <div className="inner-width">
            <div className="dev-head">
              <h4>Development</h4>
            </div>
            <div className="dev-para">
              <p>
                Unlock the full value of today’s modern workforce in both remote
                and hybrid environments. Deployment Services provide simple
                access to customized technology that is ready from day one to
                boost the productivity of your IT Department and the teams they
                support.
              </p>
            </div>
          </div>

          {/* Web */}
          <div className="devrow fright wow fadeInRight" data-wow-delay=".5s">
            <div className="devr-txt">
              <div className="devt-h">
                <h3>Web</h3>
              </div>
              <div className="devt-b">
                <p>Build Fast, Scalable, and Responsive Websites</p>
              </div>
              <div className="devt-p">
                <p>
                  We create responsive, high-performance websites using modern
                  technologies that drive results. Whether it's a landing page
                  or a dynamic web platform, our development ensures speed,
                  security, and seamless user experiences.
                </p>
              </div>
            </div>
            <div className="dev-img">
              <img src="/images/ser-bann.jpg" alt="" />
            </div>
          </div>

          {/* App */}
          <div className="devrow fleft wow fadeInLeft" data-wow-delay=".5s">
            <div className="dev-img">
              <img src="/images/ser-bann.jpg" alt="" />
            </div>
            <div className="devr-txt">
              <div className="devt-h">
                <h3>App</h3>
              </div>
              <div className="devt-b">
                <p>Innovative Mobile Solutions Tailored to Your Business</p>
              </div>
              <div className="devt-p">
                <p>
                  From concept to launch, we develop sleek, high-performing
                  mobile apps for Android and iOS. Our apps deliver smooth user
                  experiences, robust functionality, and scalability—empowering
                  your business to stay connected and competitive.
                </p>
              </div>
            </div>
          </div>

          {/* Cyber Security */}
          <div className="devrow fright wow fadeInRight" data-wow-delay=".5s">
            <div className="devr-txt">
              <div className="devt-h">
                <h3>Cyber Security</h3>
              </div>
              <div className="devt-b">
                <p>Robust Protection for Your Digital Assets</p>
              </div>
              <div className="devt-p">
                <p>
                  We provide end-to-end cybersecurity services, including threat
                  detection, risk assessment, firewall setup, and data
                  encryption. Our goal is to ensure your systems remain secure
                  and compliant in an ever-evolving threat landscape.
                </p>
              </div>
            </div>
            <div className="dev-img">
              <img src="/images/ser-bann.jpg" alt="" />
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="devrow fleft wow fadeInLeft" data-wow-delay=".5s">
            <div className="dev-img">
              <img src="/images/ser-bann.jpg" alt="" />
            </div>
            <div className="devr-txt">
              <div className="devt-h">
                <h3>Digital Marketing</h3>
              </div>
              <div className="devt-b">
                <p>Accelerate Your Growth with Data-Driven Strategies</p>
              </div>
              <div className="devt-p">
                <p>
                  Our digital marketing experts help you reach the right
                  audience through SEO, PPC, content marketing, and social media
                  campaigns. We build brand visibility, drive engagement, and
                  maximize ROI with measurable, targeted strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner section */}
        <section className="banner-section section-margin" id="banner-section">
          <div className="inner-width">
            <div className="banner-head wow fadeInUp" data-wow-delay=".5s">
              <h2>Building a Connected Future</h2>
            </div>
            <div className="ser-banner wow zoomIn" data-wow-delay=".5s">
              <img src="/images/service-banner.png" alt="" />
            </div>
          </div>
        </section>

        {/* services  */}
        <div className="service-section section-margin" id="service-section">
          <div className="inner-width">
            <div className="service-grid">
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>DESIGNING EXPERIENCES THAT CLICK</p>
                  </div>
                  <div className="serh">
                    <h4>UI/UX Design</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We craft intuitive, user-centered interfaces that blend
                      form and function. Our design process ensures seamless
                      navigation, stunning visuals, and engaging digital
                      experiences for your users.
                    </p>
                  </div>
                </div>
                <img src="/images/uiux.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>RELIABLE LAUNCHES, EVERY TIME</p>
                  </div>
                  <div className="serh">
                    <h4>Deployment</h4>
                  </div>
                  <div className="serp">
                    <p>
                      Our streamlined deployment strategies ensure your software
                      is delivered securely and efficiently. From staging to
                      production, we handle the process with precision and zero
                      downtime.
                    </p>
                  </div>
                </div>
                <img src="/images/deployment.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>BUG-FREE. STRESS-FREE.</p>
                  </div>
                  <div className="serh">
                    <h4>Testing</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We rigorously test every line of code to ensure top
                      performance, functionality, and security. Our QA team
                      guarantees a polished product through automated and manual
                      testing methods.
                    </p>
                  </div>
                </div>
                <img src="/images/testing.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>BOOST VISIBILITY. DRIVE RESULTS</p>
                  </div>
                  <div className="serh">
                    <h4>Digital Marketing</h4>
                  </div>
                  <div className="serp">
                    <p>
                      From SEO to social campaigns, we build strategies that
                      help your brand stand out. Our data-driven digital
                      marketing solutions maximize reach, engagement, and
                      conversions.
                    </p>
                  </div>
                </div>
                <img src="/images/marketing.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>BUILD STRONG. BUILD RELIABLE.</p>
                  </div>
                  <div className="serh">
                    <h4>Development</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We build secure, scalable digital solutions with clean,
                      efficient code. Our focus on performance and reliability
                      ensures seamless user experiences and on-time delivery.
                    </p>
                  </div>
                </div>
                <img src="/images/uiux.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>SECURE AND TRUSTED HOSTING</p>
                  </div>
                  <div className="serh">
                    <h4>Domain & Hosting</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We offer end-to-end domain and hosting services, ensuring
                      fast, reliable access to your website with guaranteed
                      uptime and expert backend support.
                    </p>
                  </div>
                </div>
                <img src="/images/deployment.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>BOOST VISIBILITY. DRIVE RESULTS</p>
                  </div>
                  <div className="serh">
                    <h4>Webmail</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We provide secure, user-friendly webmail solutions with
                      robust features to streamline communication and boost your
                      team’s productivity.
                    </p>
                  </div>
                </div>
                <img src="/images/testing.jpg" alt="" />
              </div>
              <div className="service-card wow zoomIn" data-wow-delay=".5s">
                <div className="ser-txt">
                  <div className="serb">
                    <p>END TO END SUPPORT</p>
                  </div>
                  <div className="serh">
                    <h4>24/7 Support</h4>
                  </div>
                  <div className="serp">
                    <p>
                      We deliver 24/7 expert support to keep your services
                      running smoothly, offering fast resolutions and dependable
                      assistance whenever you need it.
                    </p>
                  </div>
                </div>
                <img src="/images/marketing.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </main>
    </>
  );
};

export default Services;
