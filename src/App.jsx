import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Framework from "./pages/framework";
import Ass from "./pages/xusan";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Ass />} />
      <Route path="/frameform" element={<Framework />} />
    </Routes>
    </>
    
  );
}
