import Menu from "../Components/Menu";
import "../Assets/CSS/Home.css"
import { useNavigate } from 'react-router-dom';
import myPhoto from "../Assets/Media/me.jpeg";
import DataHolder from "../Components/DataHolder";

function HomePage() {
  const navigate = useNavigate();

  var menuData = {
    title: 'Content Pages', 
    items: [
      {
        onClick: () => navigate("education"), 
        title: 'Educational Background',
      },
      {
        onClick: () => navigate("/workexperience"), 
        title: 'Work Experience',
      },
      {
        onClick: () => navigate("/skills"), 
        title: 'Skills',
      },
      {
        onClick: () => navigate("/projects"), 
        title: 'Projects',
      },
      {
        onClick: () => navigate("/hobbies"), 
        title: 'Hobbies',
      },
      {
        onClick: () => navigate("/play"), 
        title: 'Wanna Have Some Fun?',
      }
    ]
  };

  var WelcomeData = {
    title: "Hi There! This is Niloufar.",
    photo: myPhoto,
    explanation: ["I am a 23-year-old computer engineering graduate from Iran, specializing in game, AR, and front-end development. I have experience working with various web frameworks and I am committed to continuously updating and improving my skills.", 
                  "I am passionate about learning new things and always strive to do my best, demonstrating perseverance and determination in everything I do."]
  }

  return (
    <>
    <div className="main">
      <DataHolder title={WelcomeData.title} photo={WelcomeData.photo} explanation={WelcomeData.explanation} />
      <Menu title={menuData.title} items={menuData.items}/>
    </div>
    </>
  );
}

export default HomePage;