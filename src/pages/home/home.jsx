import React from "react";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import bg from "../../assets/bg.png";
import LandingPage from "./LandingPage";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
        minHeight: "auto",
        position: "absolute",
        width: "100%",
        backgroundColor: "#070C0E",
      }}
    >
      <Navbar />
      <LandingPage />
    </Box>
  );
};

export default Home;
