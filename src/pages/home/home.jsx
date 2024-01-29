import React from "react";
import Navbar from "../Navbar";
import BuyCrypto from "./BuyCrypto";
import { Box } from "@mui/material";
import buysellbg from "../../assets/buysell-bg.png";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${buysellbg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "absolute",
        width: "100%",
      }}
    >
      <Navbar />
      <BuyCrypto />
    </Box>
  );
};

export default Home;
