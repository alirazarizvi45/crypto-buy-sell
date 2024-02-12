import React from "react";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import bg from "../../assets/bg.png";
import bg1 from "../../assets/bg1.png";
import LandingPage from "./LandingPage";
import Footer from "../Footer/Footer";
import { useTheme } from "@emotion/react";
const Home = ({ themeToggler, mode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: mode?`url(${bg1})`:`url(${bg})`,
        backgroundPosition: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
        width: "100%"
      }}
    >
      <Navbar mode={mode} themeToggler={themeToggler} />
      <LandingPage mode={mode} />
    </Box>
  );
};

export default Home;
