import Menu from "../Components/Menu";
import "../Assets/CSS/Home.css";
import { useNavigate } from "react-router-dom";
import myPhoto from "../Assets/Media/me.jpeg";
import DataHolder from "../Components/DataHolder";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();

  var menuData = {
    title: "Content Pages",
    items: [
      {
        onClick: () => navigate("education"),
        title: "Educational Background",
      },
      {
        onClick: () => navigate("/workexperience"),
        title: "Work Experience",
      },
      {
        onClick: () => navigate("/skills"),
        title: "Skills",
      },
      {
        onClick: () => navigate("/projects"),
        title: "Projects",
      },
      {
        onClick: () => navigate("/courses"),
        title: "Courses",
      },
      {
        onClick: () => navigate("/artwork"),
        title: "Art Works",
      },
    ],
  };

  var WelcomeData = {
    title: "Hi There! This is Niloufar.",
    photo: myPhoto,
    explanation: [
      "I'm a 23-year-old computer engineering graduate from Iran, deeply passionate about game development, art, and design. With a strong background in front-end development and a keen eye for aesthetics, I bring a unique blend of technical expertise and artistic flair to my creations. ",
      "I love crafting captivating games and immersive experiences that marry pixel-perfect visuals with engaging gameplay. My journey is driven by a commitment to continuous learning and exploring new frontiers in game development, AR, and digital art. ",
      "Let's embark on an exhilarating adventure together, where we can leverage my diverse skill set and unwavering passion to create magic through pixels, code, and boundless imagination.",
    ],
  };

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
      <div className="main">
        <ThemeProvider theme={theme}>
          <Grid container>
            <DataHolder
              title={WelcomeData.title}
              photo={WelcomeData.photo}
              explanation={WelcomeData.explanation}
            />
            <Grid item xs={1}></Grid>
            <Menu align="right" title={menuData.title} items={menuData.items} />
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default HomePage;
