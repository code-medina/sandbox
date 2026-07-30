import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import style from "./Layout.module.css";
type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div
      className={style.containerGrid}
      style={{ minHeight: "100vh", border: "2px solid red" }}
    >
      <header className={style.header} style={{ border: "2px solid red" }}>
        <Navbar></Navbar>
      </header>
      <div className={style.main} style={{ border: "2px solid red" }}>
        {children}
      </div>
      <div className={style.footer} style={{ border: "2px solid red" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};
