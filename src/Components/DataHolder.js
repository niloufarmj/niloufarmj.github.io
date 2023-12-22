import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import { Player } from "video-react";
import { useState } from "react";
import "video-react/dist/video-react.css";

function DataHolder(params) {
  let [itemOpened, setItemOpened] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const changeOpened = (index) => {
    setItemOpened((prevItemOpened) => {
      const newItemOpened = [...prevItemOpened];
      for (let i = 0; i < 7; i++) {
        if (i !== index) newItemOpened[i] = false;
      }

      newItemOpened[index] = !newItemOpened[index];
      return newItemOpened;
    });
  };

  const hasValue = (obj) => {
    return !(obj === null || obj === undefined)
  }

  console.log(params.about)

  return (
    <>
      <Grid
        item
        xs={11}
        sm={11}
        md={6}
        lg={(hasValue(params.lg)) ? params.lg : 7}
        xl={4}
        custom={6}
      >
        <div className="main-message">
          <div className="main-intro">
            <Grid container mnn>
              <Grid item xs>
                <div>
                  <div className="title">{params.title}</div>
                </div>
              </Grid>
              {params.photo != null && (
                <Grid item xs>
                  <div className="center">
                    <img
                      alt="Niloufar"
                      className="my-photo"
                      src={params.photo}
                    />
                  </div>
                </Grid>
              )}
            </Grid>
          </div>
          <span className="body-intro">
            {hasValue(params.explanation) &&
              (!hasValue(params.hasMedia) ||
                params.hasMedia === false ||
                (params.hasMedia === true && params.about === true)) &&
              params.explanation.map((value, index) => {
                return (
                  <>
                    {hasValue(params.link) && params.link[index] !== "" && (
                      <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={params.link[index]}
                      >
                        <span className="menu-item-span">{value}</span>
                      </a>
                    )}
                    {(!hasValue(params.link) || params.link[index] === "") &&
                      !params.opener && (
                        <p
                          style={{
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          {value}
                        </p>
                      )}
                    {params.opener && (
                      <button
                        className="button-link"
                        onClick={() => changeOpened(index)}
                      >
                        <span className="menu-item-span">{value}</span>
                      </button>
                    )}
                    {itemOpened[index] &&
                      hasValue(params.videos) &&
                      params.videos[index] !== "" && (
                        <Player
                          playsInline
                          src={params.videos[index]} // Video source
                        ></Player>
                      )}
                    {itemOpened[index] &&
                      hasValue(params.githubs) &&
                      params.githubs[index] !== "" && (
                        <a
                          className="menu-item"
                          target="_blank"
                          rel="noreferrer"
                          href={params.githubs[index]}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                        >
                          <span className="menu-item-span underline">
                            Github
                          </span>
                        </a>
                      )}
                    {itemOpened[index] &&
                      hasValue(params.certificates) &&
                      params.certificates[index] !== "" && (
                        <a
                          className="menu-item"
                          target="_blank"
                          rel="noreferrer"
                          href={params.certificates[index]}
                          style={{ marginBottom: "30px" }}
                        >
                          <span className="menu-item-span underline">
                            Certificate
                          </span>
                        </a>
                      )}
                    {itemOpened[index] &&
                      !hasValue(params.certificates) &&
                      !hasValue(params.githubs) && (
                        <div style={{ marginBottom: "50px" }}></div>
                      )}
                  </>
                );
              })}
            {params.hasMedia &&
              params.about === false &&
              hasValue(params.media) && (
                <Grid container spacing={2}>
                  {params.media.map((value, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={params.media.length > 1 ? 6 : 12}
                        key={index}
                      >
                        {" "}
                        {/* Set sm=6 if there is more than one media item, otherwise set sm=12 to take up the full width */}
                        {(value.type === "video" && (
                          <div style={{width: "90%", marginBottom: "20px", marginTop: "20px"}}>
                            <Player className="dataholder-img" playsInline src={value.src}></Player>
                          </div>
                        )) || <div style={{width: "80%"}}>
                          <img className="dataholder-img" src={value.src} alt="Media" />
                          </div>}
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            {params.hasMedia && (
              <>
                <buttom
                  className="bottom-link"
                  target="_blank"
                  rel="noreferrer"
                  onClick={params.aboutClicked}
                >
                  <span className="bottom-link-span underline">About</span>
                </buttom>
                <buttom
                  className="bottom-link"
                  target="_blank"
                  rel="noreferrer"
                  onClick={params.mediaClicked}
                >
                  <span className="bottom-link-span underline">Media</span>
                </buttom>
              </>
            )}
            {hasValue(params.github) && (
              <a
                className="bottom-link"
                target="_blank"
                rel="noreferrer"
                href={params.github}
              >
                <span className="bottom-link-span underline">Github</span>
              </a>
            )}
          </span>
        </div>
      </Grid>
    </>
  );
}

export default DataHolder;
