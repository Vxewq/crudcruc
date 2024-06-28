import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Framework from "./pages/framework";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/frameform" element={<Framework />} />
    </Routes>
    </>
    
  );
}
