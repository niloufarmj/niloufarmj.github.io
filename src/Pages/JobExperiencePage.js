import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";

function JobExperiencePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectDatas = [
    {
      title: "Unity Developer",
      onClick: () => setCurrentIndex(0),
      explanations: [
        "• Studio Rhino, Velenjak, Tehran, Iran, April 2023 – OnGoing",
        "• Involved in the creation of 'Chandkhaan', an Android game inspired by 'Teamfight Tactics' from 'League of Legends.'",
        "• Implemented key features including the main menu, animations, combat mechanics, rounds, and tower customization.",
        "• Utilized Unity’s real-time 3D platform to design and enhance the user experience.",
        "• Collaborated with team members through GitHub and ClickUp for efficient project management.",
        "• Employed SignalRConnection for seamless communication between the client and server of 'Chandkhaan' to build multiplayer.",
        "• Utilized Unity’s real-time 3D platform to design and enhance the user experience.",
      ]
    },
    {
      title: "Game Development and Design Internship",
      onClick: () => setCurrentIndex(1),
      explanations: [
        "• Concealland Studio, Velenjak, Tehran, Iran, July 2022 – Nov 2022",
        "• Learning to design 3D models with 3Ds Max and Blender",
        "• Working with Unity engine and developing games in C#",
        "• Collaborating with teammates using GitLab",
        
      ]
    },
    {
      title: "Full-Stack Development",
      onClick: () => setCurrentIndex(2),
      explanations: [
        "• System Group, Vanak, Tehran, Iran, Aug 2021 – June 2022",
        "• Building Front-end of Fanoos using Angular and RxJs",
        "• Refactoring Back-end of Rahkaran to communicate with front-end using C# .Net",
        "• Planning and collaborating with teammates using Scrum and Skype for Business",
        "• Experience with Azure Devops",
      ]
    },
    {
      title: "Front-end Development Internship",
      onClick: () => setCurrentIndex(3),
      explanations: [
        "• Walvira Enghelab, Tehran, Iran, Aug 2020 – May 2021",
        "• Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript and jQuery",
        "• Worked with REST APIs to retrieve and display data from databases",
      ],
    },
    {
      title: "Teacher Assistance and Mentorship",
      onClick: () => setCurrentIndex(4),
      explanations: [
        "• Basic Programming – in charge of challenges and homeworks – Dr. Sadeq Ali-akbari",
        "• Advanced Programming – in charge of homeworks and teaching project fundamentals (MVC arch + javafx) – Dr. Sadeq Ali-Akbari",
        "• Advanced Programming – in charge of challenges and homeworks and final project – Dr. Maede Mosharraf",
        "• Signals and Systems – in charge of paper homeworks and teaching matlab fundamentals – Dr. Salimi"
      ]
    },
    {
      title: "←",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <>
      <Menu title={"projects"} items={projectDatas} />
      <DataHolder
        title={projectDatas[currentIndex].title}
        photo={projectDatas[currentIndex].photo}
        explanation={projectDatas[currentIndex].explanations}
        github={projectDatas[currentIndex].github}
      />
    </>
  );
  }
  
export default JobExperiencePage;