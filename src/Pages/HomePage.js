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
      "I am a 23-year-old computer engineering graduate from Iran, specializing in game, AR, and front-end development. I have experience working with various web frameworks and I am committed to continuously updating and improving my skills.",
      "I am passionate about learning new things and always strive to do my best, demonstrating perseverance and determination in everything I do.",
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
