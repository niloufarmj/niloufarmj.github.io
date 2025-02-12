import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState, useEffect } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

import pawQuants from "../Assets/Media/Works/PawQuants.jpeg"
import qilin from "../Assets/Media/Works/Qilin.jpeg"
import qpong from "../Assets/Media/Works/QPong.jpeg"

import chandkhaan1 from "../Assets/Media/Works/chandkhaan1.jpg"
import chandkhaan2 from "../Assets/Media/Works/chandkhaan2.jpg"
import chandkhaan3 from "../Assets/Media/Works/chandkhaan3.jpg"
import chandkhaan4 from "../Assets/Media/Works/chandkhaan4.jpg"

// import ropart1 from "../Assets/Media/videos/Ropart1.mp4"
// import ropart2 from "../Assets/Media/videos/Ropart2.mp4"
import ropart3 from "../Assets/Media/videos/Ropart3.mp4"
import under from "../Assets/Media/videos/UnderGround.mp4"
import mapna1 from "../Assets/Media/Works/mapna1.jpg"
import mapna2 from "../Assets/Media/Works/mapna2.jpg"

import mart1 from "../Assets/Media/Works/mart1.jpg"
import mart2 from "../Assets/Media/Works/mart2.jpg"
import mart3 from "../Assets/Media/Works/mart3.jpg"
import morning from "../Assets/Media/Works/morning.jpg"
import cal from "../Assets/Media/Works/calculator.jpg"
import yalda from "../Assets/Media/Works/yalda.jpeg"

function JobExperiencePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [about, setAbout] = useState(true)

  const menuItemClicked = (index) => {
    setCurrentIndex(index)
    setAbout(true)

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

  const experienceDatas = [
    {
      title: "Game Developer",
      onClick: () => menuItemClicked(0),
      explanations: [
        "• Psiket Academy, Sharif University, Tehran, Iran, May 2024 – Sep 2024",
        "• Created various Quantum Games including QPong, Qilin, PawQuants",
        "• Implemented Quantum rules in educational games",
        "• Utilized Unity’s platform to design and enhance the user experience.",
        "• Worked on Projects as Indie Game Maker, with no other teammates"
      ],
      hasMedia: true,
      media: [
        {
          type: 'image',
          src: pawQuants,
          href: "https://pawQuants.psiket.com"
        },
        {
          type: 'image',
          src: qpong,
          href: "https://qpong.psiket.com"
        },
        {
          type: 'image',
          src: qilin,
          href: "https://qilin.psiket.com"
        }
      ]
    },
    {
      title: "Unity Developer",
      onClick: () => menuItemClicked(1),
      explanations: [
        "• Studio Rhino, Velenjak, Tehran, Iran, May 2023 – August 2023",
        "• Involved in the creation of 'Chandkhaan', an Android game inspired by 'Teamfight Tactics' from 'League of Legends.'",
        "• Implemented key features including the main menu, animations, combat mechanics, rounds, and tower customization.",
        "• Utilized Unity’s real-time 3D platform to design and enhance the user experience.",
        "• Collaborated with team members through GitHub and ClickUp for efficient project management.",
        "• Employed SignalRConnection for seamless communication between the client and server of 'Chandkhaan' to build multiplayer."
      ],
      hasMedia: true,
      media: [
        {
          type: 'image',
          src: chandkhaan1
        },
        {
          type: 'image',
          src: chandkhaan2
        },
        {
          type: 'image',
          src: chandkhaan3
        },
        {
          type: 'image',
          src: chandkhaan4
        },
      ]
    },
    {
      title: "Game Development and Design Internship",
      onClick: () => menuItemClicked(2),
      explanations: [
        "• Concealland Studio, Velenjak, Tehran, Iran, July 2022 – Nov 2022",
        "• Learning to design 3D models with 3Ds Max and Blender",
        "• Working with Unity engine and developing games in C#",
        "• Collaborating with teammates using GitLab",
      ],
      hasMedia: true,
      media: [
        // {
        //   type: 'video',
        //   src: ropart1
        // },
        // {
        //   type: 'video',
        //   src: ropart2
        // },
        {
          type: 'video',
          src: ropart3
        },
        {
          type: 'video',
          src: under
        },
        {
          type: 'image',
          src: mapna1
        },
        {
          type: 'image',
          src: mapna2
        },
      ]
    },
    {
      title: "Full-Stack Development",
      onClick: () => menuItemClicked(3),
      explanations: [
        "• System Group, Vanak, Tehran, Iran, Aug 2021 - Jun 2022",
        "• Building Front-end of Fanoos using Angular and RxJs",
        "• Refactoring Back-end of Rahkaran to communicate with front-end using C# .Net",
        "• Planning and collaborating with teammates using Scrum and Skype for Business",
        "• Experience with Azure Devops",
      ],
      hasMedia: false
    },
    {
      title: "Front-end Development Internship",
      onClick: () => menuItemClicked(4),
      explanations: [
        "• Walvira Enghelab, Tehran, Iran, Jan 2020 – Oct 2020",
        "• Interned for 4 months, demonstrating exceptional performance, and subsequently promoted to a part-time role, where I contributed for an additional 6 months",
        "• Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript and jQuery",
        "• Worked with REST APIs to retrieve and display data from databases",
      ],
      hasMedia: true,
      media: [
        {
          type: 'image',
          src: mart1
        },
        {
          type: 'image',
          src: mart2
        },
        {
          type: 'image',
          src: mart3
        },
        {
          type: 'image',
          src: morning
        },
        {
          type: 'image',
          src: cal
        },
        {
          type: 'image',
          src: yalda
        }
      ]
    },
    {
      title: "Teacher Assistance and Mentorship",
      onClick: () => menuItemClicked(5),
      explanations: [
        "• Basic Programming – in charge of challenges and homeworks – Dr. Sadeq Ali-akbari",
        "• Advanced Programming – in charge of homeworks and teaching project fundamentals (MVC arch + javafx) – Dr. Sadeq Ali-Akbari",
        "• Advanced Programming – in charge of challenges and homeworks and final project – Dr. Maede Mosharraf",
        "• Signals and Systems – in charge of paper homeworks and teaching matlab fundamentals – Dr. Salimi",
      ],
      hasMedia: false
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
          <Menu align="left" title={"Experiences"} items={experienceDatas} />
          <DataHolder
            title={experienceDatas[currentIndex].title}
            photo={experienceDatas[currentIndex].photo}
            explanation={experienceDatas[currentIndex].explanations}
            github={experienceDatas[currentIndex].github}
            hasMedia={experienceDatas[currentIndex].hasMedia}
            about={about}
            media={experienceDatas[currentIndex].media}
            mediaClicked={() => setAbout(false)}
            aboutClicked={() => setAbout(true)}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default JobExperiencePage;
