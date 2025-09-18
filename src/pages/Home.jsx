import React, { useState, useEffect } from "react";
import Seo from "../components/SEO";
import { Link } from "react-router-dom";

import { HashLink as HashLink } from "react-router-hash-link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Demoprojects from "../components/Demoproject";
// import axios from "axios"; // ✅ Import axios
import CookiePopup from "../components/CookiePopup";
import { loadSection } from "../utils/util";

const framesData = [
  "Safeguards your digital environment while prioritizing data security and user trust",
  "Defends against evolving threats with a core focus on protecting your data and earning your trust",
  "Ensures seamless protection by upholding the highest standards of data privacy and user confidence",
  "Is built to secure your systems while maintaining transparency and user trust at every level",
  "Combines robust protection with a commitment to safeguarding your data and reinforcing trust",
  "Protect while prioritizing data security and user trust",
];

const backgroundImages = [
  "https://adesigners.github.io/Weetech_Frontend/images/bg1.png",
  "https://adesigners.github.io/Weetech_Frontend/images/bg2.png",
  "https://adesigners.github.io/Weetech_Frontend/images/bg3.png",
  "https://adesigners.github.io/Weetech_Frontend/images/bg3.png",
  "https://adesigners.github.io/Weetech_Frontend/images/bg2.png",
  "https://adesigners.github.io/Weetech_Frontend/images/bg1.png",
];

const VISIBLE_DURATION = 3000;
const FADE_DURATION = 750;
const BLANK_DURATION = 500;

