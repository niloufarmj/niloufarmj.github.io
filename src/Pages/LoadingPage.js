import "../Assets/CSS/Loading.css";
import { TypeAnimation } from "react-type-animation";

function LoadingPage() {
  return (
    <div className="loading-container">
      <TypeAnimation
        sequence={["Welcome To My Personal Website"]}
        wrapper="span"
        className="loading-content"
        speed={{ type: "keyStrokeDelayInMs", value: 80 }}
        cursor={false}
        repeat={0}
      />
    </div>
  );
}

export default LoadingPage;
