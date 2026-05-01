import React from "react";
import { FileText, Download, Clock, ShieldCheck, FileCheck } from "lucide-react";
import "./Documents.css";
import checklistFile from "../assets/checklist /Checklist.xlsx";

const Documents = () => {
  const officialForms = [
    {
      id: "taf",
      title: "Topic Assessment Form (TAF)",
      description: "Official research topic assessment form including problem statement, research gap, and objectives.",
      url: "/smart-cinnamon-web/taf/research_taf.pdf",
      date: "2025 July Batch",
      type: "PDF",
      status: "Final",
      icon: <FileText size={32} />
    }
  ];

  const projectChecklists = [
    {
      id: "checklist",
      title: "Research Checklist",
      description: "Detailed checklist outlining the research tasks, milestones, and requirements for the SMARTCINNAMON project.",
      url: checklistFile,
      date: "2025 July Batch",
      type: "Excel",
      status: "Final",
      icon: <FileText size={32} />
    }
  ];

  const renderDocumentCard = (doc) => (
    <div key={doc.id} className="doc-page-card">
      <div className="doc-page-icon">
        {doc.icon}
      </div>
      <div className="doc-page-content">
        <div className="doc-meta">
          <span className="doc-type">{doc.type}</span>
          <span className="doc-status"><ShieldCheck size={14} /> {doc.status}</span>
        </div>
        <h3>{doc.title}</h3>
        <p>{doc.description}</p>
        <div className="doc-footer">
          <span className="doc-date"><Clock size={14} /> {doc.date}</span>
          <a href={doc.url} download className="doc-download-btn">
            <Download size={18} /> Download
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="documents-page">
      <header className="docs-header">
        <h1>Project Documentation</h1>
        <p>Access all official research papers, forms, and technical documents for the SMARTCINNAMON project.</p>
      </header>

      <div className="docs-container">
        <section className="docs-section">
          <h2>Official Forms</h2>
          <p className="section-description">Download the official topic assessment and evaluation forms required for the research project.</p>
          <div className="docs-grid">
            {officialForms.map(renderDocumentCard)}
          </div>
        </section>

        <section className="docs-section" style={{ marginTop: '4rem' }}>
          <h2>Project Checklists</h2>
          <p className="section-description">Track research progress, milestones, and essential tasks with our structured checklists.</p>
          <div className="docs-grid">
            {projectChecklists.map(renderDocumentCard)}
          </div>
        </section>

        <section className="docs-upcoming">
          <div className="upcoming-card">
            <FileCheck size={24} />
            <div>
              <h3>More Documents Coming Soon</h3>
              <p>We are currently finalizing the Research Papers, System Specification documents, and User Manuals. They will be available here shortly.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documents;