const Home = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState("visible");
  const [heroData, setHeroData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [clientsData, setClientsData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [sectorData, setSectorData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  // ✅ Contact form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  //    useEffect(() => {
  //     const fetchSections = async () => {
  //       try {
  //         const res = await axios.get(API_URL, {
  //           headers: { "Content-Type": "application/json" },
  //         });
  //         console.log("API response:", res.data);
  //         setSections(res.data.sections || []);
  //       } catch (err) {
  //         console.error("Error fetching sections:", err);
  //         setError("Failed to load content.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchSections();
  //   }, []);

  const getSection = (id) =>
    sections.find((section) => section.id === id) || { items: [], title: "" };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loadSection = async (sectionName) => {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sectionName}?key=${API_KEY}`
    );
    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length < 2) return [];

    const headers = rows[0]; // ["title","description","image","icon","video"]
    const items = rows.slice(1).map((row) =>
      Object.fromEntries(
        headers.map((key, i) => [key, row[i] || ""]) // create {title: "Welcome to WeeTech", ...}
      )
    );

    console.log(items);

    return items;
  };

  useEffect(() => {
    loadSection("Hero").then(setHeroData);
    loadSection("Testimonials").then(setTestimonialsData);
    loadSection("Clients").then(setClientsData);
    loadSection("IndustryExpertise").then(setIndustryData);
    loadSection("Sectors").then(setSectorData);
    loadSection("Team").then(setTeamData);
    loadSection("FAQ").then(setFaqData);
  }, []);

  // ✅ Handle form submit (WhatsApp integration)
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, email, message } = formData;

    const whatsappMessage = `Hello WeeTech,%0A
I would like to get in touch.%0A
Here are my details:%0A
👤 Name: ${name}%0A
📞 Mobile: ${mobile}%0A
📧 Email: ${email}%0A
💬 Message: ${message}`;

    const whatsappNumber = "9201530104"; // ← replace with your WhatsApp number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    let timer;
    if (phase === "visible") {
      timer = setTimeout(() => setPhase("fadeOut"), VISIBLE_DURATION);
    } else if (phase === "fadeOut") {
      timer = setTimeout(() => setPhase("blank"), FADE_DURATION);
    } else if (phase === "blank") {
      timer = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % framesData.length);
        setPhase("visible");
      }, BLANK_DURATION);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = document.querySelector(".form-bg-video");

    if (video) {
      video.muted = true;

      const tryPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {})
            .catch((error) => {
              console.warn("Autoplay was blocked:", error);
            });
        }
      };
      if (document.readyState === "complete") {
        tryPlay();
      } else {
        window.addEventListener("load", tryPlay);
        return () => window.removeEventListener("load", tryPlay);
      }
    }
  }, []);

  useEffect(() => {
    const video = document.querySelector(".form-bg-video");

    const enableAutoplay = () => {
      if (video) {
        video.muted = true;
        video.play().catch((err) => console.warn("Video play failed:", err));
      }
      document.removeEventListener("click", enableAutoplay);
    };

    document.addEventListener("click", enableAutoplay);

    return () => document.removeEventListener("click", enableAutoplay);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Seo
        title="WeeTech – Smart IT Solutions & Expert Consultancy"
        description="WeeTech delivers secure, scalable IT solutions: development, deployment, testing, cybersecurity, and 24/7 support. Empower your business with innovation."
        url="https://adesigners.github.io/Weetech_Frontend/#/"
        image="/images/service-banner.png"
      />
      <Header />
      <main className="home-page">
        {/* hero section */}
        <section
          className="home-hero section-margin wow zoomIn"
          id="home-hero"
          data-wow-delay=".5s"
        >
          <div
            className="inner-width hhero-container"
            style={{ position: "relative", minHeight: "300px" }}
          >
            <div className="home-head">
              Smart IT Solutions <br />
              & Expert <br />
            </div>
            {framesData.map((para, index) => {
              let className = "frame";
              if (index === activeIndex) {
                if (phase === "visible") className += " active visible";
                else if (phase === "fadeOut") className += " active fade-out";
              }
              return (
                <div
                  key={index}
                  className={className}
                  aria-hidden={index !== activeIndex}
                  style={{
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
                >
                  <span className="home-head">Consultancy</span>
                  <div className="home-para">
                    {" "}
                    Empowering businesses with smart, scalable, and secure
                    technology solutions tailored to your needs.
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* how does weetech works */}
        <section className="work-section section-margin" id="work-section">
          <div className="inner-width">
            <div className="work-wrapper-grid">
              <div className="work-txt">
                <div className="w-b wow fadeInUp" data-wow-delay=".5s">
                  <p>SECURE. INNOVATE. EMPOWER.</p>
                </div>
                <div className="w-h wow fadeInUp" data-wow-delay=".6s">
                  <h1> {heroData[0]?.title}</h1>
                </div>
                <div className="w-p wow fadeInUp" data-wow-delay=".7s">
                  <p>{heroData[0]?.description}</p>
                </div>
                <div className="w-btn-arr wow fadeInUp" data-wow-delay=".7s ">
                  <Link className="w-btns wl-btn" to="/services">
                    Our Services <FiArrowUpRight />
                  </Link>
                  <Link className="w-btns wr-btn" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="work-vdo wow zoomIn" data-wow-delay=".7s">
                <video
                  src="https://adesigners.github.io/Weetech_Frontend/images/hit-vdo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        {/* client section */}
        <section className="client-section section-margin" id="client-section">
          <div className="client-wrapper">
            <div className="inner-width client-heading">
              <div className="gradient-left-bg"></div>
              <div className="cl-head">
                <h2>{clientsData[0]?.title}</h2>
              </div>
              <div className="cl-brief">
                <p>{clientsData[0]?.description}</p>
              </div>
            </div>
            <div className="client-slider">
              <div className="scroll-track">
                <div className="mov">
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl1.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl2.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl3.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl4.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl5.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl6.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl7.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl8.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl10.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl11.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl12.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl13.png"
                    alt=""
                  />
                </div>
                <div className="mov">
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl1.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl2.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl3.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl4.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl5.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl6.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl7.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl8.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl10.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl11.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl12.png"
                    alt=""
                  />
                  <img
                    src="https://adesigners.github.io/Weetech_Frontend/images/cl13.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* firewall section */}
        <section
          className="firewall-section section-margin"
          id="firewall-section"
        >
          <div className="inner-width">
            <div
              className="firewall-wrapper-grid wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="fwg-text">
                <div className="fwgt-h">
                  <h1>{industryData[0]?.title}</h1>
                </div>
                <div className="fwgt-b">
                  <h4>{industryData[0]?.subtitle}</h4>
                </div>
                <div className="fwgt-p">
                  <p>
                    {industryData[0]?.description}
                    <li>Technology & Software Solutions</li>
                    <li>Finance & Banking Expertise</li>
                    <li>Healthcare & Life Sciences</li>
                    <li>E-Commerce & Retail Innovation</li>
                    <li>Cloud Solutions</li>
                  </p>
                </div>
                <div className="fwgt-r">
                  <div className="rev-box">
                    <div className="str-row">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                    <p>1000+ Reviews</p>
                  </div>
                </div>
              </div>
              <HashLink to="/products#header-wrapper" className="fwg-img">
                <img
                  className="floating-object"
                  src="https://adesigners.github.io/Weetech_Frontend/images/firewall.png"
                  alt="Firewall Shield"
                />
              </HashLink>
            </div>
          </div>
        </section>

        {/* industries section */}
        <section className="indus-section section-margin" id="indus-section">
          <div className="inner-width">
            <div className="indus-wrapper">
              <div
                className="section-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="smaller-heading">
                  <p>Powering Growth Through Innovation</p>
                </div>
                <div className="larger-heading">
                  <h2>Expertise Across Diverse Sectors</h2>
                </div>
              </div>
              <div className="indus-grid">
                {/* {industryData.length > 0 && industryData.map((item, idx) => {
                    (
                        <div className="industry wow zoomIn" data-wow-delay={`${0.3 + 0.2 * idx}s`}>
                            <div className="i-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="i-head">{item.title}</div>
                            <div className="i-p">
                                {item.description}
                            </div>
                        </div>
                    )
                })} */}
                <div className="industry wow zoomIn" data-wow-delay=".3s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus1.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head"> E-commerce</div>
                  <div className="i-p">
                    Scalable online store solutions for seamless shopping
                    experiences
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay=".5s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus2.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Healthcare</div>
                  <div className="i-p">
                    Secure, HIPAA-compliant patient management systems
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay=".7s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus3.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Finance</div>
                  <div className="i-p">
                    Digital banking and robust cybersecurity for data protection
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay=".9s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus4.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Education </div>
                  <div className="i-p">
                    Interactive e-learning platforms and student management
                    tools
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="1.1s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus5.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Startups & Enterprises</div>
                  <div className="i-p">
                    Custom digital transformation strategies for growth
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="1.3s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus6.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Aviation</div>
                  <div className="i-p">
                    Specialized aviation software solutions tailored to
                    operational needs
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="1.5s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus7.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Retail </div>
                  <div className="i-p">
                    Omnichannel retail solutions, inventory management, and POS
                    systems
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="1.8s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus8.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Hospitality </div>
                  <div className="i-p">
                    Hotel booking systems and customer relationship management
                    (CRM)
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="2.1s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus9.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Logistics & Transportation</div>
                  <div className="i-p">
                    Fleet management, real-time tracking, and supply chain
                    optimization
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="2.4s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus10.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Real Estate</div>
                  <div className="i-p">
                    Property listing platforms, lead management, and virtual
                    tour integration
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="2.7s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus11.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Telecommunications</div>
                  <div className="i-p">
                    Network management, billing systems, and customer service
                    platforms
                  </div>
                </div>
                <div className="industry wow zoomIn" data-wow-delay="3s">
                  <div className="i-image">
                    <img
                      src="https://adesigners.github.io/Weetech_Frontend/images/indus12.png"
                      alt=""
                    />
                  </div>
                  <div className="i-head">Manufacturing</div>
                  <div className="i-p">
                    ERP solutions, production tracking, and quality management
                    systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* process section */}
        <section
          className="process-section section-margin"
          id="process-section"
        >
          <div className="inner-width">
            <div className="process-wrapper">
              <div
                className="section-heading wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="smaller-heading">
                  <p>A SIMPLE PROCESS TO BRING YOUR IDEAS TO LIFE.</p>
                </div>
                <div className="larger-heading">
                  <h2>How It Works</h2>
                </div>
              </div>

              <section className="stacking-card">
                <div id="stack">
                  <div className="card wow fadeInLeft" data-wow-delay=".5s">
                    <span className="card-number">01</span>
                    <div className="cardtxt">
                      <h3>Assessment</h3>
                      <p>
                        We conduct a thorough assessment of your current
                        cybersecurity measures and identify any vulnerabilities.
                      </p>
                    </div>
                  </div>

                  <div className="card wow fadeInRight" data-wow-delay=".5s">
                    <span className="card-number">02</span>
                    <div className="cardtxt">
                      <h3>Planning</h3>
                      <p>
                        Based on the assessment, we create a customized
                        cybersecurity strategy tailored to your business needs.
                      </p>
                    </div>
                  </div>

                  <div className="card wow fadeInLeft" data-wow-delay=".5s">
                    <span className="card-number">03</span>
                    <div className="cardtxt">
                      <h3>Implementation</h3>
                      <p>
                        We implement cybersecurity solutions that integrate
                        seamlessly with your business operations.
                      </p>
                    </div>
                  </div>

                  <div className="card wow fadeInRight" data-wow-delay=".5s">
                    <span className="card-number">04</span>
                    <div className="cardtxt">
                      <h3>Monitoring</h3>
                      <p>
                        Our continuous monitoring services ensure that potential
                        threats are identified and mitigated in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="card wow fadeInLeft" data-wow-delay=".5s">
                    <span className="card-number">05</span>
                    <div className="cardtxt">
                      <h3>Incident Response</h3>
                      <p>
                        We offer a rapid incident response service to minimize
                        the impact of cybersecurity breaches on your
                        organization.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Projects section */}
        {/* <Projects /> */}
        <Demoprojects />

        {/* form-section */}
        <section className="form-section" id="form-section">
          <div className="form-wrapper">
            <video
              className="form-bg-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="https://adesigners.github.io/Weetech_Frontend/images/formvdo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="inner-width">
              <div
                className="contact-form-container wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h3 className="form-subtitle">CONTACT US</h3>
                <h2 className="form-title">Get in touch today</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Please type your message here..."
                    required
                    onChange={handleChange}
                  ></textarea>

                  <div className="form-agreement">
                    <input type="checkbox" id="agree" required />
                    <label htmlFor="agree">
                      By clicking <strong>Send application</strong>, you agree
                      to our{" "}
                      <Link className="a" to="/">
                        User Agreement
                      </Link>
                      <Link className="a" to="/">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />

        <CookiePopup />
      </main>
    </>
  );
};

export default Home;
