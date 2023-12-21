import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import { Player } from 'video-react';
import { useState } from "react";
import 'video-react/dist/video-react.css';

function DataHolder(params) {

  let [itemOpened, setItemOpened] = useState([false, false, false, false, false, false, false])

  const changeOpened = (index) => {
    setItemOpened(prevItemOpened => {
      const newItemOpened = [...prevItemOpened];
      for (let i = 0; i < 7; i++) {
        if (i !== index)
          newItemOpened[i] = false
      }

      newItemOpened[index] = !newItemOpened[index];
      return newItemOpened;
    });
  };


  return (
    <>
      <Grid item xs={11} sm={11} md={6} lg={params.lg !== null ? params.lg : 7} xl={4} custom={6}>
        <div className="main-message">
          <div className="main-intro">
            <Grid container>
              <Grid item xs>
                <div className="center">
                  <div className="title">{params.title}</div>
                </div>
              </Grid>
              {params.photo !== null && (
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
              params.explanation.map((value, index) => {
                return (
                  <>
                    {params.link !== null && params.link[index] !== "" && (
                      <a
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={params.link[index]}
                      >
                        <span className="menu-item-span">{value}</span>
                      </a>
                    )}
                    {(params.link == null || params.link[index] === "") && (!params.opener) && (
                      <p
                        style={{
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {value}
                      </p>
                    )}
                    {params.opener && 
                      <a
                        className="link"
                        onClick={() => changeOpened(index)}
                      >
                        <span className="menu-item-span">{value}</span>
                      </a>
                    }
                    {itemOpened[index] && params.videos !== null && params.videos[index] !== "" &&
                      
                        <Player
                          playsInline
                          src={params.videos[index]} // Video source
                        >
                        </Player>
                    }
                    {itemOpened[index] && params.githubs !== null && params.githubs[index] !== "" &&
                        <a
                          className="menu-item"
                          target="_blank"
                          rel="noreferrer"
                          href={params.githubs[index]}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                        >
                          <span className="menu-item-span underline">Github</span>
                        </a>
                    }
                    {itemOpened[index] && params.certificates !== null && params.certificates[index] !== "" &&
                        <a
                          className="menu-item"
                          target="_blank"
                          rel="noreferrer"
                          href={params.certificates[index]}
                          style={{ marginBottom: "30px" }}
                        >
                          <span className="menu-item-span underline">Certificate</span>
                        </a>
                    }
                    {itemOpened[index] && params.certificates === null && itemOpened[index] && params.githubs === null &&
                        <div style={{marginBottom: "50px"}}></div>
                    }
                  </>
                );
              })}
            {params.github !== null && (
              <a
                className="menu-item"
                target="_blank"
                rel="noreferrer"
                href={params.github}
                style={{ marginTop: "70px" }}
              >
                <span className="menu-item-span underline">Github</span>
              </a>
            )}
          </span>
        </div>
      </Grid>
    </>
  );
}

export default DataHolder;
