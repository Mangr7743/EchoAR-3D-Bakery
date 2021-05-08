import React from "react";

function AboutMe() {
  return (
    <div id="about" className="about-me">
      <h2 className="about-me-title">About this Bakery</h2>
      <p className="about-me-description">
        At Echo Bakery, we love innovation, so our online menu comes with a
        twist. Food items in our menu can be viewed in 3D using echoAR, by
        scanning the QR codes on your phone. Using augmented reality, you can
        visualize what your food will look like once it arrives! Using this
        technology we hope to create an immersive experience for our customers,
        because here at Echo Bakery, our food and tech is simply the best!
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
