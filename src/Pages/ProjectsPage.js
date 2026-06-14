import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import "../Assets/CSS/Projects.css";

import cars       from "../Assets/Media/videos/Cars.mp4";
import diceKid    from "../Assets/Media/videos/DiceKid.mp4";
import clock      from "../Assets/Media/videos/DigitalClock.mp4";
import roll       from "../Assets/Media/videos/RollaBall.mp4";
import boost      from "../Assets/Media/videos/ProjectBoost.mp4";
import angry      from "../Assets/Media/videos/AngryBirds.mp4";
import mountain   from "../Assets/Media/videos/HolyMountain.mp4";
import rover      from "../Assets/Media/videos/MarsRover.mp4";
import temperature from "../Assets/Media/videos/Temperature.mp4";
import alice      from "../Assets/Media/videos/Alice.mp4";
import sakura     from "../Assets/Media/videos/Sakura.mp4";
import museumore  from "../Assets/Media/videos/Museumore.mp4";
import othello    from "../Assets/Media/videos/Othello.mp4";
import othello_AI from "../Assets/Media/videos/Othello-AI.mp4";
import jetpack    from "../Assets/Media/videos/Jetpack.mp4";
import twoCars    from "../Assets/Media/videos/2cars.mp4";
import bug0       from "../Assets/Media/videos/Bug0.mp4";
import bug1       from "../Assets/Media/videos/Bug1.mp4";
import bug2       from "../Assets/Media/videos/Bug2.mp4";
import thesisShader from "../Assets/Media/videos/thesis-texttoshader.mp4";
import beerPong    from "../Assets/Media/videos/BeerPong.mp4";
import pickupAgent from "../Assets/Media/videos/PickupDeliveryAgent.mp4";

import cp    from "../Assets/Media/Works/communitypage.png";
import hp    from "../Assets/Media/Works/homepage.png";
import login from "../Assets/Media/Works/login.png";
import up    from "../Assets/Media/Works/userprofile.png";

