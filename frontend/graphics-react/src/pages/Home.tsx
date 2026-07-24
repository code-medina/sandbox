import { NavLink } from "react-router";

export const Home = () => {
  return (
    <>
      <h1>Practice Recharts </h1>
      <nav>
        <NavLink to="/" style={{ margin: "10px" }}>
          Home
        </NavLink>
        <NavLink to="/line" style={{ margin: "10px" }}>
          Line
        </NavLink>
        <NavLink to="/bar" style={{ margin: "10px" }}>
          Bar
        </NavLink>
        <NavLink to="/pie" style={{ margin: "10px" }}>
          Pie
        </NavLink>
        <NavLink to="/radar" style={{ margin: "10px" }}>
          Radar
        </NavLink>
      </nav>
    </>
  );
};
