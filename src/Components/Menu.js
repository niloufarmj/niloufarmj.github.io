import "../Assets/CSS/Menu.css";

function Menu(params) {
  
  return (
    <>
      <div className="menu">
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
          <div>
            {params.items != null && params.items.map((value) => {
              if (value == null) return (<></>);
              return (
                <>
                  <div
                    className="menu-item"
                    onClick={(value.onClick)}
                  >
                    <span className="menu-item-span">{value.title}</span>
                  </div>
                </>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
