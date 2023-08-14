import "../Assets/CSS/Tools.css";
import { useState } from "react";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";

function SkillsPage() {
  const [itemsDisplayIndex, setItemDisplayIndex] = useState(-1);
  const explainedTools = [
    "C++, C#, Java, Python, JavaScript, Typescript, Flutter, HTML, CSS",
    "React.js, Angular, Flutter, JavaFX, Django, Node.js, .Net",
    "RxJs, Bootstrap, Webpack, Threejs, MindAR, NavMesh, MLAgent",
    "Unity Engine, Unreal Engine, Android Studio, Git, Linux",
    "Persian(native), English",
  ];

  const navigate = useNavigate();

  const menuData = {
    title: "Technical Skills",
    items: [
      {
        title: "Programming Languages",
        onClick: () => setItemDisplayIndex(0),
      },
      {
        title: "Frameworks",
        onClick: () => setItemDisplayIndex(1),
      },
      {
        title: "Libraries and Plugins",
        onClick: () => setItemDisplayIndex(2),
      },
      {
        title: "Dev Tools",
        onClick: () => setItemDisplayIndex(3),
      },
      {
        title: "Speaking Languages",
        onClick: () => setItemDisplayIndex(4),
      },
      {
        title: "←",
        onClick: () => navigate("/"),
      },
    ],
  };

  return (
    <>
      <Menu title={menuData.title} items={menuData.items} />

      <div className="tools-explained">
        <div className="menu-wrapper">
          <div>
            {explainedTools.map((value, index) => {
              return (
                <>
                  {index === itemsDisplayIndex && (
                    <span className={"menu-item tool-animation"}>{value}</span>
                  )}
                </>
              );
            })}
          </div>

          <div className="body-intro" style={{paddingRight: "20% !important"}}>
            <p style={{textAlign: "justify", textJustify: "inter-word"}}>
              My programming journey ignited during my university's inaugural
              year, starting with C/C++ and progressing to advanced Java
              concepts. Through pivotal courses like Data Structures, Algorithm
              Design, and more, I gained insights into the realm of programming
              and computer science. These learnings materialized in various
              projects and internships. Beginning as a frontend intern, I
              mastered HTML, CSS, JavaScript, and jQuery. Transitioning into a
              fullstack developer, I honed Angular and revamped C# code. This
              journey led me to delve into game development, where I gained
              proficiency in C# and Unity engine. Beyond academia, I delved into
              online platforms like Udemy and Coursera, acquiring skills in
              Angular, React, Flutter, and more. My journey, paralleling the
              evolution of programming languages, has been marked by milestones
              that shaped my expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
