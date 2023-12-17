import { Grid } from "@mui/material";
import "../Assets/CSS/Welcome.css";
import React from "react";
import "../Assets/CSS/Gallary.css";

function Gallary(params) {
  console.log(params.items)
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
              
            </Grid>
          </div>
          <span className="body-intro">
            <Grid container>
                {params.items.map((value, index) => {
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
                {params.link != null &&
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