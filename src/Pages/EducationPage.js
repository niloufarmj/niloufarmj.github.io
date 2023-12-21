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
        "From my early years in elementary school, I exhibited a diligent and persevering nature. Throughout my academic journey, I consistently achieved top grades, maintaining an A in all subjects up to high school. My pursuit of excellence continued as I delved into the realms of mathematics and physics during my diploma studies, consistently ranking first in class.",
        "My dedication was particularly evident when preparing for the university entrance exam. Amidst fierce competition, I secured a commendable position, ranking 700th out of 150,000 candidates, allowing me to gain admission to one of Iran's premier universities. While in university, my focus shifted from mere grades to a genuine thirst for knowledge and exploration. I was driven by a passion to learn and engage in novel experiences.",
        "As a testament to my commitment, I successfully graduated last year. My journey has been marked by a transition from a studious child to a university graduate driven by intellectual curiosity and a desire to embrace new challenges and opportunities.",
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
