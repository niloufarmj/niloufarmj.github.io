import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";

function DataHolder(params) {

  return (
    <>
      <Grid item xs={11} sm={11} md={6} lg={7} xl={4} custom={6}>
        <div className="main-message">
          <div className="main-intro">
            <Grid container>
              <Grid item xs>
                <div className="center">
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
            {params.explanation != null &&
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
                    {(params.link == null || params.link[index] === "") && (
                      <p
                        style={{
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </>
                );
              })}
            {params.github != null && (
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
