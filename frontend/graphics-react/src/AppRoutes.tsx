import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { LinePage } from "./pages/LinePage";
import { BarPage } from "./pages/BarPage";
import { PiePage } from "./pages/PiePage";
import { RadarPage } from "./pages/RadarPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/line" element={<LinePage></LinePage>}></Route>
        <Route path="/bar" element={<BarPage></BarPage>}></Route>
        <Route path="/pie" element={<PiePage></PiePage>}></Route>
        <Route path="/radar" element={<RadarPage></RadarPage>}></Route>

      </Routes>
    </>
  );
};
