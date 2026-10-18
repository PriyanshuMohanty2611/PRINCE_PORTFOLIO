import "./styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <div className="resume-container">
        <h2>
          Modern <span>Resume</span>
        </h2>

        <div className="resume-paper">
          {/* Resume Header */}
          <div className="resume-header">
            <h1>Priyanshu Mohanty</h1>
            <div className="subtitle">AI / ML Engineer & Researcher</div>
            <div className="resume-contact-info">
              <span>Bhubaneswar, Odisha, India</span>
              <span>•</span>
              <span>+91-8637210501</span>
              <span>•</span>
              <span>priyanshumohanty2611@gmail.com</span>
            </div>
          </div>

          <div className="resume-grid">
            {/* Summary */}
            <div className="resume-block">
              <h3>Summary</h3>
              <p className="resume-text">
                Results-driven AI/ML Engineer with experience in Machine Learning, Computer Vision, IoT, and Full Stack Development. 
                Skilled in Python, Java, SQL, and advanced AI architectures like RAG and Transformers, with strong problem-solving and leadership abilities.
              </p>
            </div>

            {/* Experience */}
            <div className="resume-block">
              <h3>Professional Experience</h3>
              <div className="experience-item">
                <div className="item-header">
                  <h4>ByteIQ Analytics</h4>
                  <span className="date">Jan 2026 - Present</span>
                </div>
                <span className="job-title">AI Engineer Intern — Bhubaneswar</span>
                <ul className="resume-list">
                  <li>Developing computer vision models for mission-critical real-time traffic monitoring and vehicle tracking.</li>
                  <li>Building intelligent CCTV analytics systems for automated surveillance insights, congestion alerts, and anomaly detection.</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="item-header">
                  <h4>CTTC Bhubaneswar</h4>
                  <span className="date">2025 · 30-Day Internship</span>
                </div>
                <span className="job-title">AI/ML Intern — Bhubaneswar</span>
                <ul className="resume-list">
                  <li>Completed intensive practical AI/ML training, applied computer vision, and neural network modeling.</li>
                  <li>Implemented real-time inference workflows, data validation, and model optimization for edge deployment.</li>
                </ul>
              </div>
            </div>

            {/* Expertise */}
            <div className="resume-block">
              <h3>Technical Skills (Verified Profile)</h3>
              <div className="expertise-group">
                {[
                  {
                    cat: "01 · AI, Machine Learning & Computer Vision",
                    items: ["Machine Learning", "Deep Learning", "YOLO", "OpenCV", "Computer Vision"],
                  },
                  {
                    cat: "02 · Generative AI & RAG",
                    items: ["LLMs / Generative AI", "LangChain", "RAG", "Vector Databases"],
                  },
                  {
                    cat: "03 · Programming & Data",
                    items: ["Python", "JavaScript", "Pandas", "NumPy"],
                  },
                  {
                    cat: "04 · Web & 3D Development",
                    items: ["React", "HTML / CSS", "Three.js"],
                  },
                  {
                    cat: "05 · IoT, Infrastructure & Tools",
                    items: [
                      "Arduino / ESP32",
                      "IoT Sensors",
                      "CUDA / NVIDIA DeepStream",
                      "MongoDB / Firebase",
                      "Git / GitHub",
                    ],
                  },
                ].map((group) => (
                  <div key={group.cat} style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--accentColor, #5eead4)",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {group.cat}
                    </div>
                    <div className="expertise-chips">
                      {group.items.map((skill) => (
                        <span key={skill} className="expertise-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="resume-block">
              <h3>Verified Achievements & Leadership</h3>
              <ul className="resume-list">
                <li><strong>2nd Position</strong>, IoT Innovation Challenge — Festronix 2025</li>
                <li><strong>2nd Position</strong>, Engineer's Day 2025 Poster Presentation</li>
                <li><strong>3rd Position</strong>, Model Fiesta and Web War — Suravi 2K25</li>
                <li><strong>3rd Runners-Up</strong>, IIT Bhubaneswar Hackathon (ReFlow 2025 - Menstrual Health Innovation)</li>
                <li><strong>Top 10 Finalist & Team Leader</strong>, Smart India Hackathon (SIH 2024 — "Safety Warriors")</li>
                <li><strong>Team Leadership Recognition</strong>, GIET Ghangapatna Hackfest 2025</li>
                <li><strong>National Conference Author</strong>, NCCENGT-2025 (Topic: "Computing 4.0")</li>
                <li><strong>Space Technology Course</strong>, Indian Institute of Remote Sensing (IIRS / ISRO)</li>
              </ul>
            </div>

            {/* Education */}
            <div className="resume-block">
              <h3>Education</h3>
              <div className="education-item">
                <div className="item-header">
                  <h4>B.Tech in Computer Science & Engineering (GIET)</h4>
                  <span className="date">2023 - 2027</span>
                </div>
                <div className="edu-details" style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    <span>Gandhi Institute of Excellent Technocrats</span>
                    <span>CGPA: 8.7</span>
                </div>
              </div>
              <div className="education-item">
                <div className="item-header" style={{ marginBottom: '0' }}>
                  <h4>ISC XII (Chinmaya Vidyalaya, Rourkela)</h4>
                  <span className="date">2021 - 2023</span>
                </div>
                <div className="edu-details" style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                  <span>Council for the Indian School Certificate Examinations (ISC)</span>
                  <span>Score: 84%</span>
                </div>
              </div>
              <div className="education-item">
                <div className="item-header" style={{ marginBottom: '0' }}>
                  <h4>ICSE X (Chinmaya Vidyalaya, Rourkela)</h4>
                  <span className="date">2019 - 2021</span>
                </div>
                <div className="edu-details" style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                  <span>Indian Certificate of Secondary Education (ICSE)</span>
                  <span>Score: 90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
