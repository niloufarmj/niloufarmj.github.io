import "../Assets/CSS/Tools.css";
import { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function SkillsPage() {
  const [itemsDisplayIndex, setItemDisplayIndex] = useState(-1);
  const explainedTools = [
    "C++, C#, Java, Python, lua, JavaScript, Typescript, HTML, CSS",
    "React.js, Angular, Love2D, Flutter, JavaFX, Django, Node.js, .Net",
    "OpenGl, GLAD, RxJs, Bootstrap, Threejs, MindAR, MLAgent",
    "Unity Engine, Unreal Engine, Android Studio, Git, Linux",
    "Photoshop, Illustrator, Blender, Figma",
    "Persian(native), English(IELTS Academic 7.5), Deutch(A2)",
  ];

  const menuItemClicked = (index) => {
    setItemDisplayIndex(index)

    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    // Scroll to top when the currentIndex changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [itemsDisplayIndex]);

  const navigate = useNavigate();

  const menuData = {
    title: "Technical Skills",
    items: [
      {
        title: "Programming Languages",
        onClick: () => menuItemClicked(0),
      },
      {
        title: "Frameworks",
        onClick: () => menuItemClicked(1),
      },
      {
        title: "Libraries and Plugins",
        onClick: () => menuItemClicked(2),
      },
      {
        title: "Dev Tools",
        onClick: () => menuItemClicked(3),
      },
      {
        title: "Design Tools",
        onClick: () => menuItemClicked(4),
      },
      {
        title: "Speaking Languages",
        onClick: () => menuItemClicked(5),
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
      <ThemeProvider theme={theme} >
        <Grid container>
          <Menu align="left" title={menuData.title} items={menuData.items} />

          <Grid item xs={11} sm={11} md={6} lg={7} xl={4} custom={6}>
            <div className="tools">
              <span className={"menu-item tool-animation"}>
                {explainedTools[itemsDisplayIndex]}
              </span>

              <div
                className="body-intro"
                style={{ paddingRight: "10% !important" }}
              >
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  My programming journey began during my university years, where I delved into languages like C/C++,
                   Java, Python, and Lua. Courses like Data Structures and Algorithm Design fueled my passion
                    for programming and computer science. I applied these learnings to various projects and internships, 
                    starting as a frontend intern and mastering HTML, CSS, JavaScript, and jQuery.

                </p>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                As I transitioned into a fullstack developer, I honed my skills in Angular 
                and revamped C# code. Along the way, I discovered the exciting world of 
                game development, where I gained proficiency in C#, Unity, Lua, and Love2D.
                 I also explored Python and the Django framework.


                </p>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                To expand my knowledge, I turned to online platforms like Udemy and Coursera, 
                where I acquired skills in Angular, React, Flutter, and more. 
                Additionally, I've dabbled in digital art tools like 3ds Max, Blender, and Illustrator 
                for modeling and design.
                Throughout my journey, I've embraced version control using Git, 
                allowing for efficient collaboration and code management.
                </p>

                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                I'm excited to continue growing in these areas and explore new possibilities in the ever-evolving world of technology.
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
