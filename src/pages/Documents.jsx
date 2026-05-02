import React from "react";
import { FileText, Download, Clock, ShieldCheck, FileCheck, Presentation, FileSpreadsheet, File as FileIcon, Video } from "lucide-react";
import "./Documents.css";
import checklistFile from "../assets/checklist /Checklist.xlsx";

const documentFiles = import.meta.glob('../assets/25-26J-375-Students/**/*.*', { eager: true, query: '?url', import: 'default' });

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
      icon: <FileSpreadsheet size={32} />
    }
  ];

  const getIconForType = (type) => {
    switch(type) {
      case 'PDF': return <FileText size={32} />;
      case 'Presentation': return <Presentation size={32} />;
      case 'Excel': return <FileSpreadsheet size={32} />;
      case 'Video': return <Video size={32} />;
      default: return <FileIcon size={32} />;
    }
  };

  const organizedDocs = {};
  Object.entries(documentFiles).forEach(([path, url]) => {
    if (path.includes('.DS_Store') || path.toLowerCase().includes('readme')) return;

    const pathParts = path.split('25-26J-375-Students/')[1].split('/');
    const category = pathParts[0]; 
    const fileName = pathParts[pathParts.length - 1];
    const subCategory = pathParts.length > 2 ? pathParts.slice(1, -1).join(' / ') : '';

    if (!organizedDocs[category]) {
      organizedDocs[category] = [];
    }
    
    let type = "File";
    const lowerName = fileName.toLowerCase();
    if (lowerName.endsWith('.pdf')) type = "PDF";
    else if (lowerName.endsWith('.pptx') || lowerName.endsWith('.potm')) type = "Presentation";
    else if (lowerName.endsWith('.xlsx') || lowerName.endsWith('.xlsm')) type = "Excel";
    else if (lowerName.endsWith('.docx') || lowerName.endsWith('.doc')) type = "Word";
    else if (lowerName.endsWith('.mp4')) type = "Video";
    else if (lowerName.endsWith('.txt')) type = "Text";

    organizedDocs[category].push({
      id: path,
      title: fileName,
      description: subCategory ? `Folder: ${subCategory}` : `Folder: ${category}`,
      url: url,
      date: "2025 July Batch",
      type: type,
      status: "Final",
      icon: getIconForType(type)
    });
  });

  const renderDocumentCard = (doc) => (
    <div key={doc.id} className="doc-page-card">
      <div className="doc-page-icon">
        {doc.icon || getIconForType(doc.type)}
      </div>
      <div className="doc-page-content">
        <div className="doc-meta">
          <span className="doc-type">{doc.type}</span>
          <span className="doc-status"><ShieldCheck size={14} /> {doc.status}</span>
        </div>
        <h3 title={doc.title} style={{ 
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis',
          fontSize: '1.1rem',
          margin: '0.5rem 0'
        }}>{doc.title}</h3>
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

        {Object.keys(organizedDocs).sort().map(category => (
          <section key={category} className="docs-section" style={{ marginTop: '4rem' }}>
            <h2>{category.replace(/^\d+\.\s*/, '')}</h2>
            <p className="section-description">All documents related to {category.replace(/^\d+\.\s*/, '')}</p>
            <div className="docs-grid">
              {organizedDocs[category].map(renderDocumentCard)}
            </div>
          </section>
        ))}

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
