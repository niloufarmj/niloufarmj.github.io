import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import DataHolder from "../Components/DataHolder";
import { useState } from "react";


function HobbiesPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectDatas = [
    {
      title: "Hobbies",
      onClick: () => setCurrentIndex(0),
      explanations: [
        "• Painting with Acrylic (click to see my pinterest board)",
        "• Drawing with Pen (click to see my pinterest board)",
        "• Photography (click to see my pinterest board)",
        "• Playing Video Games",
        "• Reading Books about Literature, Phylosophy and Psychiatry",
        "• Watiching Movies and Anime",
      ],
      links: [
        "https://www.pinterest.com/niliparr/my-acrylic-paintings/",
        "https://www.pinterest.com/niliparr/my-rapid-pen-drawings/",
        "https://www.pinterest.com/niliparr/aesthetic-views/",
        "",
        "",
        "",
      ],
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

  const menuData = [
    {
      title: "←",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <>
      <Menu title={""} items={menuData} />
      <DataHolder
        title={projectDatas[currentIndex].title}
        photo={projectDatas[currentIndex].photo}
        explanation={projectDatas[currentIndex].explanations}
        github={projectDatas[currentIndex].github}
        link={projectDatas[currentIndex].links}
      />
    </>
  );
}

export default HobbiesPage;
