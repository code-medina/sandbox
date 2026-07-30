import { NavLink } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import style from "./Navbar.module.css";
export const Navbar = () => {
  const { userCurrent, logout } = useAuth();

  const styleNav = ({ isActive }: { isActive: boolean }) => {
    const aux = {
      color: isActive ? "white" : "gray",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
    };
    return aux;
  };
  return (
    <>
      <nav className={style.containerNav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
          })}
        >
          Home 🏠{" "}
        </NavLink>
        <NavLink to="/libros" style={styleNav}>
          Libros 📚{" "}
        </NavLink>
        <NavLink to="/carrito" style={styleNav}>
          Carrito 🛒{" "}
        </NavLink>
        {!userCurrent ? (
          <NavLink to="/session" style={styleNav}>
            Inicio de sesion 👤
          </NavLink>
        ) : (
          <button
            onClick={logout}
            style={{ padding: "4px", border: "none", borderRadius: "10px" }}
          >
            Logout 👤 {userCurrent.email}
          </button>
        )}

        {userCurrent && userCurrent.rol === "admin" && (
          <NavLink to="/gestion" style={styleNav}>
            gestion de libros 👤
          </NavLink>
        )}
      </nav>
    </>
  );
};
