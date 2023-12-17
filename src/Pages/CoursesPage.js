import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

import flappy from "../Assets/Media/videos/FlappyBird.mp4"
import pong from "../Assets/Media/videos/Pong.mp4"
import match3 from "../Assets/Media/videos/Match3.mp4"

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
      githubs: [
        "https://github.com/niloufarmj/CS50_Pong",
        "https://github.com/niloufarmj/CS50_FlappyBird",
        "https://github.com/niloufarmj/CS50_Breakout",
        "https://github.com/niloufarmj/CS50_Match3",
        "https://github.com/niloufarmj/CS50_SuperMario"
      ],
      certificates: [
        "",
        "",
        "",
        "",
        ""
      ],
      videos:[
        pong,
        flappy,
        "",
        match3,
        ""
      ]
    },
    {
      title: "Game Design: Art and Concepts",
      onClick: () => setCurrentIndex(1),
      explanations: [
        "• Introduction to Game Design",
        "• Story and Narrative Development for Video Games",
        "• World Design for Video Games",
        "• Character Design for Video Games",
        "• Game Design Document: Define the Art & Concepts",
      ],
      certificates: [
        "https://coursera.org/share/14fd0a3a3db44a4ec9f35a3a3aee367f",
        "https://coursera.org/share/1127ab29b6759de68dac12ebc752276e",
        "https://coursera.org/share/48c529b80e91a6a0db911a422b3bf5f0",
        " ",
        "https://coursera.org/share/ebd6c65f7e839d2ef4a4389a0e6b5d98"
      ],
      githubs: [
        "",
        "",
        "",
        "",
        ""
      ],
      videos: [
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      onClick: () => setCurrentIndex(2),
      explanations: [
        "• Introduction to Front-End Development",
        "• Programming with JavaScript",
        "• Version Control",
        "• HTML and CSS in Depth",
        "• React Basics",
        "• Advanced React",
      ],
      certificates: [
        "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4",
        "https://coursera.org/share/e51a1003efbd0b7182aca531e7ebf6f0",
        "https://coursera.org/share/9953c74eaeb424f9a3d65622b611e193",
        "https://coursera.org/share/46ad3a2bc364ae1507ce7fd49a348c1c",
        "https://coursera.org/share/4292a69ffca4738dfebf707a3e76d14b",
        "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74"
      ],
      githubs: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      videos: [
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      title: "←",
      onClick: () => navigate("/"),
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
          <Menu align="left" title={""} items={coursesDatas} lg={5}/>
          <DataHolder
            title={coursesDatas[currentIndex].title}
            explanation={coursesDatas[currentIndex].explanations}
            githubs={coursesDatas[currentIndex].githubs}
            certificates={coursesDatas[currentIndex].certificates}
            videos={coursesDatas[currentIndex].videos}
            opener={true}
            lg={6}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default CoursesPage;
