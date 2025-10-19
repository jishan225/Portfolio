import React from "react";
import DarkVeil from "./DarkVeil";
import TiltedCard from "./TiltedCard"; // ✅ Import TiltedCard
import cardImg from "./assets/CardImg.jpeg";
import './TiltedCard.css';
import Navbar from "./Navbar";

function App() {
  return (
     
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* ✅ Background Component */}
      <Navbar/>
      <DarkVeil />

      {/* ✅ Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "white",
          marginTop: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
  
        

        <div className="card">

        {/* ✅ TiltedCard Usage */}
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
      </div>
    </div>
  );
}

export default App;
