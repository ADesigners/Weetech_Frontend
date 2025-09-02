

import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Uncomment this for development (always show popup)
    // setShowPopup(true);

    // Production: Show only if not already accepted
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted || cookiesAccepted === "false") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, []);

  const handleAcceptAll = () => {
    const acceptedPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookiePreferences(acceptedPrefs);
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(acceptedPrefs));
    setShowPopup(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setShowPopup(false);
  };

  const handleCheckboxChange = (e) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className={`cookie-popup ${showPopup ? "slide-up" : ""} ${showSettings ? "show-settings" : ""}`}>
      <button className="close-btn" onClick={handleClose}>×</button>

      <div className="cookie-content">
        <div className="cookie-text">
          <p>
            We use cookies to enhance your experience. You can manage your
            preferences or accept all cookies.
          </p>
        </div>

        <div className="cookie-buttons">
          <button className="manage-btn" onClick={toggleSettings}>
            {showSettings ? "Close Cookies" : "Manage Cookies"}
          </button>
          <button className="accept-btn" bg-yellow onClick={handleAcceptAll}>Accept All</button>
        </div>
      </div>

      <div className={`cookie-settings-wrapper ${showSettings ? "slide-settings-up" : ""}`}>
        {showSettings && (
          <div className="cookie-settings">
            <label>
              <input
                type="checkbox"
                name="necessary"
                checked
                disabled
              />
              Necessary Cookies (Required)
            </label>
            <label>
              <input
                type="checkbox"
                name="analytics"
                checked={cookiePreferences.analytics}
                onChange={handleCheckboxChange}
              />
              Analytics Cookies
            </label>
            <label>
              <input
                type="checkbox"
                name="marketing"
                checked={cookiePreferences.marketing}
                onChange={handleCheckboxChange}
              />
              Marketing Cookies
            </label>
            <button className="save-btn" onClick={handleSavePreferences}>Save Preferences</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookiePopup;
