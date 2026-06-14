import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import BioText from "../Components/BioText";
import "../Assets/CSS/Education.css";
import "../Assets/CSS/WorkExperience.css";

import freshfxLuna from "../Assets/Media/Works/luna-freshfx.PNG";
import freshfxHellbrunn from "../Assets/Media/Works/hellbrunn-freshfx.PNG";
import freshfxInnsbruck from "../Assets/Media/Works/Innsbruck_tourismus_freshfx.avif";

import pawQuants from "../Assets/Media/Works/PawQuants.jpeg";
import qilin from "../Assets/Media/Works/Qilin.jpeg";
import qpong from "../Assets/Media/Works/QPong.jpeg";

import chandkhaan1 from "../Assets/Media/Works/chandkhaan1.jpg";
import chandkhaan2 from "../Assets/Media/Works/chandkhaan2.jpg";
import chandkhaan3 from "../Assets/Media/Works/chandkhaan3.jpg";
import chandkhaan4 from "../Assets/Media/Works/chandkhaan4.jpg";

import ropart1 from "../Assets/Media/videos/Ropart1.mp4";
import ropart2 from "../Assets/Media/videos/Ropart2.mp4";
import ropart3 from "../Assets/Media/videos/Ropart3.mp4";
import under from "../Assets/Media/videos/UnderGround.mp4";
import mapna1 from "../Assets/Media/Works/mapna1.jpg";
import mapna2 from "../Assets/Media/Works/mapna2.jpg";

import mart1 from "../Assets/Media/Works/mart1.jpg";
import mart2 from "../Assets/Media/Works/mart2.jpg";
import mart3 from "../Assets/Media/Works/mart3.jpg";
import morning from "../Assets/Media/Works/morning.jpg";
import cal from "../Assets/Media/Works/calculator.jpg";
import yalda from "../Assets/Media/Works/yalda.jpeg";

