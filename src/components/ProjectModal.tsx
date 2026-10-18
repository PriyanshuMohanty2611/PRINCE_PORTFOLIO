import { useEffect } from "react";
import {
  LuX,
  LuExternalLink,
  LuCpu,
  LuLayers,
  LuCircleCheck,
  LuGauge,
  LuBookOpen,
  LuGitBranch,
} from "react-icons/lu";
import "./styles/ProjectModal.css";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string;
  award?: string;
  summary: string;
  howIWork: {
    number: string;
    headline: string;
    explanation: string;
    tags: string[];
    usedIn: string[];
  };
  readme: {
    overview: string;
    problem: string;
    solution: string;
    pipeline: string[];
    features: string[];
    metrics: { label: string; value: string }[];
    techStack: string[];
    githubUrl?: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-category">{project.category}</span>
            {project.award && <span className="modal-award-badge">{project.award}</span>}
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            data-cursor="disable"
          >
            <LuX />
          </button>
        </div>

        <h2 id="modal-project-title" className="modal-title">
          {project.title}
        </h2>
        <p className="modal-summary">{project.summary}</p>

        {/* HOW I WORK, AND WITH WHAT (Matching Image 1) */}
        <div className="modal-how-i-work-card">
          <div className="how-header-label">HOW I WORK, AND WITH WHAT</div>
          <div className="how-grid-row">
            <div className="how-num">{project.howIWork.number}</div>
            <div className="how-body">
              <h4 className="how-headline">{project.howIWork.headline}</h4>
              <p className="how-explanation">{project.howIWork.explanation}</p>
            </div>
            <div className="how-tags">
              {project.howIWork.tags.map((tag) => (
                <span key={tag} className="how-tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="how-used-in">
              <span className="used-in-label">USED IN</span>
              <div className="used-in-list">
                {project.howIWork.usedIn.map((item) => (
                  <span key={item} className="used-in-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* README & Architecture Section */}
        <div className="modal-readme-section">
          <div className="readme-header">
            <LuBookOpen className="readme-icon" />
            <h3>Project README & Architecture</h3>
          </div>

          {/* Problem vs Solution */}
          <div className="readme-grid-two">
            <div className="readme-block">
              <h4>The Challenge & Problem</h4>
              <p>{project.readme.problem}</p>
            </div>
            <div className="readme-block">
              <h4>Architected Solution</h4>
              <p>{project.readme.solution}</p>
            </div>
          </div>

          {/* System Pipeline & Architecture */}
          <div className="readme-block pipeline-block">
            <h4>
              <LuGitBranch className="inline-icon" /> System Pipeline & Flow
            </h4>
            <div className="pipeline-steps">
              {project.readme.pipeline.map((step, idx) => (
                <div key={idx} className="pipeline-step">
                  <div className="step-circle">{idx + 1}</div>
                  <span className="step-text">{step}</span>
                  {idx < project.readme.pipeline.length - 1 && (
                    <div className="step-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="readme-block">
            <h4>
              <LuCircleCheck className="inline-icon" /> Key Engineering Features
            </h4>
            <ul className="readme-feature-list">
              {project.readme.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Benchmarks & Performance Metrics */}
          <div className="readme-block">
            <h4>
              <LuGauge className="inline-icon" /> Verified Benchmarks & Performance
            </h4>
            <div className="modal-metrics-grid">
              {project.readme.metrics.map((m, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="readme-block">
            <h4>
              <LuCpu className="inline-icon" /> Technology & Infrastructure
            </h4>
            <div className="readme-tech-chips">
              {project.readme.techStack.map((tech) => (
                <span key={tech} className="readme-tech-chip">
                  <LuLayers className="chip-icon" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="modal-btn-close" onClick={onClose} data-cursor="disable">
            Close Overview
          </button>
          <a
            href="https://github.com/PriyanshuMohanty2611"
            target="_blank"
            rel="noreferrer"
            className="modal-btn-primary"
            data-cursor="disable"
          >
            <span>View GitHub Repository</span>
            <LuExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
