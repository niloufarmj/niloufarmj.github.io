import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import Gallary from "../Components/Gallary";
import { useState } from "react";

import acrylic1 from "../Assets/Media/Acrylic/1.jpeg"
import acrylic2 from "../Assets/Media/Acrylic/2.jpeg"
import acrylic3 from "../Assets/Media/Acrylic/3.jpeg"
import acrylic4 from "../Assets/Media/Acrylic/4.jpeg"
import acrylic5 from "../Assets/Media/Acrylic/5.jpeg"
import acrylic6 from "../Assets/Media/Acrylic/6.jpeg"
import acrylic7 from "../Assets/Media/Acrylic/7.jpeg"
import acrylic8 from "../Assets/Media/Acrylic/8.jpeg"

import rapid1 from "../Assets/Media/Rapid/1.jpg"
import rapid2 from "../Assets/Media/Rapid/2.jpg"
import rapid3 from "../Assets/Media/Rapid/3.jpg"
import rapid4 from "../Assets/Media/Rapid/4.jpg"
import rapid5 from "../Assets/Media/Rapid/5.jpg"
import rapid6 from "../Assets/Media/Rapid/6.jpg"
import rapid7 from "../Assets/Media/Rapid/7.jpg"
import rapid8 from "../Assets/Media/Rapid/8.jpg"

import oil1 from "../Assets/Media/Oil/1.jpg"
import oil2 from "../Assets/Media/Oil/2.jpg"
import oil3 from "../Assets/Media/Oil/3.jpg"
import oil4 from "../Assets/Media/Oil/4.jpg"
import oil5 from "../Assets/Media/Oil/5.jpg"


function ArtWorksPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallaryData = [
    {
      title: "Acrylic Paintings",
      onClick: () => setCurrentIndex(0),
      items: [
        acrylic1,
        acrylic2,
        acrylic3,
        acrylic4,
        acrylic5,
        acrylic6,
        acrylic7,
        acrylic8
      ],
      link: "https://www.pinterest.co.uk/niliparr/my-acrylic-paintings/"
    },
    {
      title: "Rapid Pen Drawings",
      onClick: () => setCurrentIndex(1),
      items: [
        rapid1,
        rapid2,
        rapid3,
        rapid4,
        rapid5,
        rapid6,
        rapid7,
        rapid8
      ],
      link: "https://www.pinterest.co.uk/niliparr/my-rapid-pen-drawings/"
    },
    {
      title: "Oil Color Paintings",
      onClick: () => setCurrentIndex(2),
      items: [
        oil1,
        oil2,
        oil3,
        oil4,
        oil5
      ],
    },
    {
      title: "3D Models",
      onClick: () => setCurrentIndex(3),
      items: [
        "• Walvira Enghelab, Tehran, Iran, Aug 2019 – Oct 2020",
        "• Interned for 6 months, demonstrating exceptional performance, and subsequently promoted to a part-time role, where I contributed for an additional 6 months",
        "• Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript and jQuery",
        "• Worked with REST APIs to retrieve and display data from databases",
      ],
    },
    {
      title: "2D illustrations",
      onClick: () => setCurrentIndex(4),
      items: [
        "• Basic Programming – in charge of challenges and homeworks – Dr. Sadeq Ali-akbari",
        "• Advanced Programming – in charge of homeworks and teaching project fundamentals (MVC arch + javafx) – Dr. Sadeq Ali-Akbari",
        "• Advanced Programming – in charge of challenges and homeworks and final project – Dr. Maede Mosharraf",
        "• Signals and Systems – in charge of paper homeworks and teaching matlab fundamentals – Dr. Salimi",
      ],
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
          <Menu align="left" title={"Art Works"} items={gallaryData} />
          <Gallary
            title={gallaryData[currentIndex].title}
            items={gallaryData[currentIndex].items}
            link={gallaryData[currentIndex].link}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default ArtWorksPage;
