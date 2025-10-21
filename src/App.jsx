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
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="350px"
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
              👋 Hii, I'm <span className="highlight">Md Jishan</span>
            </h2>
            <h4>I'm a Full Stack Developer</h4>
          </div>

          <div className="about">
            <h4>About</h4>
            <hr />
            <p>
              A passionate Computer Science student and web developer who loves
              building creative and functional digital experiences. I enjoy
              turning ideas into reality through code, exploring new
              technologies, and constantly learning. Outside coding, I’m a movie
              lover, foodie, and traveler who values creativity and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
