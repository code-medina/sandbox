import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout/Layout";
import { Session } from "./pages/Session";
import { LibrosContainer } from "./components/LibrosContainer/LibrosContainer";
import { Carrito } from "./pages/Carrito";
import { Gestion } from "./pages/Gestion";
import { RouterProtected } from "./components/RouterProtected";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/session" element={<Session></Session>}></Route>
          <Route
            path="/libros"
            element={<LibrosContainer></LibrosContainer>}
          ></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          <Route
            path="/gestion"
            element={
              <RouterProtected>
                <Gestion />
              </RouterProtected>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
