import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import { Player } from "video-react";
import "../Assets/CSS/Gallary.css";
import { PortfolioImg, TiltFrame } from "./PortfolioMedia";

function Gallary(params) {
  const hasValue = (obj) => !(obj === null || obj === undefined);

  return (
    <>
      <Grid item xs={11} sm={11} md={6} lg={7} xl={4} custom={6}>
        <div className="main-message">
          <div className="main-intro">
            <Grid container>
              <Grid item xs>
                <div>
                  <div className="title">{params.title}</div>
                </div>
              </Grid>
            </Grid>
          </div>
          <span className="body-intro">
            <Grid container>
              {hasValue(params.items) && params.items.map((value, index) => (
                <Grid item xl key={index}>
                  <PortfolioImg
                    src={value}
                    alt=""
                    className="gallary-item"
                    style={{ width: "180px", height: "180px", objectFit: "cover" }}
                  />
                </Grid>
              ))}
              {hasValue(params.videos) && (
                <Grid container spacing={2}>
                  {params.videos.map((value, index) => (
                    <Grid item xs={12} key={index}>
                      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                        <TiltFrame>
                          <div className="portfolio-video-wrap">
                            <Player playsInline src={value} />
                          </div>
                        </TiltFrame>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              )}
              {hasValue(params.link) && (
                <Grid item xl>
                  <div className="gallary-item gallary-link">
                    <a target="_blank" rel="noreferrer" href={params.link}>
                      click to see more!
                    </a>
                  </div>
                </Grid>
              )}
            </Grid>
          </span>
        </div>
      </Grid>
    </>
  );
}

export default Gallary;
