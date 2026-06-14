import { useState } from "react";

/* Wave ripple hover: hovered word peaks; neighbours scale down proportionally.
   Space is rendered as a text node BETWEEN spans to guarantee word separation.
   Shared by the home bio, Education bullets and Work Experience bullets. */
function BioText({ text }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const words = text.split(" ");
  const GLOW =
    "0 0 6px rgba(255,105,180,1), 0 0 15px rgba(255,105,180,0.8), 0 0 30px rgba(47,140,255,0.8)";

  return (
    <>
      {words.flatMap((word, i) => {
        const dist = hoveredIdx !== null ? Math.abs(i - hoveredIdx) : Infinity;
        let scale = 1, ty = 0, shadow = "none", color = "inherit", zIndex = "auto";

        // Smoothed down scaling parameters to prevent massive overlap distortions
        if      (dist === 0) { scale = 1.08; ty = -3; shadow = GLOW; color = "white"; zIndex = 50; }
        else if (dist === 1) { scale = 0.9; ty = -1.5; shadow = "0 0 6px rgba(47,140,255,0.2)"; zIndex = 20; }
        else if (dist === 2) { scale = 0.97; ty = -0.5; zIndex = 10; }

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              position: "relative",
              cursor: "default",
              transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), text-shadow 0.25s ease, color 0.25s ease",
              transform: `scale(${scale}) translateY(${ty}px)`,
              textShadow: shadow,
              color,
              zIndex,
              margin: "0 3px", /* Soft margin shield helps reduce overlay collisions */
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {word}
          </span>
        );
      })}
    </>
  );
}

export default BioText;
