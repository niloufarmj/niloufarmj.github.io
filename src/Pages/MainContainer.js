import Header from "../Components/Header";
import HomePage from "./HomePage";
import Footer from "../Components/Footer";
import EducationPage from "./EducationPage";
import JobExperiencePage from "./JobExperiencePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Assets/CSS/MainContainer.css";
import "../Assets/CSS/Animations.css";
import { Grid } from "@mui/material";
import CoursesPage from "./CoursesPage";
import ArtWorksPage from "./ArtWorksPage";
import { useEffect, useRef } from "react";

function StarryNight() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 240 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.3 + Math.random() * 1.5,
      speed: 0.3 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      // ~18% get a bloom glow
      bloom: Math.random() > 0.82,
      bloomColor: Math.random() > 0.5 ? "47,140,255" : "164,46,207",
    }));

    const draw = () => {
      t += 0.016;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        const x = s.x * W;
        const y = s.y * H;
        // twinkle: oscillate between dim and bright
        const twinkle = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));

        // bloom glow for select stars
        if (s.bloom && s.r > 0.8) {
          const radius = s.r * 7;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
          grad.addColorStop(0, `rgba(${s.bloomColor}, ${twinkle * 0.45})`);
          grad.addColorStop(1, `rgba(${s.bloomColor}, 0)`);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // star core — white dot
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function MainContainer() {
  // Auto-zoom: scale the whole UI down on smaller screens so a laptop at 100%
  // browser-zoom matches the large-monitor look (replaces the manual "67% zoom" trick).
  useEffect(() => {
    const REF_WIDTH = 2200;  // viewport width the design is tuned for (large monitor)
    const MIN_SCALE = 0.6;   // never shrink past this
    const BREAKPOINT = 1280; // below this, fall back to the normal responsive layout

    const applyScale = () => {
      const w = window.innerWidth;
      const scale =
        w >= BREAKPOINT ? Math.min(1, Math.max(MIN_SCALE, w / REF_WIDTH)) : 1;
      document.documentElement.style.setProperty("--ui-scale", scale);
    };

    applyScale();
    window.addEventListener("resize", applyScale);
    return () => window.removeEventListener("resize", applyScale);
  }, []);

  return (
    <>
      <StarryNight />
      <Grid></Grid>
      <BrowserRouter>
      <div className="main-container">
        <div className="main-container-inner">
          <div className="svg">
            {" "}
            <svg
              width="300"
              height="300"
              data-name="corner-top-left"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
              data-inlinesvg=".inlineSvgFile-2"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" className="gradient1"></stop>
                  <stop offset=".5" className="gradient2"></stop>
                  <stop offset="1" className="gradient1"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url('#grad1')"
                d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
              ></path>
            </svg>{" "}
          </div>

          <div className="inner-container">
            <Header />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/workexperience" element={<JobExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/artwork" element={<ArtWorksPage />} />
              </Routes>
            </div>
            <Footer />
          </div>

          {/* Bottom-right corner — absolutely pinned to the shell so it mirrors the
              top-left corner's inset and never moves while content scrolls. */}
          <div className="svg corner-br">
            <svg
              width="300"
              height="300"
              data-name="corner-bottom-right"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
              data-inlinesvg=".inlineSvgFile-7"
            >
              <defs>
                <linearGradient
                  id="grad2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0" className="gradient1"></stop>
                  <stop offset=".5" className="gradient2"></stop>
                  <stop offset="1" className="gradient1"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url('#grad2')"
                d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default MainContainer;
