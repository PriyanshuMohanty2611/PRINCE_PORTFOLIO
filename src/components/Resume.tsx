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
                <span className="job-title">AI/ML Engineer — Bhubaneswar</span>
                <ul className="resume-list">
                  <li>Developed advanced computer vision models for mission-critical real-time traffic monitoring.</li>
                  <li>Engineered sophisticated CCTV analytics systems for automated surveillance insights and anomaly detection.</li>
                </ul>
              </div>
            </div>

            {/* Expertise */}
            <div className="resume-block">
              <h3>Core Expertise</h3>
              <div className="expertise-group">
                <div className="expertise-chips">
                  {["NLP", "OpenCV", "Deep Learning", "LLMs", "RAG", "Transformers", "Python", "Java", "C++", "SQL", "MERN Stack", "REST APIs", "MySQL", "Git", "Blockchain"].map((skill) => (
                    <span key={skill} className="expertise-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="resume-block">
              <h3>Key Achievements</h3>
              <ul className="resume-list">
                <li><strong>3rd Runners-Up</strong>, IIT Bhubaneswar Hackathon (Menstrual Health Innovation)</li>
                <li><strong>2nd Runners-Up (Twice)</strong>, Model Fiesta National Competition</li>
                <li><strong>Top 10 Finalist</strong>, Smart India Hackathon (SIH 2024)</li>
                <li><strong>DRDO Defence Project</strong>, Participant in Defence Upgradation initiatives</li>
                <li><strong>National Conference Author</strong>, NCCENGT-2025 "Computing 4.0" Author</li>
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
                  <h4>ISC XII (Chinmaya Vidyalaya)</h4>
                  <span className="date">2021 - 2023</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Score: 84%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
