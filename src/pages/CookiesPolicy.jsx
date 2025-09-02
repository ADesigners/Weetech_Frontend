import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CookiesPolicy = () => {
  return (
    <>
      <Header />

      <section className="policy-section section-margin">
        <div className="inner-width">
          <main className="policy-doc">
            <p className="p-date">
              <strong>Effective Date : </strong>20/11/2024
            </p>
            <p className="pol-intro">
              At WeeTech, your privacy is of paramount importance to us. This
              Privacy Policy outlines how we collect, use, disclose, and protect
              your personal information in relation to our training programs,
              job placement services, and consultancy.
            </p>

            <h2 className="pol-head">1. Information We Collect</h2>
            <p className="pol-br">We may collect the following types of information from you:</p>
            <ul className="pol-br">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                contact details (email, phone number), address, educational
                qualifications, and employment history.
              </li>
              <li>
                <strong>Professional Information:</strong> Skills,
                certifications, work experience, and other details relevant to
                job placements.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit/debit card details,
                billing information.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and website usage data.
              </li>
            </ul>

            <h2 className="pol-head">2. How We Use Your Information</h2>
            <p className="pol-br">
              We collect and use your personal information for the following
              purposes:
            </p>
            <ul className="pol-br">
              <li>
                <strong>Training Programs:</strong> To enroll you in training
                courses and track your progress.
              </li>
              <li>
                <strong>Job Placement Services:</strong> To assist in
                identifying job opportunities, sharing your information with
                potential employers, and providing career guidance.
              </li>
              <li>
                <strong>Consultancy Services:</strong> To offer personalized
                consultancy, including cybersecurity or IT-related advice.
              </li>
              <li>
                <strong>Customer Support:</strong> To respond to inquiries,
                provide assistance, and improve our services.
              </li>
              <li>
                <strong>Marketing and Communication:</strong> To send you
                updates, newsletters, and information about new programs and
                offers (you can opt out at any time).
              </li>
              <li>
                <strong>Payment Processing:</strong> To facilitate payment for
                our services.
              </li>
            </ul>

            <h2 className="pol-head">3. How We Share Your Information</h2>
            <p className="pol-br">
              We do not sell, rent, or trade your personal information to third
              parties. However, we may share your information in the following
              cases:
            </p>
            <ul className="pol-br">
              <li>
                <strong>Job Placements:</strong> With your consent, we share
                relevant information with prospective employers and recruitment
                agencies.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share information
                with third-party service providers (e.g., payment processors, IT
                support) to help us operate our services.
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law, we may
                disclose your information to comply with legal obligations or
                respond to lawful requests from government authorities.
              </li>
            </ul>

            <h2 className="pol-head">4. Data Security</h2>
            <p className="pol-br">
              We take appropriate measures to safeguard your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. This includes using encryption, secure servers, and
              regular security audits. However, no data transmission over the
              internet is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="pol-head">5. Your Rights</h2>
            <p className="pol-br">You have the right to:</p>
            <ul className="pol-br">
              <li>Access, correct, or delete your personal information.</li>
              <li>
                Withdraw your consent for us to process your data (note: this
                may affect our ability to provide services to you).
              </li>
              <li>Opt-out of receiving marketing communications.</li>
            </ul>
            <p className="pol-br">
              To exercise these rights, please contact us at [Insert Contact
              Email].
            </p>

            <h2 className="pol-head">6. Data Retention</h2>
            <p className="pol-br">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this policy, or as
              required by law.
            </p>

            <h2 className="pol-head">7. Cookies and Tracking</h2>
            <p className="pol-br">
              Our website uses cookies to enhance your browsing experience,
              gather usage data, and improve our services. You can manage or
              disable cookies in your browser settings, but this may affect
              certain functionalities of our website.
            </p>

            <h2 className="pol-head">8. Changes to This Privacy Policy</h2>
            <p className="pol-br">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the effective date will be
              updated accordingly.
            </p>
          </main>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default CookiesPolicy;
