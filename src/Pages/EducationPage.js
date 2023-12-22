import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function EducationPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(4);

  const projectDatas = [
    {
      title: "Bachelor in Computer Science",
      onClick: () => setCurrentIndex(0),
      explanations: [
        "• Shahid Beheshti University, Velenjak, Tehran, Iran",
        "• Jan 2018 – Dec 2023",
        "• University ranking #5 in Iran and #1042 in the world",
        "• Main Courses: Basic and Advanced Programming, Discrete Mathematics, Algorithms, Data Structure, Operating System, Database, Artifical Intelligence, Signals and Systems, Computer Vision, Internet Engineering",
        "• GPA: 2.94 out of 4",
      ],
    },
    {
      title: "Diploma of Mathematics and Physics",
      onClick: () => setCurrentIndex(1),
      explanations: [
        "• Abou-Ali Sina Highschool, Sattarkhan, Tehran, Iran",
        "• Jan 2016 – Dec 2018",
        "• GPA: 4 out of 4",
      ],
    },
    {
      title: "Completion of English Advanced Level ",
      onClick: () => setCurrentIndex(2),
      explanations: [
        "• Iran Language Institute, Ekbatan, Tehran, Iran",
        "• Jan 2012 – Sep 2016",
        "• overall average rating: outstanding (91 - 100)",
        "• the levels are in accordance with the CFER",
      ],
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
    if (index < 4) return value;
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
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default EducationPage;
