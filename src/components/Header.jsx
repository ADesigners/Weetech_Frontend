import React, { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const serviceDropdownRef = useRef(null);
  const productDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  useLayoutEffect(() => {
    const refs = {
      services: serviceDropdownRef,
      products: productDropdownRef,
      about: aboutDropdownRef,
    };

    if (openMenu && refs[openMenu]?.current) {
      gsap.fromTo(
        refs[openMenu].current.querySelectorAll(".service-links"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [openMenu]);

  const [phoneNavOpen, setPhoneNavOpen] = useState(false);
  const [phoneDropOpen, setPhoneDropOpen] = useState({
    services: false,
    products: false,
    about: false,
  });

  const handlePhoneNavToggle = () => {
    setPhoneNavOpen((prev) => !prev);
    if (phoneNavOpen) {
      setPhoneDropOpen({ services: false, products: false, about: false });
    }
  };

  const handlePhoneDropToggle = (menu) => {
    setPhoneDropOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <div className="header-wrapper" id="header-wrapper">
        <div className="inner-width">
          <header className="header">
            <Link to="/" className="logo">
              WeeTech
            </Link>

            <nav className="navbar">
              {location.pathname !== "/" && (
                <Link to="/" className="nav-links">
                  Home
                </Link>
              )}

              <div
                className="nav-links"
                id="it-services"
                onClick={() => toggleMenu("services")}
              >
                IT Services{" "}
                <FaChevronDown
                  className={`chevron-icon ${
                    openMenu === "services" ? "rotated" : ""
                  }`}
                />
              </div>
              <div
                ref={serviceDropdownRef}
                className={`service-dropdown dropdown ${
                  openMenu === "services" ? "active" : ""
                }`}
              >
                <div className="nav-service-grid">
                  <div className="nav-service-col">
                    <div className="nsg-h">IT SERVICES</div>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon1.png" alt="navicon1" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Web Services</div>
                        <div className="nst-p">Learn about your users</div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon2.png" alt="navicon2" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Android Services</div>
                        <div className="nst-p">Monitor your metrics</div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon3.png" alt="navicon3" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">IOS Services</div>
                        <div className="nst-p">Measure B2B account health</div>
                      </div>
                    </Link>
                  </div>

                  <div className="nav-service-col">
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon4.png" alt="navicon4" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Mac Services</div>
                        <div className="nst-p">
                          Real-time analytics user trends
                        </div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon5.png" alt="navicon5" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Linux Services</div>
                        <div className="nst-p">
                          Segments with perfect target
                        </div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon6.png" alt="navicon6" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Windows Services</div>
                        <div className="nst-p">Surface hidden trends</div>
                      </div>
                    </Link>
                  </div>

                  <div className="nav-service-col">
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon7.png" alt="navicon7" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">UI/UX Design</div>
                        <div className="nst-p">Connect to your warehouse</div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon8.png" alt="navicon8" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Testing</div>
                        <div className="nst-p">Keep data clean & usable</div>
                      </div>
                    </Link>
                    <Link to="/services" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon9.png" alt="navicon9" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Deployment</div>
                        <div className="nst-p">Protect customer data</div>
                      </div>
                    </Link>
                  </div>

                  <div className="nav-service-col">
                    <div className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon10.png" alt="navicon10" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Digital Marketing</div>
                        <div className="nst-p">Connect to your warehouse</div>
                      </div>
                    </div>
                 
                  </div>

                 
                  
                </div>
              </div>

             
              <div
                ref={productDropdownRef}
                className={`products-dropdown dropdown ${
                  openMenu === "products" ? "active" : ""
                }`}
              >
                <div className="nav-service-grid">
                  <div className="nav-service-col">
                    <div className="nsg-h">Development</div>
                    <a href="https://seccouncil.com/" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon1.png" alt="navicon1" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Sec Council</div>
                        <div className="nst-p">
                          Learn about potential skills
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="nav-service-col">
                    <div className="nsg-h">Cyber Security</div>
                    <Link to="/products" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon1.png" alt="navicon1" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Firewall Product</div>
                        <div className="nst-p">Learn about your users</div>
                      </div>
                    </Link>
                  </div>

                  <div className="nav-service-col">
                    <div className="nsg-h">Marketing</div>
                    <a href="https://www.goldengallopm.com/" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon1.png" alt="navicon1" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Golden Gallop Marketing</div>
                        <div className="nst-p">Boost your visibility</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="nav-links"
                id="about"
                onClick={() => toggleMenu("about")}
              >
                About Us{" "}
                <FaChevronDown
                  className={`chevron-icon ${
                    openMenu === "about" ? "rotated" : ""
                  }`}
                />
              </div>
              <div
                ref={aboutDropdownRef}
                className={`about-dropdown dropdown ${
                  openMenu === "about" ? "active" : ""
                }`}
              >
                <div className="nav-service-grid">
                  <div className="nav-service-col">
                    <Link to="/about" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon1.png" alt="navicon1" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">About Firm</div>
                        <div className="nst-p">Learn about us</div>
                      </div>
                    </Link>
                    <Link to="/career" className="service-links">
                      <div className="nav-ser-icon">
                        <img src="/images/navicon3.png" alt="navicon3" />
                      </div>
                      <div className="nav-ser-text">
                        <div className="nst-h">Career</div>
                        <div className="nst-p">Learn about opportunities</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="nav-links">
                Contact Us
              </Link>
            </nav>

            <div className="nav-menu">
              <input
                type="checkbox"
                checked={phoneNavOpen}
                onChange={handlePhoneNavToggle}
                aria-label="Toggle navigation menu"
              />
              <svg viewBox="0 0 100 56">
                <use xlinkHref="#menu" />
                <use xlinkHref="#menu" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol viewBox="0 0 100 56" id="menu">
                  <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
                </symbol>
              </svg>
            </div>
          </header>
        </div>

        <div
          className="phone-nav"
          style={{
            opacity: phoneNavOpen ? 1 : 0,
            maxHeight: phoneNavOpen
              ? "calc(100vh - var(--header-height))"
              : "0",
            // height : phoneNavOpen ? "fit-content" : "0",
            pointerEvents: phoneNavOpen ? "all" : "none",
            transition: "all .75s ease-in",
          }}
        >
          <div className="inner-width">
            <div className="phone-nav-wrapper">
              {location.pathname !== "/" && (
                <ul className="phone-nav-links">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </ul>
              )}

              <ul className="phone-nav-links">
                <div
                  className="nav-links"
                  id="phn-it-services"
                  onClick={() => handlePhoneDropToggle("services")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  IT Services{" "}
                  <FaChevronDown
                    className={`chevron-icon${
                      phoneDropOpen.services ? " rotated" : ""
                    }`}
                    style={{
                      transition: "transform .2s",
                      marginLeft: 8,
                      transform: phoneDropOpen.services
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
                <div
                  className="phn-service-dropmenu dropmenu"
                  style={{
                    opacity: phoneDropOpen.services ? 1 : 0,
                    maxHeight: phoneDropOpen.services ? "800px" : "0",
                    pointerEvents: phoneDropOpen.services ? "all" : "none",
                    transition: "all .5s",
                    overflow: "hidden",
                  }}
                >
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon1.png" alt="navicon1" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Web Services</div>
                      <div className="nst-p">Learn about your users</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon2.png" alt="navicon2" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Android Services</div>
                      <div className="nst-p">Monitor your metrics</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon3.png" alt="navicon3" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">IOS Services</div>
                      <div className="nst-p">Measure B2B account health</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon4.png" alt="navicon4" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Mac Services</div>
                      <div className="nst-p">
                        Real-time analytics user trends
                      </div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon5.png" alt="navicon5" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Linux Services</div>
                      <div className="nst-p">Segments with perfect target</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon6.png" alt="navicon6" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Windows Services</div>
                      <div className="nst-p">Surface hidden trends</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon7.png" alt="navicon7" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">UI/UX Design</div>
                      <div className="nst-p">Connect to your warehouse</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon8.png" alt="navicon8" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Testing</div>
                      <div className="nst-p">Keep data clean & usable</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon9.png" alt="navicon9" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Deployment</div>
                      <div className="nst-p">Protect customer data</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon10.png" alt="navicon10" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Digital Marketing</div>
                      <div className="nst-p">Connect to your warehouse</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon10.png" alt="navicon10" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Services</div>
                      <div className="nst-p">Learn about your user</div>
                    </div>
                  </Link>
                  <Link to="/services" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon11.png" alt="navicon11" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Training</div>
                      <div className="nst-p">Monitor your metrics</div>
                    </div>
                  </Link>
                  
                </div>
              </ul>
              <ul className="phone-nav-links">
                <div
                  className="nav-links"
                  id="phn-products"
                  onClick={() => handlePhoneDropToggle("products")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  Our Products{" "}
                  <FaChevronDown
                    className={`chevron-icon${
                      phoneDropOpen.products ? " rotated" : ""
                    }`}
                    style={{
                      transition: "transform .2s",
                      marginLeft: 8,
                      transform: phoneDropOpen.products
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
                <div
                  className="phn-products-dropmenu dropmenu"
                  style={{
                    opacity: phoneDropOpen.products ? 1 : 0,
                    maxHeight: phoneDropOpen.products ? "400px" : "0",
                    pointerEvents: phoneDropOpen.products ? "all" : "none",
                    transition: "all .5s",
                    overflow: "hidden",
                  }}
                >
                  <a href="https://seccouncil.com/" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon1.png" alt="navicon1" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Sec Council</div>
                      <div className="nst-p">Learn trending potential skills</div>
                    </div>
                  </a>

                  <Link to="/products" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon1.png" alt="navicon1" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Firewall Product</div>
                      <div className="nst-p">Learn about your users</div>
                    </div>
                  </Link>

                  <a href="https://www.goldengallopm.com/" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon1.png" alt="navicon1" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Golden Gallop Marketing</div>
                      <div className="nst-p">Boost your visibility</div>
                    </div>
                  </a>
                </div>
              </ul>
              <ul className="phone-nav-links">
                <div
                  className="nav-links"
                  id="phn-about"
                  onClick={() => handlePhoneDropToggle("about")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  About us{" "}
                  <FaChevronDown
                    className={`chevron-icon${
                      phoneDropOpen.about ? " rotated" : ""
                    }`}
                    style={{
                      transition: "transform .2s",
                      marginLeft: 8,
                      transform: phoneDropOpen.about
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
                <div
                  className="phn-about-dropmenu dropmenu"
                  style={{
                    opacity: phoneDropOpen.about ? 1 : 0,
                    maxHeight: phoneDropOpen.about ? "300px" : "0",
                    pointerEvents: phoneDropOpen.about ? "all" : "none",
                    transition: "all .5s",
                    overflow: "hidden",
                  }}
                >
                  <Link to="/about" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon1.png" alt="navicon1" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">About Firm</div>
                      <div className="nst-p">Learn about us</div>
                    </div>
                  </Link>
                  <Link to="/career" className="service-links">
                    <div className="nav-ser-icon">
                      <img src="/images/navicon3.png" alt="navicon3" />
                    </div>
                    <div className="nav-ser-text">
                      <div className="nst-h">Career</div>
                      <div className="nst-p">Explore opportunities with us</div>
                    </div>
                  </Link>
                </div>
              </ul>
              <ul className="phone-nav-links">
                <Link to="/contact" className="nav-links">
                  Contact Us
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
