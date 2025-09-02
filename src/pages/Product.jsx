import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
  const CurvedFourPointStar = ({ size = 30, color = "#ffffff" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 7C11 10 9 12 6 13c3 1 5 3 6 6 1-3 3-5 6-6-3-1-5-3-6-6z" />{" "}
    </svg>
  );

  return (
    <>
      <Header />

      <main className="product-page" id="product-page">
        {/* products hero section */}
        <section className="pro-hero-section section-margin" id="pro-hero-section">
          <div className="inner-width">
            <div className="pro-hero-wrapper">
              <div className="ph-left wow fadeInLeft" data-wow-delay=".5s">
                <h1>
                  Ultimate <img src="/images/fw-icon.png" alt="" />
                  <br />
                  Weetech Firewall
                </h1>
                <p>
                  <span>--------------</span> Designed for Server Protection
                </p>
              </div>
              <div className="ph-right wow fadeInRight" data-wow-delay=".5s">
                <p className="ph-para">
                  Experience the peace of mind that comes with knowing your data
                  is secured by an impenetrable defence. Weetech Firewall is a
                  powerful, easy-to-use security device designed to safeguard
                  businesses and individuals from ever-evolving cyber threats.
                </p>

                <div className="ph-stats">
                  <div className="stat">
                    <h3 className="st-h">4.9 L</h3>
                    <p className="st-p">Active Users</p>
                  </div>
                  <div className="stat">
                    <h3 className="st-h">20k+</h3>
                    <p className="st-p">Protected Servers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ribbon-box" data-wow-delay=".5s">
            <div className="ribbon ribbon-1">
              <div className="ribbon-content">
                <p>NEXT-GEN FIREWALL</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>EASY TO INSTALL</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>CUTTING EDGE</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>PRIVACY FIRST</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>DATA FORTRESS</p>
              </div>
            </div>
            <div className="ribbon ribbon-2">
              <div className="ribbon-content">
                <p>NEXT-GEN FIREWALL</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>EASY TO INSTALL</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>CUTTING EDGE</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>PRIVACY FIRST</p>
                <CurvedFourPointStar className="rib-icon" />
                <p>DATA FORTRESS</p>
              </div>
            </div>
          </div>
        </section>

        {/* benefits section */}
        <section className="benefit-section section-margin">
          <div className="inner-width">
            <div className="ben-wrapper">
              <div className="benefit-heading wow fadeInUp" data-wow-delay=".5s">Benefits of Weetech Firewall</div>
              <div className="benefit-para wow fadeInUp" data-wow-delay=".6s">
                Experience the peace of mind that comes with knowing your data
                is secured by an impenetrable defense. The Weetech Firewall is a
                powerful, easy-to-use security device designed to safeguard
                businesses and individuals from ever-evolving cyber threats.
              </div>

              <div className="benefits-container">
                <div className="ben-card wow fadeInUp" data-wow-delay=".4s">
                  <div className="ben-rect">
                    <img
                      src="/images/ben1.svg"
                      alt="Unwavering Data Security"
                    />
                  </div>
                  <h3>Unwavering Data Security</h3>
                </div>

                <div className="ben-card wow fadeInUp" data-wow-delay=".6s">
                  <div className="ben-rect">
                    <img src="/images/ben2.svg" alt="Multi Purpose Defence" />
                  </div>
                  <h3>Multi Purpose Defence</h3>
                </div>

                <div className="ben-card wow fadeInUp" data-wow-delay=".8s">
                  <div className="ben-rect">
                    <img
                      src="/images/ben3.svg"
                      alt="Enhanced Network Performance"
                    />
                  </div>
                  <h3>Enhanced Network Performance</h3>
                </div>

                <div className="ben-card wow fadeInUp" data-wow-delay="1s">
                  <div className="ben-rect">
                    <img
                      src="/images/ben4.svg"
                      alt="Simplified Management & Reduced Costs"
                    />
                  </div>
                  <h3>Simplified Management & Reduced Costs</h3>
                </div>

                <div className="ben-card wow fadeInUp" data-wow-delay="1.2s">
                  <div className="ben-rect">
                    <img src="/images/ben5.svg" alt="Scalable Protection" />
                  </div>
                  <h3>Scalable Protection</h3>
                </div>

                <div className="ben-card wow fadeInUp" data-wow-delay="1.4s">
                  <div className="ben-rect">
                    <img src="/images/ben6.svg" alt="Compliance Assistance" />
                  </div>
                  <h3>Compliance Assistance</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* features section */}
        <section className="features-section section-margin">
          <div className="inner-width">
            <div className="feature-heading wow fadeInUp" data-wow-delay=".5s">
              Features of the WeeTech Firewall
            </div>

            <div className="feature-container">
              <div className="row">
                <div className="feature-card wow zoomIn" data-wow-delay=".5s">
                  <div className="circle">
                    <div className="gradient-border"></div>
                    <img src="images/nest_remote_comfort_sensor.png" alt="" />
                  </div>

                  <div className="card-text">
                    <h5>Wi-Fi Security</h5>
                    <ul>
                      <li>Mobile Security</li>
                      <li>Child Security</li>
                      <li>Laptop Security</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-card wow zoomIn" data-wow-delay=".5s">
                  <div className="circle">
                    <div className="gradient-border"></div>
                    <img src="images/release_alert.png" alt="" />
                  </div>

                  <div className="card-text">
                    <h5>UTM</h5>
                    <p className="utm">Unified Threat Management</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="feature-card wow zoomIn" data-wow-delay=".5s">
                  <div className="circle">
                    <div className="gradient-border"></div>
                    <img src="images/coronavirus.png" alt="" />
                  </div>

                  <div className="card-text">
                    <h5>Anti Virus</h5>
                    <h5>Anti Malware</h5>
                    <h5>Firewall</h5>
                  </div>
                </div>

                <div className="feature-card wow zoomIn" data-wow-delay=".5s">
                  <div className="circle">
                    <div className="gradient-border"></div>
                    <img src="images/vpn_key_off.png" alt="" />
                  </div>

                  <div className="card-text">
                    <p className="vpn">Intrusion Detection System</p>
                    <p className="vpn">Intrusion Prevention System</p>
                    <p className="vpn">System Web Filtering</p>
                    <p className="vpn">VPN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* options section */}
        <section className="options-section section-margin">
          <div className="inner-width">
            <div className="option-heading wow fadeInUp" data-wow-delay=".5s">User-Centric Options</div>
            <div className="option-para wow fadeInUp" data-wow-delay=".5s">
              The WeeTech Firewall isn't a one-size-fits-all solution. We offer
              robust security configurations tailored to your specific needs,
              whether you're a:
            </div>

            <div className="option-container">
              <div className="frame wow bounceInUp" data-wow-delay=".5s">
                <div className="rectangle-frame">
                  <img src="images/Frame 23.png" alt="Single User" />
                  <h3>Single User</h3>
                </div>
                <p>
                  Protect your personal data and devices from online threats
                  with a user-friendly setup.
                </p>
              </div>

              <div className="frame wow bounceInUp" data-wow-delay=".7s">
                <div className="rectangle-frame">
                  <img src="images/Frame 26.png" alt="Multiple User (Family)" />
                  <h3>Multiple User (Family)</h3>
                </div>
                <p>
                  Safeguard your family's online activities and connected
                  devices with a comprehensive security shield.
                </p>
              </div>

              <div className="frame wow bounceInUp" data-wow-delay=".9s">
                <div className="rectangle-frame">
                  <img src="images/Frame 27.png" alt="Small Business" />
                  <h3>Small Business</h3>
                </div>
                <p>
                  Ensure the confidentiality and integrity of your business data
                  with scalable protection that grows with you.
                </p>
              </div>

              <div className="frame wow bounceInUp" data-wow-delay="1.1s">
                <div className="rectangle-frame">
                  <img
                    src="images/Frame 28.png"
                    alt="Medium and Large Enterprise"
                  />
                  <h3>Medium and Large Enterprise</h3>
                </div>
                <p>
                  Experience enterprise-grade security with centralized
                  management for a worry-free network environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
        
      </main>
    </>
  );
};

export default Products;

