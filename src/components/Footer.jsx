import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="inner-width">
          <div className="footer-wrapper">
            <div className="ftop">
              <Link to="/" className="logo">
                WeeTech
              </Link>
            </div>
            <div className="fmid">
              <div className="midlft">
                <div className="f-col">
                  <div className="fch">Quick Links</div>
                  <div className="fcl">
                    <Link className="fnl" to="/">
                      FAQs
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/">
                      Home
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/services">
                      Services
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/about">
                      Overview
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="f-col">
                  <div className="fch">Company</div>
                  <div className="fcl">
                    <Link className="fnl" to="/privacy">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/terms">
                      Terms of services
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/cookies">
                      Cookies Policy
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/legalagreement">
                      Legal Agreement
                    </Link>
                  </div>
                  <div className="fcl">
                    <Link className="fnl" to="/knowbase">
                      Knowledge Base
                    </Link>
                  </div>
                </div>
              </div>
              <div className="midrgt">
                <div className="sih">Follow Us</div>
                <div className="social-icons">
                  <a href="https://www.youtube.com/@Cybite-official" target="/blank" className="sc-i-l">
                    <FaYoutube className="s-icon" />
                  </a>
                  <a href="https://www.facebook.com/Cyberinformationtech/" target="/blank" className="sc-i-l">
                    <FaFacebookF className="s-icon" />
                  </a>
                  <a href="https://x.com/cybite_official?s=11" target="/blank" className="sc-i-l">
                    <FaTwitter className="s-icon" />
                  </a>
                  <a href="https://www.instagram.com/cybite_/#" target="/blank" className="sc-i-l">
                    <FaInstagram className="s-icon" />
                  </a>
                  <a href="https://in.linkedin.com/company/cyber-information-technology-corporation" target="/blank" className="sc-i-l">
                    <FaLinkedinIn className="s-icon" />
                  </a>
                </div>
               <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=official.weetech@gmail.com&su=Inquiry&body=Hello%20WeeTech%2C"
  target="_blank"
  rel="noopener noreferrer"
  className="mail-btn"
>
  Mail Us
</a>

              </div>
            </div>
            <div className="fbot">
              <div className="copyright">
                <Link className="crgtl" to="/">WeeTech</Link> @ 2025. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
