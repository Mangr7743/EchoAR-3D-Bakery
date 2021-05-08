import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me-title">About this Bakery</h2>
      <p className="about-me-description">
        Food items in our menu can be viewed in 3d using echoAR, by scanning the
        QR codes on your phone!
      </p>
      <img
        className="echo-logo"
        src="/images/echoAR.png"
        alt="echoAR company logo"
      />
    </div>
  );
}

export default AboutMe;
