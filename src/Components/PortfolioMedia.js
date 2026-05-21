import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export function TiltFrame({ children, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left - r.width  / 2) / r.width)  *  12,
      y: ((e.clientY - r.top  - r.height / 2) / r.height) * -12,
    });
  };
  return (
    <div style={{ display: "block", cursor: "pointer" }}
      onMouseMove={move}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onClick={onClick}
    >
      <div style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.15s ease-out",
      }}>
        {children}
      </div>
    </div>
  );
}

export function PortfolioImg({ src, alt = "", className = "", style = {} }) {
  const [phase, setPhase] = useState(null);
  const autoRef = useRef(null);

  const open = () => {
    if (phase) return;
    setPhase("entering");
    autoRef.current = setTimeout(() => close(), 300 + 2000);
  };

  const close = () => {
    if (autoRef.current) { clearTimeout(autoRef.current); autoRef.current = null; }
    setPhase("exiting");
    setTimeout(() => setPhase(null), 320);
  };

  useEffect(() => () => { if (autoRef.current) clearTimeout(autoRef.current); }, []);

  return (
    <>
      <TiltFrame onClick={open}>
        <img
          src={src}
          alt={alt}
          className={`portfolio-media ${className}`}
          style={style}
        />
      </TiltFrame>

      {phase && createPortal(
        <div
          className={`media-fullscreen-overlay ${phase}`}
          onClick={close}
        >
          <div className={`media-fullscreen-inner ${phase}`}>
            <img
              src={src}
              alt={alt}
              style={{
                maxWidth: "92vw",
                maxHeight: "92vh",
                objectFit: "contain",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
