import Menu from "../Components/Menu";
import "../Assets/CSS/Home.css";
import "../Assets/CSS/Animations.css";
import "../Assets/CSS/Welcome.css";
import { useNavigate } from "react-router-dom";
import myPhoto from "../Assets/Media/me.jpeg";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Particles() {
  const particles = useRef(
    [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${7 + Math.random() * 9}s`,
      size: `${3 + Math.random() * 4}px`,
    }))
  );

  return (
    <div className="particles-container">
      {particles.current.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

/* Wave ripple hover: hovered word peaks at 2x; neighbors scale down proportionally.
   Space is rendered as a text node BETWEEN spans to guarantee word separation. */
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

function HomePage() {
  const navigate = useNavigate();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 16;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -16;
    setTilt({ x, y });
  };

  const menuData = {
    title: "Content Pages",
    items: [
      { onClick: () => navigate("education"),       title: "Educational Background" },
      { onClick: () => navigate("/workexperience"), title: "Work Experience" },
      { onClick: () => navigate("/skills"),         title: "Skills" },
      { onClick: () => navigate("/projects"),       title: "Projects" },
      { onClick: () => navigate("/courses"),        title: "Courses" },
      { onClick: () => navigate("/artwork"),        title: "Art Works" },
    ],
  };

  const bios = [
    "Computer engineering graduate from Iran with an MS in Interactive Media (Game Development track) at FH Upper Austria — thesis completed and defended. Currently a Unity/Unreal developer at FreshFX, Salzburg, building real-time XR experiences and AI-powered interactive applications. Technical depth meets artistic vision: custom URP shaders, VR mechanics, AI pipelines, immersive storytelling.",
    "My Master's thesis built an AI-powered procedural shader generator for Unity — RAG pipelines + LLMs (Gemini, GPT-4o, Claude) generating HLSL shaders from natural language with automated visual quality loops. I'm driven by the intersection of games, art, and emerging tech: XR, generative AI, procedural graphics.",
    "Whether it's a VR alps simulation, an AI chatbot that sculpts shaders on demand, or a Mixed Reality beer pong game — I love building things that feel alive. Let's create something extraordinary together.",
  ];

  const theme = createTheme({
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1280, xl: 1920, custom: 1000 },
    },
  });

  return (
    <>
      <Particles />
      <div className="main page-enter home-page-content">
        <ThemeProvider theme={theme}>
          {/* Menu.js already renders its own <Grid item>, so don't wrap it again */}
          <Grid container alignItems="flex-start">

            {/* Left: hero (photo + name side-by-side) + bio */}
            <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
              <div className="home-content">

                {/* Hero row: photo left | name + tagline right */}
                <div className="home-hero reveal">
                  <div
                    className="photo-wrapper"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  >
                    <div
                      className="photo-tilt"
                      style={{
                        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                      }}
                    >
                      <img alt="Niloufar" className="my-photo" src={myPhoto} />
                    </div>
                  </div>

                  <div className="home-hero-text">
                    <div className="home-name">Niloufar Moradijam</div>
                    <div className="home-tagline">
                      <TypeAnimation
                        sequence={[
                          "Game Developer & XR Engineer",
                          2200,
                          "AI x Art x Interactive Tech",
                          2000,
                          "Unity · Unreal · Shaders · VR",
                          2000,
                          "Game Developer & XR Engineer",
                          500,
                        ]}
                        wrapper="span"
                        speed={55}
                        deletionSpeed={72}
                        repeat={Infinity}
                        style={{ display: "inline-block" }}
                      />
                    </div>
                    {/* Bio paragraphs — word-hover wave ripple (now beside the photo).
                        Only this inner box scrolls, so the photo + name + menu stay put. */}
                    <div className="home-bio">
                      <div className="home-bio-scroll">
                        {bios.map((text, i) => (
                          <p
                            key={i}
                            className={`reveal reveal-delay-${i + 1}`}
                            style={{ textAlign: "justify" }}
                          >
                            <BioText text={text} />
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            {/* Right: Menu (renders its own Grid item internally) */}
            <Menu align="right" lg={3} xl={3} title={menuData.title} items={menuData.items} />

          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default HomePage;
