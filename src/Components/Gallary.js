import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import { Player } from "video-react";
import "../Assets/CSS/Gallary.css";

function Gallary(params) {
 
  const hasValue = (obj) => {
    return !(obj === null || obj === undefined)
  }

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
                {hasValue(params.items) && params.items.map((value, index) => {
                    return(
                        <Grid item xl>
                            <img
                                alt=" "
                                className="gallary-item"
                                src={value}
                            />
                        </Grid>
                    )
                        
                    })
                }
                {hasValue(params.videos) && 
                <Grid container spacing={2}>
                  { params.videos.map((value, index) => {
                    return(
                      <Grid
                        item
                        xs={12}
                        key={index}
                      >
                        <div style={{ marginBottom: "20px", marginTop: "20px"}}>
                            <Player  playsInline src={value}></Player>
                          </div>
                      </Grid>
                    )
                        
                  })}
                  </Grid>
                }
                {hasValue(params.link) &&
                    <Grid item xl>
                        <div className="gallary-item gallary-link">
                            <a 
                                target="_blank"
                                rel="noreferrer"
                                href={params.link}
                            >
                                click to see more!
                            </a>
                        </div>
                    
                    </Grid>
                }
                
            </Grid>
            
          </span>
        </div>
      </Grid>
    </>
  );
}

export default Gallary;