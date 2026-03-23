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
                <h4>ISC - Class XII</h4>
                <h5>Chinmaya Vidyalaya, Rourkela</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed senior secondary education with 84%, focusing on Science
              and Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - CSE</h4>
                <h5>Gandhi Institute, Bhubaneswar</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Undergoing B.Tech in Computer Science and Engineering with a CGPA
              of 8.7. Focusing on AI, ML, and advanced computing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>ByteIQ Analytics</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing advanced computer vision models for live traffic tracking
              and intelligent CCTV video analysis systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
