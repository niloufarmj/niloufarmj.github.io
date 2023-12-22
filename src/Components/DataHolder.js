import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import { Player } from "video-react";
import { useState, useEffect } from "react";
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

  console.log(params.about)

  return (
    <>
      <Grid
        item
        xs={11}
        sm={11}
        md={6}
        lg={params.lg != null ? params.lg : 7}
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
            {params.explanation !== null &&
              (params.hasMedia === null ||
                params.hasMedia === undefined ||
                params.hasMedia === false ||
                (params.hasMedia === true && params.about == true)) &&
              params.explanation.map((value, index) => {
                return (
                  <>
                    {params.link != null && params.link[index] !== "" && (
                      <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={params.link[index]}
                      >
                        <span className="menu-item-span">{value}</span>
                      </a>
                    )}
                    {(params.link == null || params.link[index] === "") &&
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
                      params.videos != null &&
                      params.videos[index] !== "" && (
                        <Player
                          playsInline
                          src={params.videos[index]} // Video source
                        ></Player>
                      )}
                    {itemOpened[index] &&
                      params.githubs != null &&
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
                      params.certificates != null &&
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
                      params.certificates == null &&
                      itemOpened[index] &&
                      params.githubs == null && (
                        <div style={{ marginBottom: "50px" }}></div>
                      )}
                  </>
                );
              })}
            {params.hasMedia === true &&
              params.about === false &&
              params.media != null && (
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
                          <Player playsInline src={value.src}></Player>
                        )) || <div style={{width: "90%"}}>
                          <img className="dataholder-img" src={value.src} alt="Media" />
                          </div>}
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            {params.hasMedia != null && params.hasMedia == true && (
              <>
                <a
                  className="bottom-link"
                  target="_blank"
                  rel="noreferrer"
                  onClick={params.aboutClicked}
                >
                  <span className="bottom-link-span underline">About</span>
                </a>
                <a
                  className="bottom-link"
                  target="_blank"
                  rel="noreferrer"
                  onClick={params.mediaClicked}
                >
                  <span className="bottom-link-span underline">Media</span>
                </a>
              </>
            )}
            {params.github != null && (
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
