import React from "react";
import "./AppShowcase.css";
import { Smartphone, ShieldCheck, Zap } from "lucide-react";

// Import images
import img1 from "../assets/appScreen/IMG_3720.PNG";
import img2 from "../assets/appScreen/IMG_3721.PNG";
import img3 from "../assets/appScreen/IMG_3722.PNG";
import img4 from "../assets/appScreen/IMG_3723.PNG";
import img5 from "../assets/appScreen/IMG_3724.PNG";
import img6 from "../assets/appScreen/IMG_3725.PNG";
import img7 from "../assets/appScreen/IMG_3726.PNG";

const AppShowcase = () => {
  const screenshots = [
    { src: img1, alt: "Mobile App Screen 1" },
    { src: img2, alt: "Mobile App Screen 2" },
    { src: img3, alt: "Mobile App Screen 3" },
    { src: img4, alt: "Mobile App Screen 4" },
    { src: img5, alt: "Mobile App Screen 5" },
    { src: img6, alt: "Mobile App Screen 6" },
    { src: img7, alt: "Mobile App Screen 7" },
  ];

  return (
    <div className="app-showcase-container">
      <header className="showcase-header">
        <h1 className="showcase-title">Smart Cinnamon <span>Mobile App</span></h1>
        <p className="showcase-subtitle">
          Experience the power of advanced cinnamon peeling and quality assessment right from your pocket. 
          Our mobile application connects seamlessly with our smart devices, bringing real-time analytics, 
          control, and efficiency to your fingertips. This dedicated tool is designed to elevate the standard of the cinnamon industry in Sri Lanka.
        </p>
        <div className="features-badges">
          <div className="badge">
            <Smartphone className="badge-icon" size={24} />
            <span>Real-time Sync</span>
          </div>
          <div className="badge">
            <Zap className="badge-icon" size={24} />
            <span>Fast & Responsive</span>
          </div>
          <div className="badge">
            <ShieldCheck className="badge-icon" size={24} />
            <span>Secure Data</span>
          </div>
        </div>
      </header>

      <section className="screenshots-section">
        <h2 className="section-heading">App Interface</h2>
        <div className="gallery-container">
          <div className="screenshots-gallery">
            {[...screenshots, ...screenshots].map((screen, index) => (
              <div key={index} className="screenshot-wrapper">
                <div className="device-frame">
                  <img src={screen.src} alt={screen.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppShowcase;
