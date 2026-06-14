import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Assets/CSS/Education.css";
import "../Assets/CSS/WorkExperience.css";
import "../Assets/CSS/Courses.css";

import pong from "../Assets/Media/videos/Pong.mp4";
import flappy from "../Assets/Media/videos/FlappyBird.mp4";
import breakout from "../Assets/Media/videos/Breakout.mp4";
import match3 from "../Assets/Media/videos/Match3.mp4";
import mario from "../Assets/Media/videos/SuperMario.mp4";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);

const LinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const COURSES_DATA = [
  {
    title: "HarvardX — CS50 Game Development",
    provider: "HarvardX",
    description: "Built five classic games from scratch, each with its own repository.",
    links: [
      { type: "github", label: "Pong", url: "https://github.com/niloufarmj/CS50_Pong" },
      { type: "github", label: "Flappy Bird", url: "https://github.com/niloufarmj/CS50_FlappyBird" },
      { type: "github", label: "Breakout", url: "https://github.com/niloufarmj/CS50_Breakout" },
      { type: "github", label: "Match 3", url: "https://github.com/niloufarmj/CS50_Match3" },
      { type: "github", label: "Super Mario", url: "https://github.com/niloufarmj/CS50_SuperMario" },
    ],
    videos: [
      { label: "Pong", src: pong },
      { label: "Flappy Bird", src: flappy },
      { label: "Breakout", src: breakout },
      { label: "Match 3", src: match3 },
      { label: "Super Mario", src: mario },
    ],
  },
  {
    title: "Game Design: Art and Concepts",
    provider: "CalArts · Coursera",
    description:
      "A 5-course specialization covering game art and design concepts — specialization certificate earned.",
    links: [
      {
        type: "certificate",
        label: "Specialization Certificate",
        url: "https://coursera.org/share/58b67f7d0fa9576c918de3709723a081",
      },
      { type: "certificate", label: "Introduction to Game Design", url: "https://coursera.org/share/14fd0a3a3db44a4ec9f35a3a3aee367f" },
      { type: "certificate", label: "Story & Narrative Development", url: "https://coursera.org/share/1127ab29b6759de68dac12ebc752276e" },
      { type: "certificate", label: "World Design", url: "https://coursera.org/share/48c529b80e91a6a0db911a422b3bf5f0" },
      { type: "certificate", label: "Character Design", url: "https://coursera.org/share/ef2bff53be68709f8dbe8131f79f1fa5" },
      { type: "certificate", label: "Game Design Document", url: "https://coursera.org/share/ebd6c65f7e839d2ef4a4389a0e6b5d98" },
    ],
  },
  {
    title: "Meta Front-End Developer",
    provider: "Meta · Professional Certificate",
    description:
      "Six courses covering front-end fundamentals — HTML, CSS, JavaScript, version control, and React from basics to advanced.",
    links: [
      { type: "certificate", label: "Intro to Front-End", url: "https://coursera.org/share/ec8dc2ea28111ffbc6cbce499cdeedde" },
      { type: "certificate", label: "JavaScript", url: "https://coursera.org/share/eaf5bd5c8546f6e124d09582de0ebbdf" },
      { type: "certificate", label: "Version Control", url: "https://coursera.org/share/2a160d25ed35abde29bd8eaa17ebccb6" },
      { type: "certificate", label: "HTML & CSS in Depth", url: "https://coursera.org/share/d10e9debe2d1a7d58943436de0e4e0bb" },
      { type: "certificate", label: "React Basics", url: "https://coursera.org/share/8ccefea9e5d14c9a0fc054a30d8c8ce1" },
      { type: "certificate", label: "Advanced React", url: "https://coursera.org/share/b519f6e7bd0d76fa153549e87fb29618" },
    ],
  },
  {
    title: "Additional Coursework",
    provider: "Various",
    description: "Extra specializations in serious games, augmented reality and UX design.",
    links: [
      { type: "certificate", label: "Serious Gaming — Erasmus", url: "https://coursera.org/share/ce97886aec9bebeae7e332fa50392918" },
      { type: "certificate", label: "AR with ARCore — Daydream", url: "https://coursera.org/share/b1e58ce6823c83cd118f2447d13ecc18" },
      { type: "certificate", label: "UX Design — Google", url: "https://coursera.org/share/5dc0acb0315be5f8247ec9ea19407c11" },
    ],
  },
];

function CoursesPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/"), 450);
  };

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedItems((prev) => (prev[index] ? {} : { [index]: true }));
  };

  return (
    <div className={`education-container courses-container page-enter ${isExiting ? "page-exit" : ""}`}>
      {/* Intro header */}
      <div className="work-intro">
        <button className="edu-back-btn" onClick={handleBack}>
          ← Home
        </button>
        <span className="edu-pretitle">— ALWAYS LEARNING</span>
        <h1 className="courses-page-title">Courses &amp; Certificates</h1>
        <p className="edu-subtitle">
          Game development, design, and front-end engineering — each with shipped projects or
          certificates.
        </p>
      </div>

      {/* Course list */}
      <div className="courses-list">
        {COURSES_DATA.map((course, index) => {
          const isExpanded = !!expandedItems[index];

          return (
            <div
              key={index}
              className={`course-row ${isExpanded ? "expanded" : ""}`}
              onClick={(e) => toggleExpand(index, e)}
            >
              <div className="course-head">
                <span className="course-num">{String(index + 1).padStart(2, "0")}</span>
                <div className="course-title-group">
                  <h2 className="course-title">{course.title}</h2>
                  <div className="course-provider">{course.provider}</div>
                </div>
                <span className="course-arrow">
                  <ArrowIcon />
                </span>
              </div>

              <div className="course-body" onClick={(e) => e.stopPropagation()}>
                <div className="course-body-inner">
                  <p className="course-desc">{course.description}</p>
                  <div className="course-links">
                    {course.links.map((link, lIndex) => (
                      <a
                        key={lIndex}
                        className="course-link"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.type === "github" ? <GithubIcon /> : <LinkIcon />}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                  {course.videos && course.videos.length > 0 && (
                    <div className="course-media-grid">
                      {course.videos.map((v, vIndex) => (
                        <div className="course-media-item" key={vIndex}>
                          <video
                            className="course-media-vid"
                            src={v.src}
                            controls
                            muted
                            playsInline
                            preload="metadata"
                          />
                          <span className="course-media-label">{v.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPage;