const PROJECTS = [
  {
    emoji: "🎓",
    category: "Master Thesis",
    title: "Generative Procedural Shapes — AI Shader Generator",
    shortDesc: "AI-powered HLSL shader generator for Unity using RAG + LLMs; automated visual quality scoring via GPT-4o Vision.",
    explanations: [
      "• Master's Thesis (2026) — completed and defended at FH Upper Austria.",
      "• Built a Unity Editor tool that generates HLSL procedural shaders from natural language using a RAG pipeline: shape decomposition → embedding search over 184+ verified examples → LLM composition (Gemini) → ShaderGraph wiring → automated visual quality loop via GPT-4o Vision (score 1–10, max 3 refinements).",
      "• Supports text-to-shape, image-to-shape, shape editing (property tweak or full HLSL rewrite), C# animation generation, and client-side Pixelation & Glow effects with zero LLM calls.",
      "• 26-state chatbot UI (Unity IMGUI + HTTP server on port 7723) allows fully conversational asset creation; also supports bulk knowledge-base ingestion via Auto Learn.",
      "• Experiment across 200 runs (5 LLMs × 2 pipelines × 20 shapes): Gemini 3.1 Pro achieved 93.3% success, VLM 8.53/10, at $0.036/shape. RAG raised success rate +5 pp and VLM quality +0.74 pts over baseline.",
    ],
    hasMedia: true,
    media: [{ type: "video", src: thesisShader }],
  },
  {
    emoji: "🍺",
    category: "Mixed Reality",
    title: "MR Beer Pong",
    shortDesc: "Mixed Reality beer pong for Meta Quest — play on your real table with bare-hand tracking, no controllers needed.",
    explanations: [
      "• Mixed Reality beer pong game built in Unity for Meta Quest, using hand tracking and passthrough AR to play on your real-world table.",
      "• Implemented full hand-tracking input via OVR SDK: grab, throw, and aim the ball using bare hands — no controllers needed.",
      "• Physics-based ball trajectory with real-table passthrough so cups sit on your actual desk surface.",
      "• Includes game-state management (turn system, scoring, win/loss flow), cup fill animations, and splash VFX.",
      "• Documented as a development cookbook — step-by-step setup covering Meta Quest Link, XR Plugin Management, passthrough layer configuration, and hand-physics integration.",
    ],
    hasMedia: true,
    media: [{ type: "video", src: beerPong }],
  },
  {
    emoji: "🤖",
    category: "Reinforcement Learning",
    title: "Pickup & Delivery RL Agent",
    shortDesc: "Deep Q-Network agent trained to solve dynamic pickup-and-delivery routing in a custom OpenAI Gym environment.",
    explanations: [
      "• Trained a reinforcement learning agent to solve dynamic pickup-and-delivery tasks in a custom grid environment.",
      "• Implemented with Python using a Deep Q-Network (DQN); environment built with OpenAI Gym conventions.",
      "• Agent learns optimal routing strategies — picking up packages and delivering them to goal locations — handling variable map layouts and multiple simultaneous tasks.",
      "• Evaluated convergence curves, reward shaping strategies, and the impact of state representation (local vs. global observation windows).",
    ],
    hasMedia: true,
    media: [{ type: "video", src: pickupAgent }],
  },
  {
    emoji: "🥽",
    category: "VR Simulation",
    title: "Holy Mountain — VR Interactive Environment",
    shortDesc: "VR Alps simulation with interactive tree lifecycle, AI animal behavior, and teleport locomotion.",
    explanations: [
      "• Second-semester project | Solo lead, with faculty reviews.",
      "• Built a VR Alps simulation with an interactive tree lifecycle: collect seeds from dead trees → choose species on an in-world panel → plant → grow → protect.",
      "• Implemented VR mechanics: inventory, teleport/snap locomotion, and stone-throwing defense; polished in-world UI flows.",
      "• Developed AI animal behavior (NavMesh, perception/targeting of saplings) with time-sliced sensing and object pooling to cut CPU spikes.",
    ],
    github: "https://github.com/niloufarmj/Holy_Mountain_VR",
    hasMedia: true,
    media: [{ type: "video", src: mountain }],
  },
  {
    emoji: "🚀",
    category: "VR / Shader",
    title: "Mars Rover Simulation",
    shortDesc: "VR drilling sim with custom URP shaders creating real-time craters via procedural textures — no geometry edits.",
    explanations: [
      "• Implemented the drilling system end-to-end: custom URP shader that creates crater-like holes using procedural textures and runtime parameters (non-destructive — no terrain geometry edits).",
      "• Orchestrated the arm animation sequence with staged joint rotations, drill spawn, hole progression, and retraction, synced to shader timelines.",
      "• Added terrain-aware VFX & particles (dust/debris around contact point) and hooked parameters to the drilling state for consistent visuals.",
      "• Profiled and tuned for real-time performance (GPU-friendly material, lean updates, clean state machine).",
    ],
    github: "https://github.com/leonhardrobin/mars-rover-simulator",
    hasMedia: true,
    media: [{ type: "video", src: rover }],
  },
  {
    emoji: "🌡️",
    category: "VR Research",
    title: "Thermal Perception in VR",
    shortDesc: "VR research study on thermal perception — simulated heater warmth using Meta Quest hand tracking and surveys.",
    explanations: [
      "• Developed a VR environment using Unity and Meta Quest for realistic hand tracking.",
      "• Simulated thermal perception with a stylized virtual heater model, manipulating material emission to create a sense of warmth.",
      "• Designed an experimental setup with three phases (left/right heater on/off) and collected data on hand positions, skin temperature, and survey responses.",
      "• Implemented a user-friendly UI for surveys and guidance, focusing on user comfort and immersion.",
    ],
    github: "https://github.com/niloufarmj/temperature-vr-effect",
    hasMedia: true,
    media: [{ type: "video", src: temperature }],
  },
  {
    emoji: "🎮",
    category: "Unreal Engine",
    title: "Shattered Wonderland",
    shortDesc: "Alice in Wonderland Unreal Engine game — platformer + horror maze, rigged & animated character, team of 7.",
    explanations: [
      "• Developed a game inspired by \"Alice in Wonderland\" with two levels: a platformer and a horror maze, using Unreal Engine, C++, and Blueprints.",
      "• Collaborated with a team of 7, utilized Git for version control, and created a design document.",
      "• Designed Level 1: save/load game, collectables, platforms — also rigged and animated Alice's character.",
      "• Designed and implemented HUD and UI/UX.",
    ],
    github: "https://github.com/GameDevProject1/Game-Dev-Project",
    hasMedia: true,
    media: [{ type: "video", src: alice }],
  },
  {
    emoji: "🌸",
    category: "OpenGL",
    title: "Interactive Sakura Tree",
    shortDesc: "2D OpenGL scene with falling sakura blooms and mouse-hover rotation using GLFW, GLM, and custom shaders.",
    explanations: [
      "• Developed a 2D scene using OpenGL, GLFW, and GLAD for rendering and window management.",
      "• Created a sakura tree with falling blooms using custom shaders and 2D transformations.",
      "• Implemented interactive features: hovering the mouse over blooms causes them to rotate.",
      "• Used GLM for matrix transformations and STB Image for loading textures; random generation for natural falling effects.",
    ],
    github: "https://github.com/niloufarmj/FH-OpenGL-HWs/tree/main/src/HW2",
    hasMedia: true,
    media: [{ type: "video", src: sakura }],
  },
  {
    emoji: "🏛️",
    category: "WebAR",
    title: "Museumore",
    shortDesc: "WebAR museum guide app — MindAR + Three.js frontend, Django REST backend; deployed in a real library archive.",
    explanations: [
      "• Augmented Reality Web Application for Museums and Galleries.",
      "• Designed and developed a clean UI using React; WebAR via MindAR and ThreeJS.",
      "• CRUD REST API backend built with Django.",
      "• Deployed and actively used in Shahid Beheshti Central Library Archive.",
    ],
    github: "https://github.com/niloufarmj/museumore-ar-project",
    hasMedia: true,
    media: [{ type: "video", src: museumore }],
  },
  {
    emoji: "♟️",
    category: "AI Game",
    title: "Othello Game",
    shortDesc: "Java/JavaFX Othello AI with Minimax + alpha-beta pruning for optimal move selection in a university AI course.",
    explanations: [
      "• AI player for the board game Othello implemented in Java and JavaFX.",
      "• Minimax algorithm with alpha-beta pruning for optimal move selection.",
      "• University AI course project, maintained via GitHub.",
    ],
    github: "https://github.com/niloufarmj/othello_AI",
    hasMedia: true,
    media: [
      { type: "video", src: othello },
      { type: "video", src: othello_AI },
    ],
  },
  {
    emoji: "💬",
    category: "Full-Stack Web",
    title: "Reddit Clone",
    shortDesc: "Full-stack Reddit clone — React + Express, user auth, post creation, comment sections, RESTful API design.",
    explanations: [
      "• Clone of Reddit using React and Express JS for a university Internet Engineering course.",
      "• Features: user authentication, post creation, comment sections, RESTful API design.",
      "• Collaborated with a teammate via GitHub.",
    ],
    github: "https://github.com/niloufarmj/IE-Project-Reddit",
    hasMedia: true,
    media: [
      { type: "image", src: login },
      { type: "image", src: hp },
      { type: "image", src: cp },
      { type: "image", src: up },
    ],
  },
  {
    emoji: "🦾",
    category: "Robotics",
    title: "Wall Follower Omni Bot",
    shortDesc: "Omnidirectional robot with Bug 0/1/2 path-planning algorithms — Python, Webots simulation, Matlab verification.",
    explanations: [
      "• Omni-directional robot with a wall-following controller.",
      "• Implemented Bug 0, Bug 1, and Bug 2 path-planning algorithms.",
      "• Developed in Python, simulated in Webots, verified with Matlab.",
    ],
    github: "https://github.com/niloufarmj/SBU-Robotics",
    hasMedia: true,
    media: [
      { type: "video", src: bug0 },
      { type: "video", src: bug2 },
      { type: "video", src: bug1 },
    ],
  },
  {
    emoji: "📧",
    category: "Java",
    title: "Gmail Demo",
    shortDesc: "Gmail-style Java + JavaFX client-server app with MVC — send/receive emails, user account management.",
    explanations: [
      "• Gmail-like client-server app for the Advanced Programming course, built in Java and JavaFX (MVC).",
      "• UI designed with JavaFX Scene Builder; features: send/receive emails, user account management.",
    ],
    github: "https://github.com/niloufarmj/gmail_demo",
    hasMedia: false,
  },
  {
    emoji: "🚀",
    category: "C++ Game",
    title: "Jetpack Joyride",
    shortDesc: "C++ Jetpack Joyride clone — random obstacles, collision detection, power-ups, state management with SBDL.",
    explanations: [
      "• Clone of Jetpack Joyride built in C++ with SBDL for a university basic-programming project.",
      "• Random obstacle generation, collision detection, power-ups, game-state management.",
    ],
    github: "https://github.com/niloufarmj/SBU-BP-JetpackJoyride/",
    hasMedia: true,
    media: [{ type: "video", src: jetpack }],
  },
  {
    emoji: "🚗",
    category: "C++ Game",
    title: "Two Cars",
    shortDesc: "C++ Two Cars clone — dual-car simultaneous control, increasing speed, random obstacle generation.",
    explanations: [
      "• Clone of 'Two Cars' in C++ with SBDL — control two cars simultaneously to dodge obstacles.",
      "• Increasing speed, random obstacle generation, home/game-over/pause states.",
    ],
    github: "https://github.com/niloufarmj/SBU-BP-Two-Cars",
    hasMedia: true,
    media: [{ type: "video", src: twoCars }],
  },
  {
    emoji: "🎲",
    category: "Unity Hobby",
    title: "Hobby Projects",
    shortDesc: "Six Unity mini-games: Dice Kid, Roll-a-Ball, Project Boost, Car Game, Angry Birds, Digital Clock.",
    explanations: [],
    hobby: true,
    hobbyItems: [
      { label: "Dice Kid",       video: diceKid },
      { label: "Roll a Ball",    video: roll },
      { label: "Project Boost",  video: boost },
      { label: "Car Game",       video: cars },
      { label: "Angry Birds",    video: angry },
      { label: "Digital Clock",  video: clock },
    ],
    github: "https://github.com/niloufarmj/Hobby-Projects",
    hasMedia: false,
  },
];

