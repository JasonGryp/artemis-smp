import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Box } from "@mui/material";
import backgroundImage from "./resources/VHimages/test-splash.png";
import styled from "@emotion/styled";

function App() {
  const BackgroundImageBox = styled(Box)(() => ({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: 0.7,
    zIndex: -1,
    background: `url(${backgroundImage}) #424242`,
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  }));

  return (
    <BrowserRouter>
      <BackgroundImageBox />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
