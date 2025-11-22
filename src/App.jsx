import React from "react";
import TiltedCard from "./TiltedCard";
import cardImg from "./assets/CardImg.jpeg";
import "./TiltedCard.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <TiltedCard
            imageSrc={cardImg}
            altText="Md Jishan - Developer"
            captionText="Md Jishan"
            containerHeight="380px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
        <div className="text-section">
          <div className="HeadName">
            <h2>
              Hello, I'm <span className="highlight">Md Jishan</span>
            </h2>
            <h4>Full-Stack Developer & AI Enthusiast</h4>
          </div>
          <div className="about">
            <h4>About</h4>
            <hr />
            <p>
              A final-year Computer Science and Engineering student, web
              developer, and AI enthusiast with hands-on experience in the MERN
              stack. Passionate about building innovative and user-friendly web
              applications, transforming ideas into impactful digital solutions
              through clean and efficient code. Always eager to learn, explore
              new technologies, and combine creativity with problem-solving to
              deliver meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

