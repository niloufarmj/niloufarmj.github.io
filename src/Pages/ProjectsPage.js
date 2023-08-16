import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function ProjectsPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(6);

  const projectDatas = [
    {
      title: "Museumore",
      onClick: () => setCurrentIndex(0),
      explanations: [
        "• Augmented Reality Web Application For Museums and Galleries",
        "• Designed and developed a clean and modern UI using React",
        "• Developed WebAR Using MindAR and ThreeJS libraries",
        "• A CRUD application exposed using a REST API made with Django",
        "• Employed Git version control to manage and track changes to the codebase.",
        "• Deployed and used in Shahid Beheshit Central Library Archive",
      ],
      github: "https://github.com/niloufarmj/museumore-ar-project",
    },
    {
      title: "Othello Game",
      onClick: () => setCurrentIndex(1),
      explanations: [
        "• An implementation of an AI player for the board game Othello",
        "• Implemented with Java and JavaFX",
        "• Using the minimax algorithm for AI player with alpha-beta pruning to search for the best move to make in each turn",
        "• Collaborated and maintained using GitHub as university AI course project",
      ],
      github: "https://github.com/niloufarmj/othello_AI",
    },
    {
      title: "Reddit Clone",
      onClick: () => setCurrentIndex(2),
      explanations: [
        "• Implemented a clone of Reddit using React and Express JS for a university Internet Engineering course project",
        "• Collaborated with a teammate via GitHub to develop and maintain the project",
        "• Created and integrated various features such as user authentication, post creation, and comment sections",
        "• Utilized RESTful API design principles for efficient and scalable communication between the client and server",
        "• Demonstrated proficiency in web development and teamwork skills",
      ],
      github: "https://github.com/niloufarmj/IE-Project-Reddit",
    },
    {
      title: "ChandKhaan",
      onClick: () => setCurrentIndex(3),
      explanations: [
        "• An Android card game reminiscent of TFT from League of Legends, as a member of the Rhino team",
        "• Engaged in teamwork with two other members using GitHub for version control, facilitating smooth collaboration.",
        "• Contributed to the development of a dynamic online multiplayer experience where players engage in card-based battles.",
        "• Designed the game architecture to enable continuous exchange of combat data between the client and the backend server.",
        "• Demonstrated expertise in Unity 3D by setting up game objects and ensuring smooth gameplay mechanics.",
        "• Played an integral role in preparing the game for release, anticipated within the next one to two months.",
        "• Managed a private repository for the project, ensuring version control and codebase management.",
      ],
    },
    {
      title: "Gmail Demo",
      onClick: () => setCurrentIndex(4),
      explanations: [
        "• Developed a Gmail-like client-server application for the Advanced Programming course at the university, using Java and JavaFX in the MVC architecture",
        "• Designed and implemented the application’s user interface using JavaFX Scene Builder and FXML",
        "• Implemented features such as sending and receiving emails and managing user accounts",
      ],
      github: "https://github.com/niloufarmj/gmail_demo",
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
    if (index < 6) return value;
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
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default ProjectsPage;
