import React from "react";
import {
  Leaf,
  Cpu,
  Activity,
  BarChart3,
  ShieldCheck,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { researchData } from "../data/researchData.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="badge">
          <Leaf size={18} />
          RP-25-26J-375
        </div>

        <h1>SMARTCINNAMON</h1>
        <p className="subtitle">
          A Multi-Modal Machine Learning and IoT Framework for Precision
          Cinnamon Cultivation
        </p>

        <p className="heroText">
          SMARTCINNAMON is an integrated AI, IoT, GIS and machine learning based
          platform designed to improve Ceylon cinnamon cultivation through soil
          monitoring, disease prediction, land optimization and post-harvest
          quality protection.
        </p>

        <div className="heroActions">
          <a href="#components">Explore Components</a>
          <a href="#architecture" className="secondary">
            View Architecture
          </a>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>4</h2>
          <p>Research Components</p>
        </div>
        <div>
          <h2>AI + IoT</h2>
          <p>Core Technology</p>
        </div>
        <div>
          <h2>90%</h2>
          <p>Target Accuracy Range</p>
        </div>
        <div>
          <h2>Sri Lanka</h2>
          <p>Ceylon Cinnamon Focus</p>
        </div>
      </section>

      <section id="architecture" className="section">
        <h2>System Overview</h2>
        <p>
          The platform collects data from IoT sensors, mobile images, warehouse
          sensor nodes and satellite/drone imagery. Data is sent to cloud
          services, stored in MongoDB/Firebase, processed by ML models, and
          displayed through web and mobile dashboards.
        </p>

        <div className="flow">
          <div><Cpu /> Sensors / Images</div>
          <span>→</span>
          <div><Activity /> Cloud Processing</div>
          <span>→</span>
          <div><BarChart3 /> ML Analytics</div>
          <span>→</span>
          <div><ShieldCheck /> Alerts & Dashboard</div>
        </div>
      </section>

      <section id="gap" className="section research-gap">
        <h2>Research Gap</h2>
        <div className="gap-content">
          <p>
            Despite the economic importance of the cinnamon industry, current practices 
            rely heavily on traditional methods, leading to significant inefficiencies. 
            Our research addresses the following critical gaps:
          </p>
          <div className="gap-grid">
            <div className="gap-item">
              <h3>Real-time Soil Monitoring</h3>
              <p>Existing methods lack real-time precision in nutrient monitoring, causing over or under-fertilization.</p>
            </div>
            <div className="gap-item">
              <h3>Early Disease Prediction</h3>
              <p>Fungal infections are often detected too late, leading to widespread crop loss and high chemical usage.</p>
            </div>
            <div className="gap-item">
              <h3>Precision Land Management</h3>
              <p>Manual land surveying and yield estimation are time-consuming and often inaccurate for large estates.</p>
            </div>
            <div className="gap-item">
              <h3>Post-Harvest Quality Control</h3>
              <p>Lack of environmental monitoring in warehouses results in quality degradation and export rejections.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="section">
        <h2>Research Components</h2>

        <div className="grid">
          {researchData.map((item) => (
            <article className="card" key={item.id} onClick={() => navigate(`/research/${item.id}`)} style={{ cursor: 'pointer' }}>
              <div className="card-header">
                <div className="cardIcon">{item.icon}</div>
                <div className="researcher-photo">
                  <img src={item.photo} alt={item.owner} />
                </div>
              </div>
              <h3>{item.title}</h3>
              <p className="owner">
                {item.owner} · {item.studentId}
              </p>
              <p>{item.description}</p>

              <h4>Key Features</h4>
              <ul>
                {item.features.slice(0, 3).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                {item.features.length > 3 && <li>And more...</li>}
              </ul>

              <h4>Technologies</h4>
              <div className="tags">
                {item.tech.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p className="accuracy">{item.accuracy}</p>
              
              <div className="card-footer">
                <span className="view-details">View Details →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-us">
        <h2>About Us</h2>
        <p className="section-desc">
          We are a team of passionate researchers and engineers dedicated to 
          modernizing the cinnamon industry through cutting-edge technology.
        </p>
        
        <div className="team-grid">
          {researchData.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-image">
                <img src={member.photo} alt={member.owner} />
              </div>
              <div className="member-info">
                <h3>{member.owner}</h3>
                <p className="member-id">{member.studentId}</p>
                <p className="member-role">Research Lead - {member.title}</p>
                <div className="member-social">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-btn fb">
                    <Facebook size={18} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn ln">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="impact" className="section conclusion">
        <h2>Expected Impact</h2>
        <p>
          SMARTCINNAMON helps cinnamon farmers, estate managers and exporters
          reduce fertilizer waste, detect diseases early, improve land usage,
          protect warehouse quality and maintain export-grade cinnamon standards.
        </p>
      </section>
    </div>
  );
};

export default Home;