/* ── Star burst on button click ── */
function StarBurst({ x, y, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 750);
    return () => clearTimeout(t);
  }, [onDone]);

  const stars = useMemo(() => Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * 360 + (Math.random() - 0.5) * 25;
    const dist  = 35 + Math.random() * 45;
    const rad   = (angle * Math.PI) / 180;
    return { endX: Math.cos(rad) * dist, endY: Math.sin(rad) * dist,
             size: 7 + Math.random() * 6, delay: Math.random() * 60 };
  }), []);

  return createPortal(
    <div style={{ position: "fixed", left: x, top: y, pointerEvents: "none", zIndex: 9999 }}>
      {stars.map((s, i) => (
        <div key={i} className="star-particle" style={{
          position: "absolute", width: s.size, height: s.size,
          left: -s.size / 2, top: -s.size / 2,
          background: "#ffffff",
          boxShadow: "0 0 6px 2px rgba(47,140,255,0.9), 0 0 14px 4px rgba(164,46,207,0.6)",
          "--end-x": `${s.endX}px`, "--end-y": `${s.endY}px`,
          animationDelay: `${s.delay}ms`,
        }} />
      ))}
    </div>,
    document.body
  );
}

/* ── Word-wave hover effect (same as home bio) ── */
function BulletText({ text }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const words = text.split(" ");
  const GLOW = "0 0 6px rgba(255,105,180,1), 0 0 15px rgba(255,105,180,0.8), 0 0 30px rgba(47,140,255,0.8)";

  return (
    <>
      {words.flatMap((word, i) => {
        const dist = hoveredIdx !== null ? Math.abs(i - hoveredIdx) : Infinity;
        let scale = 1, ty = 0, shadow = "none", color = "inherit", zIndex = "auto";
        if      (dist === 0) { scale = 1.08; ty = -3; shadow = GLOW; color = "white"; zIndex = 50; }
        else if (dist === 1) { scale = 0.9;  ty = -1.5; shadow = "0 0 6px rgba(47,140,255,0.2)"; zIndex = 20; }
        else if (dist === 2) { scale = 0.97; ty = -0.5; zIndex = 10; }
        const span = (
          <span key={i} style={{
            display: "inline-block", position: "relative", cursor: "default",
            transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), text-shadow 0.25s ease, color 0.25s ease",
            transform: `scale(${scale}) translateY(${ty}px)`,
            textShadow: shadow, color, zIndex, margin: "0 3px",
          }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >{word}</span>
        );
        return i < words.length - 1 ? [span, " "] : [span];
      })}
    </>
  );
}

