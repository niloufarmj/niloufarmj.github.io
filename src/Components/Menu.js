import "../Assets/CSS/Menu.css";
import { Grid } from "@mui/material";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { createPortal } from "react-dom";

function StarBurst({ x, y, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 750);
    return () => clearTimeout(t);
  }, [onDone]);

  const stars = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * 360 + (Math.random() - 0.5) * 25;
      const dist = 35 + Math.random() * 45;
      const rad = (angle * Math.PI) / 180;
      return {
        endX: Math.cos(rad) * dist,
        endY: Math.sin(rad) * dist,
        size: 7 + Math.random() * 6,
        delay: Math.random() * 60,
      };
    });
  }, []);

  return createPortal(
    <div style={{ position: "fixed", left: x, top: y, pointerEvents: "none", zIndex: 9999 }}>
      {stars.map((s, i) => (
        <div
          key={i}
          className="star-particle"
          style={{
            position: "absolute",
            width: s.size,
            height: s.size,
            left: -s.size / 2,
            top: -s.size / 2,
            background: "#ffffff",
            boxShadow: "0 0 6px 2px rgba(47,140,255,0.9), 0 0 14px 4px rgba(164,46,207,0.6)",
            "--end-x": `${s.endX}px`,
            "--end-y": `${s.endY}px`,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}
    </div>,
    document.body
  );
}

function Menu(params) {
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);

  const handleItemClick = useCallback((e, onClick) => {
    const id = burstId.current++;
    setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

    const mainEl = document.querySelector(".page-content .main");
    if (mainEl) mainEl.classList.add("page-exit");

    setTimeout(() => {
      if (onClick) onClick();
    }, 520);
  }, []);

  const removeBurst = useCallback((id) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={params.lg != null ? params.lg : 4}
        xl={params.xl != null ? params.xl : 4}
        custom={5}
        className={params.align === "right" ? "menu-content-pages" : undefined}
        sx={
          params.align === "right"
            ? { position: "sticky", top: 24, alignSelf: "flex-start" }
            : undefined
        }
      >
        <div
          style={
            params.align === "right"
              ? { paddingLeft: "8%", paddingRight: "0%" }
              : { paddingLeft: "10%", paddingRight: "10%" }
          }
        >
          <h1 className="menu-title">{params.title}</h1>
          <div>
            <svg
              width="50px"
              height="50px"
              data-name="corner-top-left"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
              data-inlinesvg=".inlineSvgFile-2"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" className="gradient1"></stop>
                  <stop offset="1" className="gradient2"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url('#grad1')"
                d="M8 0h252l-5 5H10a5 5 0 0 0-5 5v255L0 15V8a8 8 0 0 1 8-8Z"
              ></path>
            </svg>
          </div>
          <div className="menu-wrapper">
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              {params.items != null &&
                params.items.map((value, idx) => {
                  if (value == null) return null;
                  return (
                    <div
                      key={idx}
                      className="menu-item"
                      onClick={(e) => handleItemClick(e, value.onClick)}
                    >
                      <span className="menu-item-span">{value.title}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Grid>

      {bursts.map((b) => (
        <StarBurst key={b.id} x={b.x} y={b.y} onDone={() => removeBurst(b.id)} />
      ))}
    </>
  );
}

export default Menu;
