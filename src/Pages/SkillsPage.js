import "../Assets/CSS/Tools.css";
import { useState } from "react";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function SkillsPage() {
  const [itemsDisplayIndex, setItemDisplayIndex] = useState(-1);
  const explainedTools = [
    "C++, C#, Java, Python, JavaScript, Typescript, Flutter, HTML, CSS",
    "React.js, Angular, Flutter, JavaFX, Django, Node.js, .Net",
    "RxJs, Bootstrap, Webpack, Threejs, MindAR, NavMesh, MLAgent",
    "Unity Engine, Unreal Engine, Android Studio, Git, Linux",
    "Persian(native), English",
  ];

  const navigate = useNavigate();

  const menuData = {
    title: "Technical Skills",
    items: [
      {
        title: "Programming Languages",
        onClick: () => setItemDisplayIndex(0),
      },
      {
        title: "Frameworks",
        onClick: () => setItemDisplayIndex(1),
      },
      {
        title: "Libraries and Plugins",
        onClick: () => setItemDisplayIndex(2),
      },
      {
        title: "Dev Tools",
        onClick: () => setItemDisplayIndex(3),
      },
      {
        title: "Speaking Languages",
        onClick: () => setItemDisplayIndex(4),
      },
      {
        title: "←",
        onClick: () => navigate("/"),
      },
    ],
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1920,
        custom: 1000, // Custom breakpoint at 1000px
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Menu align="left" title={menuData.title} items={menuData.items} />

          <Grid item xs={7}>
            <div className="tools">
              <span className={"menu-item tool-animation"}>
                {explainedTools[itemsDisplayIndex]}
              </span>

              <div
                className="body-intro"
                style={{ paddingRight: "10% !important" }}
              >
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  My programming journey ignited during my university's
                  inaugural year, starting with C/C++ and progressing to
                  advanced Java concepts. Through pivotal courses like Data
                  Structures, Algorithm Design, and more, I gained insights into
                  the realm of programming and computer science. These learnings
                  materialized in various projects and internships. Beginning as
                  a frontend intern, I mastered HTML, CSS, JavaScript, and
                  jQuery. Transitioning into a fullstack developer, I honed
                  Angular and revamped C# code. This journey led me to delve
                  into game development, where I gained proficiency in C# and
                  Unity engine. Beyond academia, I delved into online platforms
                  like Udemy and Coursera, acquiring skills in Angular, React,
                  Flutter, and more. My journey, paralleling the evolution of
                  programming languages, has been marked by milestones that
                  shaped my expertise.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default SkillsPage;
