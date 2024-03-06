import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState, useEffect } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

import flappy from "../Assets/Media/videos/FlappyBird.mp4"
import pong from "../Assets/Media/videos/Pong.mp4"
import match3 from "../Assets/Media/videos/Match3.mp4"
import breakout from "../Assets/Media/videos/Breakout.mp4"
import mario from "../Assets/Media/videos/SuperMario.mp4"

function CoursesPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const menuItemClicked = (index) => {
    setCurrentIndex(index)

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
  }, [currentIndex]);

  const coursesDatas = [
    {
      title: "HarvardX: CS50's Introduction to Game Development",
      onClick: () => menuItemClicked(0),
      explanations: [
        "• Pong",
        "• Flappy Bird",
        "• Breakout",
        "• Match 3",
        "• Super Mario Bros"
      ],
      githubs: [
        "https://github.com/niloufarmj/CS50_Pong",
        "https://github.com/niloufarmj/CS50_FlappyBird",
        "https://github.com/niloufarmj/CS50_Breakout",
        "https://github.com/niloufarmj/CS50_Match3",
        "https://github.com/niloufarmj/CS50_SuperMario"
      ],
      
      videos:[
        pong,
        flappy,
        breakout,
        match3,
        mario
      ]
    },
    {
      title: "Game Design: Art and Concepts",
      onClick: () => menuItemClicked(1),
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
        "https://coursera.org/share/ef2bff53be68709f8dbe8131f79f1fa5",
        "https://coursera.org/share/ebd6c65f7e839d2ef4a4389a0e6b5d98"
      ],
      certificate: "https://coursera.org/share/58b67f7d0fa9576c918de3709723a081"
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
        "https://coursera.org/share/ec8dc2ea28111ffbc6cbce499cdeedde",
        "https://coursera.org/share/eaf5bd5c8546f6e124d09582de0ebbdf",
        "https://coursera.org/share/2a160d25ed35abde29bd8eaa17ebccb6",
        "https://coursera.org/share/d10e9debe2d1a7d58943436de0e4e0bb",
        "https://coursera.org/share/8ccefea9e5d14c9a0fc054a30d8c8ce1",
        "https://coursera.org/share/b519f6e7bd0d76fa153549e87fb29618"
      ]
    },
    {
      title: "Other Courses",
      onClick: () => menuItemClicked(3),
      explanations: [
        "• Serious Gaming by Erasmus University Rotterdam",
        "• Introduction to Augmented Reality and ARCore by Daydream",
        "• Foundations of User Experience (UX) Design by Google",
      ],
      certificates: [
        "https://coursera.org/share/ce97886aec9bebeae7e332fa50392918",
        "https://coursera.org/share/b1e58ce6823c83cd118f2447d13ecc18",
        "https://coursera.org/share/5dc0acb0315be5f8247ec9ea19407c11"
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
            certificate={coursesDatas[currentIndex].certificate}
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
