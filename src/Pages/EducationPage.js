import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState, useEffect } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

import uniEng from "../Assets/Media/Diplomas/uni - diploma.jpeg"
import uniFa from "../Assets/Media/Diplomas/دانشگاه - مدرک.jpg"
import schoolEng from "../Assets/Media/Diplomas/school - diploma.jpeg"
import schoolFa from "../Assets/Media/Diplomas/متوسطه - مدرک.jpg"
import ili from "../Assets/Media/Diplomas/ili.jpeg"

function EducationPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(5);
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

  const projectDatas = [
    {
      title: "Master of Science in Interactive Media",
      onClick: () => menuItemClicked(0),
      explanations: [
        "• FH Univeristy of Upper Austria, Hagenburg Campus, Upper Austria, Austria",
        "• Oct 2024 – Present",
        "• Specialized in Game Development Track",
        
      ],
      hasMedia: true,
      media: [
        {
          type: "image",
          src: uniEng
        },
        {
          type: "image",
          src: uniFa
        }
      ]
    },
    {
      title: "Bachelor in Computer Science",
      onClick: () => menuItemClicked(1),
      explanations: [
        "• Shahid Beheshti University, Velenjak, Tehran, Iran",
        "• Jan 2018 – Dec 2023",
        "• University ranking #5 in Iran and #1042 in the world",
        "• Main Courses: Basic and Advanced Programming, Discrete Mathematics, Algorithms, Data Structure, Operating System, Database, Artifical Intelligence, Signals and Systems, Computer Vision, Internet Engineering",
        "• GPA: 2.94 out of 4",
      ],
      hasMedia: true,
      media: [
        {
          type: "image",
          src: uniEng
        },
        {
          type: "image",
          src: uniFa
        }
      ]
    },
    {
      title: "Diploma of Mathematics and Physics",
      onClick: () => menuItemClicked(2),
      explanations: [
        "• Abou-Ali Sina Highschool, Sattarkhan, Tehran, Iran",
        "• Jan 2016 – Dec 2018",
        "• GPA: 4 out of 4",
      ],
      hasMedia: true,
      media: [
        {
          type: "image",
          src: schoolEng
        },
        {
          type: "image",
          src: schoolFa
        }
      ]
    },
    {
      title: "Completion of English Advanced Level ",
      onClick: () => menuItemClicked(3),
      explanations: [
        "• Iran Language Institute, Ekbatan, Tehran, Iran",
        "• Jan 2012 – Sep 2016",
        "• overall average rating: outstanding (91 - 100)",
        "• the levels are in accordance with the CFER",
      ],
      hasMedia: true,
      media: [
        {
          type: "image",
          src: ili
        }
      ]
    },
    {
      title: "←",
      onClick: () => navigate("/"),
    },
    {
      title: "Click Each Item to See More!",
      explanations: [
        "Since my early years in elementary school, I've been dedicated and hardworking. I consistently achieved top grades, maintaining an A throughout high school. During my diploma studies, I developed a strong passion for mathematics and physics, ranking first in class.",
        "To secure a place at one of Iran's premier universities, I faced tough competition and ranked 700th out of 150,000 candidates in the entrance exam. In university, I shifted my focus from grades to a genuine desire for knowledge and new experiences.",
        "Last year, I successfully graduated, marking an important milestone. I've transformed from a diligent student to a curious graduate ready to embrace new challenges. With expertise in game development, art, and front-end design, I'm excited to create captivating experiences that engage and inspire others.",
      ],
    },
  ];

  const menuData = projectDatas.map((value, index) => {
    if (index < 5) return value;
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
        <Grid container spacing={2}>
          <Menu
            align="left"
            title={"Educational Background"}
            items={menuData}
          />
          <DataHolder
            title={projectDatas[currentIndex].title}
            photo={projectDatas[currentIndex].photo}
            explanation={projectDatas[currentIndex].explanations}
            github={projectDatas[currentIndex].github}
            link={projectDatas[currentIndex].links}
            hasMedia={projectDatas[currentIndex].hasMedia}
            about={about}
            media={projectDatas[currentIndex].media}
            mediaClicked={() => setAbout(false)}
            aboutClicked={() => setAbout(true)}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default EducationPage;
