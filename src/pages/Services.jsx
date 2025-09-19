import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookiePopup from "../components/CookiePopup";
import { loadSection } from "../utils/util";
import Seo from "../components/SEO";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const devSection = useRef(null);

  useEffect(() => {
    loadSection("Services").then(setServicesData);
  }, []);

  return (
    <>
      <Seo
        title="Services – WeeTech IT Consultancy"
        description="End-to-end services: UI/UX, development, deployment, testing, domain & hosting, and 24/7 support. Built for performance, reliability, and security."
        url="https://adesigners.github.io/Weetech_Frontend/#/services"
        image="/images/ser-hero-img.png"
      />
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
                    Bring your ideas to life with WeeTech’s premium development
                    services. From websites to mobile apps, desktop solutions to
                    custom software, we design and build powerful, scalable
                    technology tailored to your business needs.
                  </p>
                  <button
                    onClick={() =>
                      devSection.current.scrollIntoView({ behavior: "smooth" })
                    }
                    className="sht-b wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Learn More <FaArrowDown className="shtb-icon" />
                  </button>
                </div>
              </div>
              <div className="s-hero-img floating-object">
                <img src="/images/ser-hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* development section  */}
        <div
          ref={devSection}
          className="dev-section section-margin"
          id="dev-section"
        >
          {servicesData &&
            servicesData.length > 0 &&
            servicesData.map((item, idx) => (
              <div
                key={idx}
                className={`devrow ${idx % 2 === 0 ? "fright" : "fleft"} wow ${
                  idx % 2 === 0 ? "fadeInRight" : "fadeInLeft"
                }`}
                data-wow-delay=".5s"
              >
                {idx % 2 !== 0 && (
                  <div className="dev-img">
                    {item.image ? (
                      <img src={item.image} alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    ) : (
                      <img src="/images/ser-bann.jpg" alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    )}
                  </div>
                )}
                <div className="devr-txt">
                  <div className="devt-h">
                    <h3>{item.title || ""}</h3>
                  </div>
                  <div className="devt-b">
                    <p>{item.subtitle || item.tagline || ""}</p>
                  </div>
                  <div className="devt-p">
                    <p>{item.description || ""}</p>
                  </div>
                </div>
                {idx % 2 === 0 && (
                  <div className="dev-img">
                    {item.image ? (
                      <img src={item.image} alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    ) : (
                      <img src="/images/ser-bann.jpg" alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    )}
                  </div>
                )}
              </div>
            ))}
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
                      performance, functionality, and security. Our team
                      guarantees a polished product through automated and manual
                      testing methods.
                    </p>
                  </div>
                </div>
                <img src="/images/testing.jpg" alt="" />
              </div>
              {/* <div className="service-card wow zoomIn" data-wow-delay=".5s">
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
              </div> */}
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
              {/* <div className="service-card wow zoomIn" data-wow-delay=".5s">
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
              </div> */}
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
