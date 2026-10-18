import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { LuBookOpen, LuSparkles } from "react-icons/lu";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projectsData: ProjectData[] = [
  {
    id: "vlaccess",
    title: "VLACCESS Traffic Management",
    category: "Computer Vision & AI",
    tools: "YOLO, OpenCV, CCTV Analytics, Anomaly Detection, Real-time Traffic Monitoring (ByteIQ)",
    image: "/images/traffic_ai.png",
    award: "AI Engineer Internship @ ByteIQ",
    summary:
      "Engineered real-time computer vision models for mission-critical traffic tracking, vehicle telemetry, and CCTV surveillance anomaly detection.",
    howIWork: {
      number: "01",
      headline: "Computer vision that operates at 30+ FPS in production",
      explanation:
        "High-throughput stream ingestion with edge-optimized YOLO and OpenCV pipelines, zero dropped frames on live CCTV feeds, and automated vehicle trajectory tracking.",
      tags: ["YOLOv8", "OpenCV", "CUDA", "NVIDIA DeepStream", "Python"],
      usedIn: ["VLACCESS Traffic", "CCTV Surveillance", "ByteIQ"],
    },
    readme: {
      overview:
        "Automated live traffic perception system analyzing multi-camera CCTV feeds in real time for city traffic authority command centers.",
      problem:
        "Urban traffic intersections suffer from congestion, delayed incident detection, and unmonitored lane violations without automated telemetry.",
      solution:
        "Developed an end-to-end vision pipeline processing multi-angle video streams with real-time detection, tracking (DeepSORT), and incident alerting.",
      pipeline: [
        "CCTV RTSP Ingestion",
        "Edge Frame Preprocessing",
        "YOLOv8 DeepStream Inference",
        "Vehicle Tracking & Telemetry",
        "Anomaly & Congestion Dispatch",
      ],
      features: [
        "Multi-class vehicle classification and trajectory tracking at 30+ FPS",
        "Wrong-way driving, stall, and hazard anomaly detection",
        "Automated traffic density mapping and congestion alerts",
        "Edge deployment on NVIDIA Jetson with TensorRT acceleration",
      ],
      metrics: [
        { label: "Throughput", value: "30+ FPS" },
        { label: "Frame Latency", value: "<45ms" },
        { label: "Detection Precision", value: "95.8%" },
      ],
      techStack: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "CUDA",
        "TensorRT",
        "DeepStream",
        "FastAPI",
      ],
    },
  },
  {
    id: "rag-ai",
    title: "Enterprise RAG & Agentic AI",
    category: "Generative AI & LLMs",
    tools: "LangChain, LangGraph, Ollama, Vector Databases, Contextual QA Pipelines",
    image: "/images/rag_ai.png",
    award: "Production AI Workflow",
    summary:
      "Contextual Retrieval-Augmented Generation system with multi-agent orchestration for enterprise knowledge synthesis and zero-hallucination QA.",
    howIWork: {
      number: "02",
      headline: "LLMs that run where the data is",
      explanation:
        "Local models with a fallback, prompts scoped to one specialized job, and explanations streamed into the product rather than a generic chat box.",
      tags: ["llama.cpp", "Ollama", "Gemini", "LangChain + RAG"],
      usedIn: ["Enterprise RAG", "CTTC Internship", "Agentic Pipelines"],
    },
    readme: {
      overview:
        "Enterprise intelligence platform combining vector search with multi-agent LangGraph workflows for deep document synthesis.",
      problem:
        "Generic LLMs hallucinate domain facts, lack internal data access, and incur unpredictable API latency and recurring token costs.",
      solution:
        "Architected an enterprise RAG pipeline with local Ollama inference, semantic chunking, and self-correcting retrieval graphs.",
      pipeline: [
        "Doc Ingestion & OCR",
        "Semantic Chunking & Embedding",
        "Hybrid Search (ChromaDB + BM25)",
        "Context Re-ranking & Prompt Guard",
        "Streaming Answer Generation",
      ],
      features: [
        "Multi-turn conversational memory with provenance citation links",
        "Self-correcting query rewrites using LangGraph state machines",
        "Hybrid lexical (BM25) and semantic vector search",
        "Support for private on-premise LLMs via Ollama & vLLM",
      ],
      metrics: [
        { label: "Hallucination Drop", value: "88%" },
        { label: "Retrieval Latency", value: "<750ms" },
        { label: "Data Privacy", value: "100% Local" },
      ],
      techStack: [
        "Python",
        "LangChain",
        "LangGraph",
        "ChromaDB",
        "Ollama",
        "FastAPI",
        "Docker",
      ],
    },
  },
  {
    id: "reflow",
    title: "ReFlow 2025: Smart Health",
    category: "IoT & Predictive AI",
    tools: "ML Cycle Prediction, IoT Tracking System, Sensors (IIT Bhubaneswar 3rd Runners-Up)",
    image: "/images/bond.png",
    award: "3rd Runners-Up — IIT Bhubaneswar Hackathon",
    summary:
      "Intelligent non-invasive hormonal cycle tracking device paired with machine learning cycle prediction algorithms for continuous biological telemetry.",
    howIWork: {
      number: "03",
      headline: "Hardware in the loop & edge telemetry",
      explanation:
        "Sensors and microcontrollers feeding the same high-availability streaming pipelines as cloud services, with on-device filtering before RF transmission.",
      tags: ["ESP32", "Arduino", "Biometric Sensors", "PaddleOCR"],
      usedIn: ["ReFlow 2025", "CycleSense", "Women's Health"],
    },
    readme: {
      overview:
        "Award-winning biometric wearable that captures temperature and physiological variations to forecast hormonal phases accurately.",
      problem:
        "Menstrual and hormonal health tracking currently relies on subjective manual logging with high error rates and lack of physiological correlation.",
      solution:
        "Engineered a non-invasive IoT wearable paired with machine learning cycle prediction algorithms for continuous biological telemetry.",
      pipeline: [
        "Bio-Sensor Data Acquisition",
        "On-Device Edge Filtering (ESP32)",
        "Encrypted Bluetooth / Wi-Fi Sync",
        "ML Hormonal Phase Prediction",
        "Real-Time Health Insights",
      ],
      features: [
        "Low-power continuous basal temperature and heart-rate variability logging",
        "ML-based cycle phase estimation and symptom anomaly detection",
        "Privacy-first decentralized health record storage",
        "Emergency medical contact dispatch for acute distress",
      ],
      metrics: [
        { label: "Prediction Accuracy", value: "92.4%" },
        { label: "Battery Life", value: "48 Hours" },
        { label: "National Award", value: "3rd Runners-Up" },
      ],
      techStack: [
        "ESP32",
        "Arduino C++",
        "Python ML",
        "MQTT",
        "React Native",
        "Firebase",
      ],
    },
  },
  {
    id: "smart-health",
    title: "IoT-Based Smart Healthcare",
    category: "Embedded AI & Sensors",
    tools: "ESP32, Microcontrollers, Real-time Vitals Streaming, Automated Alerts (Festronix 2nd Place)",
    image: "/images/Solidx.png",
    award: "2nd Position — Festronix 2025 IoT Challenge",
    summary:
      "Continuous patient vital signs monitoring system with embedded anomaly detection for immediate ICU and remote patient warning alerts.",
    howIWork: {
      number: "04",
      headline: "Models that explain themselves",
      explanation:
        "A simple baseline first, a bigger model only if it earns its cost, and a reason next to every prediction so clinical staff trust alerts.",
      tags: ["scikit-learn", "PyTorch", "Transformers", "SHAP"],
      usedIn: ["Festronix 2025", "Smart Healthcare", "Floodwatch"],
    },
    readme: {
      overview:
        "High-fidelity patient vitals streaming platform designed for clinics and home-care patients requiring round-the-clock monitoring.",
      problem:
        "Delay in recognizing critical vital sign deterioration in home care and non-ICU beds leads to preventable patient crises.",
      solution:
        "Built an IoT vital signs monitor streaming real-time biometric indicators to an edge ML model providing early warning scores.",
      pipeline: [
        "Pulse/ECG Sensor Acquisition",
        "Analog Signal Conditioning",
        "Threshold & ML Trend Analysis",
        "Cloud WebSockets Telemetry",
        "Physician Alert Notification",
      ],
      features: [
        "Continuous SpO2, pulse rate, and temperature monitoring",
        "Automated National Early Warning Score (NEWS2) calculation",
        "Instant SMS and audio alert triggers when thresholds cross critical zones",
        "Real-time physician dashboard with historical telemetry graphs",
      ],
      metrics: [
        { label: "Alert Dispatch", value: "<100ms" },
        { label: "Signal Fidelity", value: "99.1%" },
        { label: "National Award", value: "2nd Position" },
      ],
      techStack: [
        "ESP32",
        "Python",
        "Scikit-Learn",
        "Firebase",
        "React",
        "WebSockets",
      ],
    },
  },
  {
    id: "product-scanner",
    title: "Smart Product Scanner",
    category: "Computer Vision",
    tools: "Barcode Recognition, Inventory Management Solution, OpenCV Optical Inspection",
    image: "/images/radix.png",
    award: "Computer Vision Innovation",
    summary:
      "Automated optical product and barcode scanner for retail inventory tracking, warehouse logistics, and real-time reconciliation.",
    howIWork: {
      number: "05",
      headline: "Optical precision with minimal compute",
      explanation:
        "Robust computer vision pipelines capable of handling glare, motion blur, and damaged packaging without requiring power-hungry server GPUs.",
      tags: ["OpenCV", "PaddleOCR", "Barcode Detection", "Python"],
      usedIn: ["ShelfSight", "Smart Product Scanner", "Retail Automation"],
    },
    readme: {
      overview:
        "Automated multi-code optical recognition system using OpenCV contour filtering and fast neural OCR models for inventory automation.",
      problem:
        "Manual retail inventory auditing and barcode scanning is slow, error-prone, and bottlenecked by damaged or skewed packaging labels.",
      solution:
        "Developed an automated multi-code optical recognition system using OpenCV contour filtering and fast neural OCR models.",
      pipeline: [
        "Camera Feed Ingestion",
        "Adaptive Thresholding & Deskew",
        "1D/2D Barcode Decoding",
        "Neural OCR for Expiry/Batch",
        "Database Stock Reconciliation",
      ],
      features: [
        "Omnidirectional barcode scanning from 360-degree angles",
        "Automated expiry date and batch code extraction via OCR",
        "Inventory database auto-sync with stock count validation",
        "Works on commodity webcams and mobile camera feeds",
      ],
      metrics: [
        { label: "Scan Accuracy", value: "98.7%" },
        { label: "Scan Speed", value: "120/min" },
        { label: "Glare Tolerance", value: "Up to 45°" },
      ],
      techStack: [
        "Python",
        "OpenCV",
        "PaddleOCR",
        "ZBar",
        "SQLite",
        "Flask",
      ],
    },
  },
  {
    id: "sih-safety",
    title: "SIH 2024: Safety Warriors",
    category: "AI & Public Safety",
    tools: "Real-time Hazard Tracking, Emergency Alert Pipelines, Team Lead (National Top 10)",
    image: "/images/Maxlife.png",
    award: "Top 10 Finalist — Smart India Hackathon (SIH 2024)",
    summary:
      "Led the 'Safety Warriors' team to national finals, developing an AI-driven public safety system for real-time hazard and stampede detection.",
    howIWork: {
      number: "06",
      headline: "Records nobody can quietly edit",
      explanation:
        "Hash chains and ledgers where provenance matters, kept optional so the rest of the system still runs with zero overhead without them.",
      tags: ["YOLO", "SHA-256 event chains", "Solidity on Geth", "FastAPI"],
      usedIn: ["SIH 2024", "Safety Warriors", "Soil-to-Shelf"],
    },
    readme: {
      overview:
        "AI-driven public safety and disaster response platform providing real-time hazard detection and automated first-responder coordination.",
      problem:
        "Public safety emergencies during major crowd gatherings suffer from delayed dispatch, conflicting reports, and lack of tamper-proof incident records.",
      solution:
        "Led the 'Safety Warriors' team to build a multi-modal incident detection and verified emergency dispatch platform.",
      pipeline: [
        "City Camera Video Feeds",
        "YOLO Hazard & Stampede Detection",
        "Emergency SOS Aggregation",
        "Cryptographic Incident Logging",
        "First Responder Command Dispatch",
      ],
      features: [
        "Automated stampede and violent hazard detection on public CCTV streams",
        "Geo-fenced panic SOS broadcasting to nearest emergency personnel",
        "Cryptographically hashed audit logs for forensic post-incident review",
        "Real-time command center map dashboard with live incident priority queues",
      ],
      metrics: [
        { label: "National Standing", value: "Top 10 Finalist" },
        { label: "Alert Dispatch", value: "<1.5s" },
        { label: "Team Leadership", value: "Lead (6 Engrs)" },
      ],
      techStack: [
        "Python",
        "YOLOv8",
        "FastAPI",
        "React",
        "PostgreSQL",
        "SHA-256 Event Chains",
      ],
    },
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        {/* Carousel */}
        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projectsData.map((project, index) => (
                <div className="carousel-slide" key={project.id}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="carousel-badge-row">
                          <span className="carousel-category-pill">
                            {project.category}
                          </span>
                          {project.award && (
                            <span className="carousel-award-tag">
                              {project.award}
                            </span>
                          )}
                        </div>
                        <h4
                          onClick={() => setSelectedProject(project)}
                          className="clickable-title"
                          title="Click to view full README & Architecture"
                        >
                          {project.title}
                        </h4>
                        <p className="carousel-summary-text">
                          {project.summary}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech & Approach</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-action-row">
                          <button
                            className="view-readme-btn"
                            onClick={() => setSelectedProject(project)}
                            data-cursor="disable"
                          >
                            <LuBookOpen />
                            <span>View Architecture & README</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="carousel-image-wrapper"
                      onClick={() => setSelectedProject(project)}
                      title="Click to view Project Architecture & README"
                      style={{ cursor: "pointer" }}
                    >
                      <WorkImage image={project.image} alt={project.title} />
                      <div className="image-overlay-prompt">
                        <LuSparkles />
                        <span>Click for Architecture & README</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projectsData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* HOW I WORK, AND WITH WHAT Matrix (Exact Match to Image 1) */}
        <div className="how-i-work-matrix-section">
          <div className="how-matrix-header">
            <h3>HOW I WORK, AND WITH WHAT</h3>
            <span className="how-matrix-subtitle">
              Engineering philosophies, system trade-offs & production frameworks
            </span>
          </div>

          <div className="how-matrix-list">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="how-matrix-row"
                onClick={() => setSelectedProject(project)}
                title={`Click to open ${project.title} README & Architecture`}
                data-cursor="disable"
              >
                <div className="matrix-num">{project.howIWork.number}</div>
                <div className="matrix-main">
                  <h4 className="matrix-headline">{project.howIWork.headline}</h4>
                  <p className="matrix-explanation">
                    {project.howIWork.explanation}
                  </p>
                </div>
                <div className="matrix-tags">
                  {project.howIWork.tags.map((tag) => (
                    <span key={tag} className="matrix-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="matrix-used-in">
                  <span className="matrix-used-label">USED IN</span>
                  <div className="matrix-used-links">
                    {project.howIWork.usedIn.map((item) => (
                      <span key={item} className="matrix-link">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Project Architecture & README Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Work;
