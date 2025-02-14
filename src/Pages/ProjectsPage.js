import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState, useEffect } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

import cars from "../Assets/Media/videos/Cars.mp4"
import diceKid from "../Assets/Media/videos/DiceKid.mp4"
import clock from "../Assets/Media/videos/DigitalClock.mp4"
import roll from "../Assets/Media/videos/RollaBall.mp4"
import boost from "../Assets/Media/videos/ProjectBoost.mp4"
import angry from "../Assets/Media/videos/AngryBirds.mp4"


import temperature from "../Assets/Media/videos/Temperature.mp4"
import alice from "../Assets/Media/videos/Alice.mp4"
import sakura from "../Assets/Media/videos/Sakura.mp4"
import museumore from "../Assets/Media/videos/Museumore.mp4"
import othello from "../Assets/Media/videos/Othello.mp4"
import othello_AI from "../Assets/Media/videos/Othello-AI.mp4"
import jetpack from "../Assets/Media/videos/Jetpack.mp4"
import twoCars from "../Assets/Media/videos/2cars.mp4"
import bug0 from "../Assets/Media/videos/Bug0.mp4"
import bug1 from "../Assets/Media/videos/Bug1.mp4"
import bug2 from "../Assets/Media/videos/Bug2.mp4"

import cp from "../Assets/Media/Works/communitypage.png"
import hp from "../Assets/Media/Works/homepage.png"
import login from "../Assets/Media/Works/login.png"
import up from "../Assets/Media/Works/userprofile.png"


function ProjectsPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(12);
  const [about, setAbout] = useState(true)

  const menuItemClicked = (index) => {
    setCurrentIndex(index)
    setAbout(true)

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

  const projectDatas = [
    {
      title: "Changing Localized Body Temperature and Thermal Perception in Virtual Reality",
      onClick: () => menuItemClicked(0),
      explanations: [
        "• Developed a VR environment using Unity and Meta Quest devices for realistic hand tracking.",
        "• Simulated thermal perception with a stylized virtual heater model, manipulating material emission properties to create a sense of warmth.",
        "• Designed an experimental setup with three phases: left heater off/right heater on, left heater on/right heater off, both heaters off. ",
        "• Collected data on hand positions, skin temperature, and survey responses using PicoLog software and custom software solutions. ",
        "• Implemented a user-friendly UI for surveys and guidance, focusing on user comfort and immersion. ",
        "• Pending real participant testing and data analysis to explore individual differences in thermal perception and broader VR applications."
      ],
      github: "https://github.com/niloufarmj/temperature-vr-effect",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: temperature
        }
      ],
      
    },
    {
      title: "Shattered Wonderland",
      onClick: () => menuItemClicked(1),
      explanations: [
        "• Developed a game inspired by \"Alice in Wonderland\" with two levels: a platformer and a horror maze, using Unreal Engine, C++, and Unreal's Blueprint",
        "• Collaborated with a team of 7, utilizing Git for version control, and created design document",
        "• Designed Level 1, implementing features like save/load game, collectables, platforms, and special platforms, and rigged and animated Alice's character",
        "• Designed and implemented HUD and UI/UX"
      ],
      github: "https://github.com/GameDevProject1/Game-Dev-Project",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: alice
        }
      ],
      
    },
    {
      title: "Interactive Sakura Tree",
      onClick: () => menuItemClicked(2),
      explanations: [
        "• Developed 2D scene using OpenGL, GLFW, and GLAD for rendering and window management. ",
        "• Created a sakura tree with falling blooms using custom shaders and 2D transformations.",
        "• Implemented interactive features where hovering the mouse over blooms causes them to rotate. ",
        "• Utilized GLM for matrix transformations and STB Image for loading textures.",
        "• Managed bloom animations with random number generation for natural falling effects."
      ],
      github: "https://github.com/niloufarmj/FH-OpenGL-HWs/tree/main/src/HW2",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: sakura
        }
      ],
      
    },
    {
      title: "Museumore",
      onClick: () => menuItemClicked(3),
      explanations: [
        "• Augmented Reality Web Application For Museums and Galleries",
        "• Designed and developed a clean and modern UI using React",
        "• Developed WebAR Using MindAR and ThreeJS libraries",
        "• A CRUD application exposed using a REST API made with Django",
        "• Employed Git version control to manage and track changes to the codebase.",
        "• Deployed and used in Shahid Beheshit Central Library Archive",
      ],
      github: "https://github.com/niloufarmj/museumore-ar-project",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: museumore
        }
      ],
      
    },
    {
      title: "Othello Game",
      onClick: () => menuItemClicked(4),
      explanations: [
        "• An implementation of an AI player for the board game Othello",
        "• Implemented with Java and JavaFX",
        "• Using the minimax algorithm for AI player with alpha-beta pruning to search for the best move to make in each turn",
        "• Collaborated and maintained using GitHub as university AI course project",
      ],
      github: "https://github.com/niloufarmj/othello_AI",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: othello
        },
        {
          type: 'video', 
          src: othello_AI
        }
      ]
    },
    {
      title: "Reddit Clone",
      onClick: () => menuItemClicked(5),
      explanations: [
        "• Implemented a clone of Reddit using React and Express JS for a university Internet Engineering course project",
        "• Collaborated with a teammate via GitHub to develop and maintain the project",
        "• Created and integrated various features such as user authentication, post creation, and comment sections",
        "• Utilized RESTful API design principles for efficient and scalable communication between the client and server",
        "• Demonstrated proficiency in web development and teamwork skills",
      ],
      github: "https://github.com/niloufarmj/IE-Project-Reddit",
      hasMedia: true,
      media: [
        {
          type: 'image', 
          src: login
        },
        {
          type: 'image', 
          src: hp
        },
        {
          type: 'image', 
          src: cp
        },
        {
          type: 'image', 
          src: up
        },
      ]
    },
    {
      title: "Wall Fallower Omni Bot",
      onClick: () => menuItemClicked(6),
      explanations: [
        "• Omni directional robot proto with a simple wall following controller",
        "• Utilized three main algorithms: bug 0, bug 1 and bug 2",
        "• Implemented with Python and simulated in Webots and tested with Matlab",
      ],
      github: "https://github.com/niloufarmj/SBU-Robotics",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: bug0
        },
        {
          type: 'video', 
          src: bug2
        },
        {
          type: 'video', 
          src: bug1
        }
      ]
    },
    {
      title: "Gmail Demo",
      onClick: () => menuItemClicked(7),
      explanations: [
        "• Developed a Gmail-like client-server application for the Advanced Programming course at the university, using Java and JavaFX in the MVC architecture",
        "• Designed and implemented the application’s user interface using JavaFX Scene Builder and FXML",
        "• Implemented features such as sending and receiving emails and managing user accounts",
      ],
      github: "https://github.com/niloufarmj/gmail_demo",
      hasMedia: false
    },
    {
      title: "Jetpack Joyride",
      onClick: () => menuItemClicked(8),
      explanations: [
        "• Created a clone of Jetpack Joyride game as university basic programming project using C++ and SBLD (refined version of SDL)",
        "• Implemented dynamic gameplay mechanics, allowing players to control a character equipped with a jetpack",
        "• Designed captivating visuals and user-friendly interfaces using SBDL and asset libraries",
        "• Incorporated various game elements, including obstacles and power-ups",
        "• Showcased programming skills by implementing features like random obstacle generation, collision detection, and game state management"
      ],
      github: "https://github.com/niloufarmj/SBU-BP-JetpackJoyride/",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: jetpack
        }
      ]
    },
    {
      title: "Two Cars",
      onClick: () => menuItemClicked(9),
      explanations: [
        "• Developed a clone of'Two Cars' game using C++ and the SBDL library as basic programming mini project",
        "• Implemented gameplay mechanics where players control two cars simultaneously to avoid obstacles",
        "• Incorporated challenging gameplay elements, such as increasing speed and randomly generated obstacles, to keep players engaged",
        "• Demonstrated programming skills by implementing features like car movement, collision detection, and score tracking",
        "• Provided multiple game states, including a home page, game over screen, and pause functionality, to enhance the overall player experience",
      ],
      github: "https://github.com/niloufarmj/SBU-BP-Two-Cars",
      hasMedia: true,
      media: [
        {
          type: 'video', 
          src: twoCars
        }
      ]
    },
    {
      title: "Hobby Projects",
      onClick: () => menuItemClicked(10),
      explanations: [
        "• Dice Kid",
        "• Roll a Ball",
        "• Project Boost",
        "• Car Game",
        "• Angry Birds",
        "• Digital Clock"
      ],
      videos:[
        diceKid, 
        roll,
        boost,
        cars,
        angry,
        clock,
      ],
      github: "https://github.com/niloufarmj/Hobby-Projects",
      hasMedia: false
    },
    {
      title: "←",
      onClick: () => navigate("/"),
    },
    {
      title: "Click Each Item to See More!",
      explanations: [
        "Over the course of my programming journey, I've undertaken a multitude of projects, encompassing both complete endeavors and smaller tasks like mini-projects and programming assignments. These ventures have served multiple purposes, ranging from acquiring new skills to enhancing efficiency and proficiency in various areas. I've also contributed to projects during my tenure at different workplaces.",
        "The majority of my work has centered around learning and personal growth, rendering them less suitable for public sharing due to their educational nature. Similarly, projects executed within professional environments are typically proprietary, secure, and non-disclosable, thereby impeding me from providing them here.",
        "Notably, my educational journey has been profoundly enriched by these projects. Around 90 percent of my learning experience can be attributed to the hands-on involvement in the wide array of projects I've described.",
      ],
    },
  ];

  const menuData = projectDatas.map((value, index) => {
    if (index < 12) return value;
    else return undefined;
  });

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
          <Menu align="left" title={"projects"} items={menuData} />
          <DataHolder
            title={projectDatas[currentIndex].title}
            photo={projectDatas[currentIndex].photo}
            explanation={projectDatas[currentIndex].explanations}
            github={projectDatas[currentIndex].github}
            videos={projectDatas[currentIndex].videos}
            opener={ currentIndex === 10 }
            hasMedia={projectDatas[currentIndex].hasMedia}
            media={projectDatas[currentIndex].media} 
            about={about}
            mediaClicked={() => setAbout(false)}
            aboutClicked={() => setAbout(true)}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default ProjectsPage;
