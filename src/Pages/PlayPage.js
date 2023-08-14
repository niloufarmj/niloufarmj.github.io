import ChromeDinoGame from "react-chrome-dino";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";

function PlayPage() {
  const navigate = useNavigate();
  const menuData = {
    title: " ",
    items: [
      {
        title: "←",
        onClick: () => navigate("/"),
      },
    ],
  };
  return (
    <>
      <Menu title={menuData.title} items={menuData.items} />
      <ChromeDinoGame />
    </>
  );
}

export default PlayPage;
