import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function CoursesPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const coursesDatas = [
    {
      title: "HarvardX: CS50's Introduction to Game Development",
      onClick: () => setCurrentIndex(0),
      explanations: [
        "• Pong",
        "• Flappy Bird",
        "• Breakout",
        "• Match 3",
        "• Super Mario Bros",
      ],
      links: [
        "https://github.com/niloufarmj/CS50_Pong",
        "https://github.com/niloufarmj/CS50_FlappyBird",
        "https://github.com/niloufarmj/CS50_Breakout",
        "https://github.com/niloufarmj/CS50_Match3",
        "https://github.com/niloufarmj/CS50_SuperMario"
      ],
    },

    {
      title: "Click Each Item to See More!",
      explanations: [
        "From my early years in elementary school, I exhibited a diligent and persevering nature. Throughout my academic journey, I consistently achieved top grades, maintaining an A in all subjects up to high school. My pursuit of excellence continued as I delved into the realms of mathematics and physics during my diploma studies, consistently ranking first in class.",
        "My dedication was particularly evident when preparing for the university entrance exam. Amidst fierce competition, I secured a commendable position, ranking 700th out of 150,000 candidates, allowing me to gain admission to one of Iran's premier universities. While in university, my focus shifted from mere grades to a genuine thirst for knowledge and exploration. I was driven by a passion to learn and engage in novel experiences.",
        "As a testament to my commitment, I successfully graduated last year. My journey has been marked by a transition from a studious child to a university graduate driven by intellectual curiosity and a desire to embrace new challenges and opportunities.",
      ],
    },
  ];

  

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
          <Menu align="left" title={""} items={coursesDatas} />
          <DataHolder
            title={coursesDatas[currentIndex].title}
            photo={coursesDatas[currentIndex].photo}
            explanation={coursesDatas[currentIndex].explanations}
            github={coursesDatas[currentIndex].github}
            link={coursesDatas[currentIndex].links}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default CoursesPage;
