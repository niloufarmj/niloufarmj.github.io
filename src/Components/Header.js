import "./../Assets/CSS/Header.css";
import githubGray from "../Assets/Media/github-gray.png";
import linkedinGray from "../Assets/Media/linkedin-gray.png";
import queraGray from "../Assets/Media/quera-gray.png";
import mediumGray from "../Assets/Media/medium-gray.png";
import youtubeGray from "../Assets/Media/youtube-gray.png";
import githubWhite from "../Assets/Media/github-white.png";
import linkedinWhite from "../Assets/Media/linkedin-white.png";
import queraWhite from "../Assets/Media/quera-white.png";
import mediumWhite from "../Assets/Media/medium-white.png";
import youtubeWhite from "../Assets/Media/youtube-white.png";
import logo from "../Assets/Media/logo.png";
import { useState } from "react";

function Header() {
  let [github, setGithub] = useState(githubGray);
  let [linkedin, setLinkedin] = useState(linkedinGray);
  let [quera, setQuera] = useState(queraGray);
  let [medium, setMedium] = useState(mediumGray);
  let [youtube, setYoutube] = useState(youtubeGray);

  return (
    <>
      <div className="header">
        <img className="logo" width="60px" height="60px" src={logo} alt="logo"/>
        <div className="header-right">
          <a
            href="https://www.github.com/niloufarmj"
            onMouseEnter={() => setGithub(githubWhite)}
            onMouseLeave={() => setGithub(githubGray)}
            onClick={() => setGithub(githubGray)}
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" height="40px" src={github} alt="github"/>
          </a>
          <a
            href="https://www.linkedin.com/in/niloufar-moradi-jam/"
            onMouseEnter={() => setLinkedin(linkedinWhite)}
            onMouseLeave={() => setLinkedin(linkedinGray)}
            onClick={() => setLinkedin(linkedinGray)}
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" height="40px" src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://quera.org/profile/3kkb3f"
            onMouseEnter={() => setQuera(queraWhite)}
            onMouseLeave={() => setQuera(queraGray)}
            onClick={() => setQuera(queraGray)}
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" height="40px" src={quera} alt="quera" />
          </a>
          <a
            href="https://medium.com/@niloufarmj"
            onMouseEnter={() => setMedium(mediumWhite)}
            onMouseLeave={() => setMedium(mediumGray)}
            onClick={() => setMedium(mediumGray)}
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" height="40px" src={medium} alt="medium" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCbUOlzTYZ3zgO9aXx1FS8Mw"
            onMouseEnter={() => setYoutube(youtubeWhite)}
            onMouseLeave={() => setYoutube(youtubeGray)}
            onClick={() => setYoutube(youtubeGray)}
            target="_blank"
            rel="noreferrer"
          >
            <img width="40px" height="40px" src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
