import Header from "../Components/Header";
import HomePage from "./HomePage";
import Footer from "../Components/Footer";
import EducationPage from "./EducationPage";
import HobbiesPage from "./HobbiesPage";
import JobExperiencePage from "./JobExperiencePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage"
import PlayPage from "./PlayPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Assets/CSS/MainContainer.css";
import { Grid } from "@mui/material";

function MainContainer() {
  return (
    <>
    <Grid></Grid>
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/hobbies" element={<HobbiesPage />} />
                <Route path="/workexperience" element={<JobExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/play" element={<PlayPage />} />
              </Routes>
            </BrowserRouter>
            <Footer />

            <div className="svg">
              <svg
                width="300"
                height="300"
                data-name="corner-bottom-right"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  pointerEvents: "none",
                  float: "right",
                  marginTop: "-230px",
                }}
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
      </div>
    </>
  );
}

export default MainContainer;
