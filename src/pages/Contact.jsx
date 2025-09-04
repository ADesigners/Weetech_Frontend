import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Development",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, subject, message } = formData;

    // ✅ WhatsApp formatted message
    const whatsappMessage = `Hello WeeTech,%0A
I would like to get in touch.%0A
Here are my details:%0A
👤 Name: ${firstName} ${lastName}%0A
📧 Email: ${email}%0A
📞 Phone: ${phone}%0A
📌 Subject: ${subject}%0A
💬 Message: ${message}`;

    // ✅ Replace with your WhatsApp number (country code + number, no + sign)
    const whatsappNumber = "9201530104";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // ✅ Optional: reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "Development",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <main className="contact-page" id="contact-page">
        {/* contact form section */}
        <div className="cform-section section-margin" id="cform-section">
          <div className="inner-width">
            <div className="cform-wrapper">
              <div
                className="contact-heading wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h2 className="contact-head">Contact Us</h2>
                <p className="contact-para">
                  Any question or remarks? Just write us a message!
                </p>
              </div>

              <div className="cpage-form-container">
                <div className="contact-box">
                  {/* Left Contact Info */}
                  <div
                    className="contact-left wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <h3>Contact Information</h3>
                    <p>Say something to start a live chat!</p>
                    <div className="cp-info">
                      <div className="info-item">
                        <FaPhoneAlt className="info-icon" />
                        +91-9201530104
                      </div>

                      <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        official.weetech@gmail.com
                      </div>

                      <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        Ujjain
                        <br />
                        Madhya Pradesh - 456001
                      </div>
                    </div>
                    <div className="inf-s-circle"></div>
                    <div className="inf-l-circle"></div>
                  </div>

                  {/* Right Contact Form */}
                  <div
                    className="contact-right wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row subject-row">
                        <label>Select Subject?</label>
                        <div className="radio-group">
                          <label>
                            <input
                              type="radio"
                              name="subject"
                              value="Development"
                              checked={formData.subject === "Development"}
                              onChange={handleChange}
                            />{" "}
                            Development
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="subject"
                              value="Cyber Security"
                              checked={formData.subject === "Cyber Security"}
                              onChange={handleChange}
                            />{" "}
                            Cyber Security
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="subject"
                              value="Training"
                              checked={formData.subject === "Training"}
                              onChange={handleChange}
                            />{" "}
                            Training
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="subject"
                              value="Digital Marketing"
                              checked={formData.subject === "Digital Marketing"}
                              onChange={handleChange}
                            />{" "}
                            Digital Marketing
                          </label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          rows="1"
                          name="message"
                          placeholder="Write your message.."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <button type="submit" className="send-btn">
                        Send Message
                      </button>
                    </form>
                    <div className="send-arrow">
                      <img src="/images/letter_send 1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
