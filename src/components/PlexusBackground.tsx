import React, { useEffect, useRef } from "react";

const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 160,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        // Slightly more vibrant blue for presence
        ctx.fillStyle = "rgba(0, 212, 255, 0.65)"; 
        ctx.shadowBlur = 5; // Subtle glow for volume
        ctx.shadowColor = "#00fbff";
        ctx.fill();
        ctx.shadowBlur = 0; // reset for lines performance
      }

      update(width: number, height: number) {
        if (this.x > width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > height || this.y < 0) this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      particlesArray = [];

      // Increased density for a bit more presence as requested
      let numberOfParticles = (height * width) / 13000; 
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2.5 + 1.5; 
        let x = Math.random() * (width - size * 4) + size * 2;
        let y = Math.random() * (height - size * 4) + size * 2;
        let directionX = (Math.random() - 0.5) * 1.3;
        let directionY = (Math.random() - 0.5) * 1.3;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, "rgba(0, 212, 255, 0.65)"));
      }
    }

    function connect() {
      if (!ctx) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const threshold = (width / 7) * (height / 7); 

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let distSq =
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
            (particlesArray[a].y - particlesArray[b].y) ** 2;

          if (distSq < threshold) {
            let opacity = (1 - Math.sqrt(distSq) / Math.sqrt(threshold)) * 0.35; // Slightly stronger connections
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - particlesArray[a].x;
          let dy = mouse.y - particlesArray[a].y;
          let mouseDistance = Math.sqrt(dx * dx + dy * dy);

          if (mouseDistance < mouse.radius) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - mouseDistance / mouse.radius) * 0.7})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(window.innerWidth, window.innerHeight);
      }
      connect();
    }

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

export default PlexusBackground;
