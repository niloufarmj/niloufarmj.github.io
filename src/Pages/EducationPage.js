import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Grid } from "@mui/material";
import BioText from "../Components/BioText";
import "../Assets/CSS/Education.css";

import uniEng from "../Assets/Media/Diplomas/uni - diploma.jpeg";
import uniFa from "../Assets/Media/Diplomas/دانشگاه - مدرک.jpg";
import schoolEng from "../Assets/Media/Diplomas/school - diploma.jpeg";
import schoolFa from "../Assets/Media/Diplomas/متوسطه - مدرک.jpg";
import ili from "../Assets/Media/Diplomas/ili.jpeg";

const EDUCATION_DATA = [
  {
    title: "Master of Science in Interactive Media",
    explanations: [
      "• FH Univeristy of Upper Austria, Hagenburg Campus, Upper Austria, Austria",
      "• Oct 2024 – Present",
      "• Specialized in Game Development Track"
    ],
    date: "Oct 2024 – Present",
    institution: "FH Univeristy of Upper Austria",
    location: "Hagenburg Campus, Upper Austria, Austria",
    tag: "Specialized in Game Development Track",
    theme: "purple-theme",
    dotClass: "cyan-dot",
    media: []
  },
  {
    title: "Bachelor in Computer Science",
    explanations: [
      "• Shahid Beheshti University, Velenjak, Tehran, Iran",
      "• Jan 2018 – Dec 2023",
      "• University ranking #5 in Iran and #1042 in the world",
      "• Main Courses: Basic and Advanced Programming, Discrete Mathematics, Algorithms, Data Structure, Operating System, Database, Artifical Intelligence, Signals and Systems, Computer Vision, Internet Engineering",
      "• GPA: 2.94 out of 4"
    ],
    date: "Jan 2018 – Dec 2023",
    institution: "Shahid Beheshti University",
    location: "Velenjak, Tehran, Iran",
    highlight: "GPA: 2.94 out of 4 · Ranked #5 in Iran, #1042 globally",
    theme: "blue-theme",
    dotClass: "purple-dot",
    media: [
      { src: uniEng },
      { src: uniFa }
    ]
  },
  {
    title: "Diploma of Mathematics and Physics",
    explanations: [
      "• Abou-Ali Sina Highschool, Sattarkhan, Tehran, Iran",
      "• Jan 2016 – Dec 2018",
      "• GPA: 4 out of 4"
    ],
    date: "Jan 2016 – Dec 2018",
    institution: "Abou-Ali Sina Highschool",
    location: "Sattarkhan, Tehran, Iran",
    highlight: "GPA: 4 out of 4",
    theme: "purple-theme",
    dotClass: "cyan-dot",
    media: [
      { src: schoolEng },
      { src: schoolFa }
    ]
  },
  {
    title: "Completion of English Advanced Level ",
    explanations: [
      "• Iran Language Institute, Ekbatan, Tehran, Iran",
      "• Jan 2012 – Sep 2016",
      "• overall average rating: outstanding (91 - 100)",
      "• the levels are in accordance with the CFER"
    ],
    date: "Jan 2012 – Sep 2016",
    institution: "Iran Language Institute",
    location: "Ekbatan, Tehran, Iran",
    highlight: "overall average rating: outstanding (91 - 100)",
    theme: "blue-theme",
    dotClass: "purple-dot",
    media: [
      { src: ili }
    ]
  }
];

function EducationPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // First item (MS) expanded by default, others collapsed
  const [expandedItems, setExpandedItems] = useState({
    0: true,
    1: false,
    2: false,
    3: false
  });

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/");
    }, 450);
  };

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedItems((prev) => {
      const wasExpanded = prev[index];
      // Reset all to collapsed
      const nextState = {
        0: false,
        1: false,
        2: false,
        3: false
      };
      // Toggle current only
      if (!wasExpanded) {
        nextState[index] = true;
      }
      return nextState;
    });
  };

  // Which card (if any) is currently expanded — used to push neighbours out of the
  // way so the 15%-scaled card never overlaps them.
  const expandedIndex = EDUCATION_DATA.findIndex((_, i) => expandedItems[i]);
  const SHIFT = 34; // px the items move vertically to make room
  const LINE_SHIFT = 39; // timeline line + dots move left (15% more than SHIFT)
  const LEFT_SHIFT = 56; // the general-info box moves further so it clears the shifted line
  const anyExpanded = expandedIndex !== -1;

  return (
    <div className={`education-container page-enter ${isExiting ? "page-exit" : ""}`}>
      <Grid container spacing={3}>
        {/* Left Column: Title & Bio Narrative */}
        <Grid item xs={12} md={4.5} lg={4.2}>
          <div
            className="edu-left-col"
            style={{
              transform: anyExpanded ? `translateX(-${LEFT_SHIFT}px)` : "none",
            }}
          >
            {/* Back button */}
            <button className="edu-back-btn" onClick={handleBack}>
              ← Home
            </button>

            {/* Header section */}
            <div className="edu-header">
              <span className="edu-pretitle">— BACKGROUND</span>
              <h1 className="edu-title">Education</h1>
              <p className="edu-subtitle">
                From a top-ranked computer engineering program in Tehran to a Game Development master's in Austria.
              </p>
            </div>

            {/* Narrative Section - 30% Shorter */}
            <div className="edu-intro-narrative">
              <p>
                Since high school, my passion for math and physics drove me to excel, consistently ranking first in class and maintaining top grades.
              </p>
              <p>
                I placed 700th out of 150,000 candidates in Iran's highly competitive national entrance exam to secure a spot at a top premier university, where I focused on deep engineering knowledge.
              </p>
              <p>
                Now a curious graduate with expertise in game development, graphics programming, and frontend design, I am dedicated to building immersive, interactive experiences.
              </p>
            </div>
          </div>
        </Grid>

        {/* Right Column: Chronological Timeline */}
        <Grid item xs={12} md={7.5} lg={7.8}>
          <div className="timeline-wrapper">
            <div
              className="timeline-line"
              style={{ transform: anyExpanded ? `translateX(-${LINE_SHIFT}px)` : "none" }}
            />

            {EDUCATION_DATA.map((item, index) => {
              const isExpanded = expandedItems[index];

              // Items above the expanded card slide up, items below slide down,
              // so the scaled-up card has room and nothing overlaps.
              const shiftY =
                expandedIndex === -1 || index === expandedIndex
                  ? 0
                  : index < expandedIndex
                  ? -SHIFT
                  : SHIFT;

              return (
                <div
                  key={index}
                  className="timeline-item"
                  style={{ transform: `translateY(${shiftY}px)` }}
                >
                  {/* Timeline dot — moves left with the line when a card is expanded */}
                  <div
                    className={`timeline-dot ${item.dotClass}`}
                    style={{
                      transform: anyExpanded
                        ? `translateX(calc(-50% - ${LINE_SHIFT}px))`
                        : "translateX(-50%)",
                    }}
                  />

                  {/* Collapsible card */}
                  <div
                    className={`edu-card ${item.theme} ${isExpanded ? "expanded" : ""}`}
                    onClick={(e) => toggleExpand(index, e)}
                  >
                    <div className="edu-card-header">
                      <div className="edu-title-group">
                        <h2 className="edu-card-title">{item.title}</h2>
                        <div className="edu-institution">
                          <span className="inst-highlight">{item.institution}</span>
                          <span className="inst-sub"> · {item.location}</span>
                        </div>
                      </div>
                      <div className="edu-date-badge">{item.date}</div>
                    </div>

                    {/* Tag badges or stats highlight */}
                    {item.tag && <div className="edu-track-badge">{item.tag}</div>}
                    {item.highlight && <div className="edu-stats-highlight">{item.highlight}</div>}

                    {/* Collapsible detail content */}
                    {isExpanded && (
                      <div className="edu-details" onClick={(e) => e.stopPropagation()}>
                        <ul className="edu-bullets-list">
                          {item.explanations.map((explanation, bIndex) => {
                            // Strip leading bullet symbol if it exists in the original data string
                            const cleanText = explanation.startsWith("• ")
                              ? explanation.substring(2)
                              : explanation;

                            return (
                              <li key={bIndex} className="edu-bullet-item">
                                <BioText text={cleanText} />
                              </li>
                            );
                          })}
                        </ul>

                        {/* Media images inside card */}
                        {item.media && item.media.length > 0 && (
                          <div className="edu-media-grid">
                            {item.media.map((mediaItem, mIndex) => (
                              <div
                                key={mIndex}
                                className="edu-media-item"
                                onClick={(e) => {
                                                              e.stopPropagation();
                                                              setFullscreenImage(mediaItem.src);
                                                            }}
                              >
                                <img
                                  src={mediaItem.src}
                                  alt={`${item.title} diploma preview`}
                                  className="edu-media-img"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Collapse / Expand toggle button */}
                    <button
                      className="edu-toggle-btn"
                      onClick={(e) => toggleExpand(index, e)}
                    >
                      {isExpanded ? "↓ collapse" : "→ highlights"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>

      {/* Fullscreen Certificate/Diploma Viewer portal */}
      {fullscreenImage &&
        createPortal(
          <div
            className="edu-fullscreen-overlay"
            onClick={() => setFullscreenImage(null)}
          >
            <div
              className="edu-fullscreen-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullscreenImage}
                alt="Fullscreen Certificate"
                className="edu-fullscreen-img"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default EducationPage;
