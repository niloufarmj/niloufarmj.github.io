import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import Gallary from "../Components/Gallary";
import { useState, useEffect } from "react";

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

import fox from "../Assets/Media/3D/Fox.mp4"
import house from "../Assets/Media/3D/House.mp4"


function ArtWorksPage() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const gallaryData = [
    {
      title: "Acrylic Paintings",
      onClick: () => menuItemClicked(0),
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
      onClick: () => menuItemClicked(1),
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
      onClick: () => menuItemClicked(2),
      items: [
        oil1,
        oil2,
        oil3,
        oil4,
        oil5
      ]
    },
    {
      title: "3D Models",
      onClick: () => menuItemClicked(3),
      videos: [
        fox,
        house
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
          <Menu align="left" title={"Art Works"} items={gallaryData} />
          <Gallary
            title={gallaryData[currentIndex].title}
            items={gallaryData[currentIndex].items}
            link={gallaryData[currentIndex].link}
            videos={gallaryData[currentIndex].videos}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default ArtWorksPage;
