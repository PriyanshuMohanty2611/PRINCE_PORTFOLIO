import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICSE - Class X</h4>
                <h5>Chinmaya Vidyalaya, Rourkela</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary education under ICSE board with 90%, establishing
              foundational academic excellence in Science, Mathematics, and Computer Applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ISC - Class XII</h4>
                <h5>Chinmaya Vidyalaya, Rourkela</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed senior secondary education under ISC board with 84%, focusing on
              Physics, Chemistry, and Advanced Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>CTTC Bhubaneswar</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed intensive AI/ML internship focusing on computer vision,
              applied deep learning architectures, and end-to-end model workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - CSE (CGPA: 8.7)</h4>
                <h5>Gandhi Institute of Excellent Technocrats</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing Computer Science & Engineering with continuous academic excellence
              and focused research in Machine Learning, IoT, and Computer Vision.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer Intern</h4>
                <h5>ByteIQ Analytics</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing production computer vision models for live traffic tracking,
              CCTV analytics systems, and real-time surveillance anomaly detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
