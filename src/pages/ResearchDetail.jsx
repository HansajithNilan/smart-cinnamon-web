import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Cpu, Activity, ShieldCheck, Target, Download, FileText } from "lucide-react";
import { researchData } from "../data/researchData.jsx";
import "./ResearchDetail.css";

const ResearchDetail = () => {
  const { id } = useParams();
  const data = researchData.find((item) => item.id === id);

  if (!data) {
    return (
      <div className="error-page">
        <h2>Component not found</h2>
        <Link to="/" className="back-link">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        <ArrowLeft size={20} />
        Back to Overview
      </Link>

      <header className="detail-header">
        <div className="header-top">
          <div className="header-icon">{data.icon}</div>
          <div className="researcher-profile">
            <img src={data.photo} alt={data.owner} className="profile-img" />
          </div>
        </div>
        <div className="header-content">
          <div className="header-badge">Research Component</div>
          <h1>{data.title}</h1>
          <p className="owner-info">
            Lead Researcher: <strong>{data.owner}</strong> | Student ID: <strong>{data.studentId}</strong>
          </p>
        </div>
      </header>

      <div className="detail-grid">
        <div className="detail-main">
          <section className="detail-section">
            <h2>Abstract & Overview</h2>
            <p className="description-text">{data.description}</p>
            <p className="full-details-text">{data.fullDetails}</p>
          </section>

          <section className="detail-section">
            <h2>Key Capabilities</h2>
            <div className="features-grid">
              {data.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle2 className="feature-icon" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {data.appScreenshots && (
            <section className="detail-section">
              <h2>App Interface</h2>
              <div className="screenshot-grid">
                {data.appScreenshots.map((img, index) => (
                  <div key={index} className="screenshot-card">
                    <img src={img} alt={`App screen ${index + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <h3><Activity size={18} /> Performance</h3>
            <p className="accuracy-value">{data.accuracy}</p>
          </div>

          <div className="sidebar-card download-card">
            <h3><Download size={18} /> Project Proposal</h3>
            <p>Download the comprehensive project proposal PDF.</p>
            <a href={data.proposalUrl} download className="sidebar-download-btn">
              Download Proposal
            </a>
          </div>

          <div className="sidebar-card download-card taf-card">
            <h3><FileText size={18} /> Topic Assessment (TAF)</h3>
            <p>Download the official TAF document for this research.</p>
            <a href={data.tafUrl} download className="sidebar-download-btn taf-btn">
              Download TAF
            </a>
          </div>

          <div className="sidebar-card">
            <h3><Cpu size={18} /> Technology Stack</h3>
            <div className="tech-tags">
              {data.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <h3><Target size={18} /> Core Objective</h3>
            <p>To implement a robust {data.tech[0]}-driven framework for enhanced cinnamon cultivation productivity.</p>
          </div>
        </aside>
      </div>

      {data.aiChat && (
        <section className="detail-section ai-chat-section">
          <h2>{data.aiChat.title}</h2>
          <div className="ai-chat-container">
            <div className="ai-chat-text">
              <p>{data.aiChat.description}</p>
            </div>
            <div className="ai-chat-image-wrapper">
              <div className="screenshot-card">
                <img src={data.aiChat.image} alt="AI Chatbot Interface" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ResearchDetail;