/* ── 3-D tilt wrapper + profile-photo border/glow/pulse ── */
function TiltFrame({ children, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left  - r.width  / 2) / r.width)  * 12,
      y: ((e.clientY - r.top   - r.height / 2) / r.height) * -12,
    });
  };
  return (
    <div className="tilt-frame" onMouseMove={move} onMouseLeave={() => setTilt({ x: 0, y: 0 })} onClick={onClick}>
      <div style={{ transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`, transition: "transform 0.15s ease-out" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Modal hobby accordion item ── */
function ModalHobbyItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className={`modal-hobby-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "▾ " : "▸ "}{item.label}
      </button>
      {open && (
        <div className="modal-hobby-video">
          <Player playsInline src={item.video} />
        </div>
      )}
    </div>
  );
}

/* ── Fullscreen media viewer (auto-closes after 3 s, click to dismiss early) ── */
function MediaFullscreen({ item, onClose }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const autoExit = setTimeout(() => setExiting(true), 3000);
    return () => clearTimeout(autoExit);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const done = setTimeout(onClose, 340);
    return () => clearTimeout(done);
  }, [exiting, onClose]);

  const phase = exiting ? "exiting" : "entering";

  return createPortal(
    <div
      className={`media-fullscreen-overlay ${phase}`}
      onClick={() => setExiting(true)}
    >
      <div className={`media-fullscreen-inner ${phase}`} onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? (
          <video src={item.src} autoPlay controls />
        ) : (
          <img src={item.src} alt="fullscreen" />
        )}
      </div>
    </div>,
    document.body
  );
}

