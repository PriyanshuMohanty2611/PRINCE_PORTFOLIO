import { useState } from "react";
import { MdArrowOutward, MdMemory, MdAutoAwesome } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      try {
        const response = await fetch(`src/assets/${props.video}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (err) {
        console.warn("Video load error", err);
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target={props.link ? "_blank" : undefined}
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {!hasError ? (
          <img
            src={props.image}
            alt={props.alt || "Project showcase"}
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "260px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.8) 100%)",
              border: "1px solid rgba(94, 234, 212, 0.2)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "inset 0 0 30px rgba(94, 234, 212, 0.08)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(94, 234, 212, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accentColor, #5eead4)",
                fontSize: "30px",
                marginBottom: "12px",
              }}
            >
              <MdMemory />
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <MdAutoAwesome style={{ color: "var(--accentColor, #5eead4)" }} />
              {props.alt}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginTop: "6px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              AI & IoT Engineering Project
            </div>
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