const WORK_DATA = [
  {
    title: "Unity / Unreal / Interactive Developer",
    company: "FreshFX",
    location: "Salzburg, Austria",
    date: "Jul 2025 — Present",
    details: [
      "Started as an intern for 4 months, then hired on as a part-time developer.",
      "Build interactive AI avatars and create custom applications powered by these real-time avatars across Unity and Unreal Engine.",
      "Built a conversational avatar in Unreal that answers user prompts via a Python RAG backend (socket / HTTP bridge), with state logic for listening → answering → idle and clean Blueprint modules.",
      "Develop AR apps and Web AR experiences with a focus on immersive, real-time UX.",
      "Drive AI video-creation prompting with tools like Seedance and Runway, alongside AI-assisted image and content pipelines — evaluating models and iterating prompt design with batch runs and quality checks.",
      "Shipped Unity features for a public interactive application: scene and state flow, polished UI, media handling and export, and performance tuning.",
    ],
    tags: ["Unity", "Unreal", "AR", "Web AR", "AI Avatars", "RAG", "AI Video", "Python", "React.js"],
    media: [
      { type: "image", src: freshfxLuna },
      { type: "image", src: freshfxHellbrunn },
      { type: "image", src: freshfxInnsbruck },
    ],
  },
  {
    title: "Tutor — MR, OOP, DSP, DIP, HYP, AI, ALD",
    company: "FH Upper Austria",
    location: "Hagenberg, Austria",
    date: "Mar 2025 — Jun 2026",
    details: [
      "Tutored Mixed Reality, Object-Oriented Programming, Online Multimedia, Digital Image Processing, Hypermedia Frameworks, Artificial Intelligence, Algorithmic Thinking, and Digital Signal Processing.",
      "Graded programming and theory assignments with standardized rubrics; delivered actionable bilingual feedback (EN / DE) and consistent marking across cohorts.",
      "Prepared sample solutions, starter templates and test harnesses (JUnit, MATLAB scripts, small Python checks) to validate correctness and edge cases.",
      "Supported XR coursework: rig setup, input and locomotion patterns, performance profiling, build issues and Git hygiene.",
    ],
    tags: ["MR", "OOP", "DSP", "Java", "MATLAB", "PHP", "View.js", "AI", "Python"],
    media: [],
  },
  {
    title: "Indie Unity Game Developer",
    company: "Psiket Academy / Sharif University",
    location: "Remote",
    date: "May 2024 — Sep 2024",
    details: [
      "Created several quantum educational games — QPong, Qilin and PawQuants.",
      "Implemented quantum computing rules and mechanics inside accessible, playable games.",
      "Used Unity to design and continually enhance the player experience.",
      "Worked solo as an indie game maker across the full project lifecycle.",
    ],
    tags: ["Unity", "C#", "Quantum", "Game Design"],
    media: [
      { type: "image", src: pawQuants },
      { type: "image", src: qpong },
      { type: "image", src: qilin },
    ],
  },
  {
    title: "Unity Developer",
    company: "Studio Rhino",
    location: "Tehran, Iran",
    date: "May 2023 — Aug 2023",
    details: [
      "Built 'Chandkhaan', an Android auto-battler inspired by Teamfight Tactics (League of Legends).",
      "Implemented key features: main menu, animations, combat mechanics, rounds and tower customization.",
      "Used Unity's real-time 3D platform to design and polish the user experience.",
      "Built multiplayer with SignalR for seamless client–server communication.",
      "Collaborated through GitHub and ClickUp for efficient project management.",
    ],
    tags: ["Unity", "C#", "Multiplayer", "SignalR"],
    media: [
      { type: "image", src: chandkhaan1 },
      { type: "image", src: chandkhaan2 },
      { type: "image", src: chandkhaan3 },
      { type: "image", src: chandkhaan4 },
    ],
  },
  {
    title: "Game Development & Design Intern",
    company: "Concealland Studio",
    location: "Tehran, Iran",
    date: "Jul 2022 — Nov 2022",
    details: [
      "Designed 3D models with 3ds Max and Blender.",
      "Developed games in C# on the Unity engine.",
      "Collaborated with teammates using GitLab.",
    ],
    tags: ["Unity", "C#", "Blender", "3ds Max"],
    media: [
      { type: "video", src: ropart1 },
      { type: "video", src: ropart2 },
      { type: "video", src: ropart3 },
      { type: "video", src: under },
      { type: "image", src: mapna1 },
      { type: "image", src: mapna2 },
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "System Group",
    location: "Tehran, Iran",
    date: "Aug 2021 — Jun 2022",
    details: [
      "Built the front-end of 'Fanoos' using Angular and RxJS.",
      "Refactored the 'Rahkaran' back-end to communicate with the front-end using C# .NET.",
      "Planned and collaborated with the team using Scrum (Skype for Business).",
      "Worked with Azure DevOps for CI and project tracking.",
    ],
    tags: ["Angular", "RxJS", "C# .NET", "Azure DevOps"],
    media: [],
  },
  {
    title: "Front-end Developer (Intern)",
    company: "Walvira",
    location: "Tehran, Iran",
    date: "Jan 2020 — Oct 2020",
    details: [
      "Interned for 4 months, then promoted to a part-time role for a further 6 months.",
      "Designed and built dynamic, responsive websites with HTML, CSS, JavaScript and jQuery.",
      "Worked with REST APIs to retrieve and display data from databases.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "REST"],
    media: [
      { type: "image", src: mart1 },
      { type: "image", src: mart2 },
      { type: "image", src: mart3 },
      { type: "image", src: morning },
      { type: "image", src: cal },
      { type: "image", src: yalda },
    ],
  },
  {
    title: "Teaching Assistant & Mentorship",
    company: "Shahid Beheshti University",
    location: "Tehran, Iran",
    date: "2019 — 2023",
    details: [
      "Basic Programming — led challenges and homework (Dr. Sadeq Ali-akbari).",
      "Advanced Programming — led homework and taught project fundamentals: MVC architecture + JavaFX (Dr. Sadeq Ali-akbari).",
      "Advanced Programming — led challenges, homework and the final project (Dr. Maede Mosharraf).",
      "Signals & Systems — led written homework and taught MATLAB fundamentals (Dr. Salimi).",
    ],
    tags: ["Java", "JavaFX", "MATLAB", "MVC"],
    media: [],
  },
];

function JobExperiencePage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // First role expanded by default, others collapsed; only one open at a time.
  const [expandedItems, setExpandedItems] = useState({ 0: true });

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/"), 450);
  };

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedItems((prev) => (prev[index] ? {} : { [index]: true }));
  };

  return (
    <div className={`education-container work-container page-enter ${isExiting ? "page-exit" : ""}`}>
      {/* Intro header */}
      <div className="work-intro">
        <button className="edu-back-btn" onClick={handleBack}>
          ← Home
        </button>
        <span className="edu-pretitle">— CAREER</span>
        <h1 className="work-page-title">Work Experience</h1>
        <p className="edu-subtitle">
          Eight roles across XR, game development, and full-stack engineering — from indie Unity
          titles to real-time Unreal avatars. Click any entry to expand.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline-wrapper work-timeline">
        <div className="timeline-line" />

        {WORK_DATA.map((item, index) => {
          const isExpanded = !!expandedItems[index];
          const theme = index % 2 === 0 ? "purple-theme" : "blue-theme";
          const dotClass = index % 2 === 0 ? "cyan-dot" : "purple-dot";

          return (
            <div key={index} className="timeline-item">
              <div className={`timeline-dot ${dotClass}`} />

              <div
                className={`work-card ${theme} ${isExpanded ? "expanded" : ""}`}
                onClick={(e) => toggleExpand(index, e)}
              >
                <div className="work-card-header">
                  <div className="work-title-group">
                    <h2 className="work-card-title">{item.title}</h2>
                    <div className="work-company">
                      <span className="work-company-name">{item.company}</span>
                      <span className="work-company-sub"> · {item.location}</span>
                    </div>
                  </div>
                  <div className="work-date-badge">{item.date}</div>
                </div>

                {/* Collapsible body — animates open/closed via grid-template-rows */}
                <div className="work-details" onClick={(e) => e.stopPropagation()}>
                  <div className="work-details-inner">
                    <ul className="work-bullets-list">
                      {item.details.map((d, bIndex) => (
                        <li key={bIndex} className="work-bullet-item">
                          <BioText text={d} />
                        </li>
                      ))}
                    </ul>

                    {item.tags && item.tags.length > 0 && (
                      <div className="work-tags">
                        {item.tags.map((t, tIndex) => (
                          <span key={tIndex} className="work-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.media && item.media.length > 0 && (
                      <div className="work-media-grid">
                        {item.media.map((m, mIndex) =>
                          m.type === "video" ? (
                            <div key={mIndex} className="work-media-item work-media-video">
                              <video
                                className="work-media-vid"
                                src={m.src}
                                controls
                                muted
                                playsInline
                                preload="metadata"
                              />
                            </div>
                          ) : (
                            <div
                              key={mIndex}
                              className="work-media-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFullscreenImage(m.src);
                              }}
                            >
                              <img
                                src={m.src}
                                alt={`${item.title} preview`}
                                className="work-media-img"
                                loading="lazy"
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <button className="work-toggle-btn" onClick={(e) => toggleExpand(index, e)}>
                  {isExpanded ? "↓ collapse" : "→ details"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen image viewer */}
      {fullscreenImage &&
        createPortal(
          <div className="edu-fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
            <div className="edu-fullscreen-inner" onClick={(e) => e.stopPropagation()}>
              <img src={fullscreenImage} alt="Fullscreen preview" className="edu-fullscreen-img" />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default JobExperiencePage;
