import { useState } from "react";
import "./styles/Certificates.css";
import { MdClose, MdVisibility } from "react-icons/md";

const certificateData = [
  {
    id: 1,
    title: "Smart India Hackathon 2024 (SIH)",
    issuer: "Govt of India - Team Leader",
    image: "/images/certificates/CERTIFICATE_page-0008.jpg",
    description: "Exceptional contribution as a Team Leader in SIH 2024 (Safety Warriors).",
  },
  {
    id: 2,
    title: "ReFlow 2025: IIT Bhubaneswar",
    issuer: "IIT Bhubaneswar",
    image: "/images/certificates/CERTIFICATE_page-0001.jpg",
    description: "Menstrual Health Innovation Hackathonheld at IIT Bhubaneswar.",
  },
  {
    id: 3,
    title: "FESTRONIX 2025: IoT Innovation",
    issuer: "Regional Annual Fest",
    image: "/images/certificates/CERTIFICATE_page-0006.jpg",
    description: "Secured 2nd Position in the IoT Innovation Challenge 2025.",
  },
  {
    id: 4,
    title: "National Conference (Computing 4.0)",
    issuer: "National Conference",
    image: "/images/certificates/CERTIFICATE_page-0005.jpg",
    description: "Author and Presenter of a Research Paper on Next Generation Technology.",
  },
  {
    id: 5,
    title: "Generative AI Experience",
    issuer: "Tata (TCS)",
    image: "/images/certificates/GENAI_TATA_page-0001.jpg",
    description: "Advanced simulation on Generative AI and LLM workflows.",
  },
  {
    id: 6,
    title: "GIET Hackfest 2025: Team Lead",
    issuer: "Industrial Innovation Hub",
    image: "/images/certificates/CERTIFICATE_page-0007.jpg",
    description: "Led 'Creative Cartel' to exceptional success at the Ghangapatna Hackfest.",
  },
  {
    id: 7,
    title: "Cyber Security Experience",
    issuer: "Deloitte",
    image: "/images/certificates/CYBER_DELOITTE_page-0001.jpg",
    description: "Experience in threat assessment and security operations.",
  },
  {
    id: 8,
    title: "Data Analytics Experience",
    issuer: "Deloitte",
    image: "/images/certificates/DATA_ANALYTICS_DELLOITE_page-0001.jpg",
    description: "Professional certification in data-driven decision making.",
  },
  {
    id: 9,
    title: "ESG Professional Experience",
    issuer: "Tata",
    image: "/images/certificates/ESG_TATA_page-0001.jpg",
    description: "Focus on Environmental, Social, and Governance frameworks.",
  },
  {
    id: 10,
    title: "Innovate X 4.0",
    issuer: "National Hackathon",
    image: "/images/certificates/CERTIFICATE_page-0003.jpg",
    description: "30-hour intense National Level Innovation Hackathon Participation.",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<null | (typeof certificateData)[0]>(null);

  const openFullscreen = (cert: (typeof certificateData)[0]) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container">
        <h2>
          Achievements & <span>Certifications</span>
        </h2>

        <div className="certificates-grid">
          {certificateData.map((cert) => (
            <div 
              key={cert.id} 
              className="certificate-card"
              onClick={() => openFullscreen(cert)}
              data-cursor="pointer"
            >
              <div className="certificate-image-wrapper">
                <img src={cert.image} alt={cert.title} />
                <div className="view-overlay">
                  <MdVisibility />
                </div>
              </div>
              <div className="certificate-info">
                <span className="issuer">{cert.issuer}</span>
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="certificate-modal">
          <div className="modal-backdrop" onClick={closeFullscreen}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeFullscreen}>
              <MdClose />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="modal-details">
              <h3>{selectedCert.title}</h3>
              <span>{selectedCert.issuer}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
