import "../Assets/CSS/Welcome.css";

function DataHolder(params) {
  return (
    <>
      <div className="main-message">
        <div className="main-intro">
          <div>{params.title}</div>
          {params.photo != null && (
            <div>
              <img alt="Niloufar" className="my-photo" src={params.photo} />
            </div>
          )}
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
    </>
  );
}

export default DataHolder;
