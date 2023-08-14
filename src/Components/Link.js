const Link = (params) => {
  return (
    <>
      <a className="menu-item" onClick={params.onClick} href={params.href}>
        <span className="menu-item-span">{params.title}</span>
      </a>
    </>
  );
};

export default Link;
