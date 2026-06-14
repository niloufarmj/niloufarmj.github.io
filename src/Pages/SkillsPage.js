import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Assets/CSS/Education.css";
import "../Assets/CSS/WorkExperience.css";
import "../Assets/CSS/Skills.css";

const SKILLS_DATA = [
  {
    title: "Programming Languages",
    skills: ["C++", "C#", "Java", "hlsl", "Python", "Lua", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Angular", "View.js", "Love2D", "Flutter", "JavaFX", "Django", "Node.js", ".NET"],
  },
  {
    title: "Libraries / Plugins",
    skills: ["OpenGL", "GLAD", "RxJS", "Bootstrap", "Three.js", "MindAR", "MLAgent", "OpenCV", "TensorFlow", "Yolo", "ImagineWebAR"],
  },
  {
    title: "Dev Tools",
    skills: ["Unity Engine", "Unreal Engine", "Android Studio", "Git", "Linux"],
  },
  {
    title: "Design Tools",
    skills: ["Photoshop", "Illustrator", "Blender", "Figma", "Canva", "After Effects"],
  },
  {
    title: "AI Tools",
    skills: [
      "Tavus API",
      "Equos API",
      "Akool API",
      "LemonSlice API",
      "Runway",
      "Seedance",
      "Nano Banana",
      "KlingAI",
      "Grok Imagine",
      "Sora",
      "Claude Code",
    ],
  },
  {
    title: "Languages",
    skills: ["Persian (native)", "English (IELTS Academic 7.5)", "German (A2)"],
  },
];

function SkillsPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/"), 450);
  };

  return (
    <div className={`education-container skills-container page-enter ${isExiting ? "page-exit" : ""}`}>
      {/* Intro header */}
      <div className="work-intro">
        <button className="edu-back-btn" onClick={handleBack}>
          ← Home
        </button>
        <span className="edu-pretitle">— TOOLKIT</span>
        <h1 className="work-page-title">Skills</h1>
        <p className="edu-subtitle">
          A full-stack creative-technical stack — from engine internals and shaders to web
          frameworks and design tools.
        </p>
      </div>

      {/* Category grid */}
      <div className="skills-grid">
        {SKILLS_DATA.map((cat, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-card-header">
              <span className="skill-dot" />
              <h2 className="skill-card-title">{cat.title}</h2>
            </div>
            <div className="skill-chips">
              {cat.skills.map((s, j) => (
                <span className="skill-chip" key={j}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
