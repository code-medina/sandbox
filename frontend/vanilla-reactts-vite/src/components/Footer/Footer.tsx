import style from "./Footer.module.css";
export const Footer = () => {
  return (
    <div>
      <div>
        <h2>Redes</h2>

        <ul className={style.containerFlex} style={{ listStyle: "none" }}>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
};