/* ── More Info modal (portal → renders at document.body, covers full viewport) ── */
function ProjectModal({ project, onClose }) {
  const [fullscreenItem, setFullscreenItem] = useState(null);

  return (
    <>
      {createPortal(
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <div className="modal-content">
            <button className="modal-close-btn" onClick={onClose}>×</button>

            <h2 className="modal-title">{project.title}</h2>
            <span className="modal-badge">{project.emoji} {project.category}</span>

            {project.explanations && project.explanations.length > 0 && (
              <div className="modal-bullets">
                {project.explanations.map((text, i) => (
                  <p key={i} style={{ lineHeight: 2.1, overflow: "visible" }}>
                    <BulletText text={text} />
                  </p>
                ))}
              </div>
            )}

            {project.hobby && project.hobbyItems && (
              <div className="modal-hobby-list">
                {project.hobbyItems.map((item, i) => (
                  <ModalHobbyItem key={i} item={item} />
                ))}
              </div>
            )}

            {project.hasMedia && project.media && (
              <div className="modal-media-grid">
                {project.media.map((item, i) => (
                  <div key={i} className="modal-media-item">
                    <TiltFrame onClick={() => setFullscreenItem(item)}>
                      {item.type === "video" ? (
                        <Player playsInline src={item.src} className="project-media" />
                      ) : (
                        <img src={item.src} alt={`${project.title} ${i + 1}`} className="project-media" />
                      )}
                    </TiltFrame>
                    <button className="media-expand-btn" title="View fullscreen" onClick={() => setFullscreenItem(item)}>⛶</button>
                  </div>
                ))}
              </div>
            )}

            {project.github && (
              <a
                className="modal-github-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>,
        document.body
      )}

      {fullscreenItem && (
        <MediaFullscreen
          item={fullscreenItem}
          onClose={() => setFullscreenItem(null)}
        />
      )}
    </>
  );
}

/* ── Carousel preview media ── */
function CarouselPreview({ project }) {
  if (project.hasMedia && project.media && project.media.length > 0) {
    const first = project.media[0];
    if (first.type === "video") {
      return (
        <TiltFrame>
          <video autoPlay muted loop playsInline src={first.src} className="project-media carousel-preview-video" />
        </TiltFrame>
      );
    }
    return (
      <TiltFrame>
        <img src={first.src} alt={project.title} className="project-media carousel-preview-img" />
      </TiltFrame>
    );
  }
  if (project.hobby && project.hobbyItems && project.hobbyItems.length > 0) {
    return (
      <TiltFrame>
        <video autoPlay muted loop playsInline src={project.hobbyItems[0].video} className="project-media carousel-preview-video" />
      </TiltFrame>
    );
  }
  return (
    <div className="carousel-preview-placeholder">
      <span className="carousel-preview-emoji">{project.emoji}</span>
    </div>
  );
}

/* ── Single carousel slide ── */
function CarouselSlide({ project, onMoreInfoClick }) {
  return (
    <div className="carousel-slide">
      <div className="carousel-slide-inner">
        <div className="carousel-info">
          <span className="carousel-badge">
            {project.emoji} {project.category}
          </span>
          <h2 className="carousel-title">{project.title}</h2>
          <p className="carousel-short-desc">{project.shortDesc}</p>
          <button className="carousel-more-btn" onClick={onMoreInfoClick}>
            More Info ↗
          </button>
        </div>
        <div className="carousel-preview">
          <CarouselPreview project={project} />
        </div>
      </div>
    </div>
  );
}

/* ── Main page ── */
function ProjectsPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);
  const spawnBurst = useCallback((e) => {
    const id = burstId.current++;
    setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
  }, []);
  const removeBurst = useCallback((id) => setBursts((prev) => prev.filter((b) => b.id !== id)), []);
  const [animKey, setAnimKey] = useState(0);
  const lastScrollTime = useRef(0);
  const activeIndexRef = useRef(0);
  const showModalRef = useRef(false);

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { showModalRef.current = showModal; }, [showModal]);

  // Prevent page scroll while on this route
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const changeProject = useCallback((delta) => {
    if (showModalRef.current) return;
    const now = Date.now();
    if (now - lastScrollTime.current < 700) return;
    lastScrollTime.current = now;
    const next = activeIndexRef.current + delta;
    if (next < 0 || next >= PROJECTS.length) return;
    setActiveIndex(next);
    setAnimKey((k) => k + 1);
  }, []);

  // Wheel
  useEffect(() => {
    const onWheel = (e) => {
      if (showModalRef.current) return;
      e.preventDefault();
      if (e.deltaY > 0) changeProject(1);
      else if (e.deltaY < 0) changeProject(-1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [changeProject]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") changeProject(1);
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft")  changeProject(-1);
      if (e.key === "Escape" && showModalRef.current) setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [changeProject]);

  // Touch / swipe
  const touchStartY = useRef(null);
  const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
  const onTouchEnd = (e) => {
    if (touchStartY.current === null || showModalRef.current) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) changeProject(diff > 0 ? 1 : -1);
    touchStartY.current = null;
  };

  const project = PROJECTS[activeIndex];

  return (
    <div
      className="projects-carousel-page"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-header">
        <div className="carousel-back-btn" onClick={(e) => {
          spawnBurst(e);
          const mainEl = document.querySelector(".page-content .main");
          if (mainEl) mainEl.classList.add("page-exit");
          setTimeout(() => navigate("/"), 520);
        }}>
          ← Home
        </div>
        <h1 className="carousel-page-title">Projects</h1>
      </div>

      <CarouselSlide
        key={animKey}
        project={project}
        onMoreInfoClick={(e) => { spawnBurst(e); setTimeout(() => setShowModal(true), 180); }}
      />

      <div className="carousel-dots">
        {PROJECTS.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => {
              if (i !== activeIndex) {
                setActiveIndex(i);
                setAnimKey((k) => k + 1);
              }
            }}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {activeIndex + 1} / {PROJECTS.length}
      </div>
      <div className="carousel-scroll-hint">scroll to navigate</div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}

      {bursts.map((b) => (
        <StarBurst key={b.id} x={b.x} y={b.y} onDone={() => removeBurst(b.id)} />
      ))}
    </div>
  );
}

export default ProjectsPage;
