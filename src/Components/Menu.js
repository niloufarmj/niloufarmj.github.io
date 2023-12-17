import "../Assets/CSS/Menu.css";
import { Grid } from "@mui/material";

function Menu(params) {

  return (
    <>
      <Grid item xs={12} sm={12} md={5} lg={params.lg != null ? params.lg : 4} xl={4} custom={5}>
        <div style={{ paddingLeft:"10%", paddingRight:"10%" }}>
          <h1>{params.title}</h1>
          <div>
            <svg
              width="50px"
              height="50px"
              data-name="corner-top-left"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
              data-inlinesvg=".inlineSvgFile-2"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" className="gradient1"></stop>
                  <stop offset="1" className="gradient2"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url('#grad1')"
                d="M8 0h252l-5 5H10a5 5 0 0 0-5 5v255L0 15V8a8 8 0 0 1 8-8Z"
              ></path>
            </svg>{" "}
          </div>
          <div className="menu-wrapper">
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              {params.items != null &&
                params.items.map((value) => {
                  if (value == null) return <></>;
                  return (
                    <>
                      <div className="menu-item" onClick={value.onClick}>
                        <span className="menu-item-span">{value.title}</span>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Menu;
