import React from "react";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import bg from "../../assets/bg.png";
import LandingPage from "./LandingPage";
import Footer from "../Footer/Footer";
import { useTheme } from "@emotion/react";
const Home = ({ themeToggler, mode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
        width: "100%",
        // backgroundColor: "#070C0E",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar mode={mode} themeToggler={themeToggler} />
      <LandingPage />
    </Box>
  );
};

export default Home;
