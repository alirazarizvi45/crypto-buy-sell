import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Chooseyourcrypto from "../../assets/Chooseyourcrypto.png";
const ChooseYourCrypto = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Chooseyourcrypto})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          <Box mt={8}>
            <Typography variant="h2" textAlign="center">
              Choose Your <span style={{ color: "#ABE900" }}>Crypto</span>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#D9D9D9",
                marginTop: "10px",
              }}
            >
              Trade at your own convenience, choose from over 20
              cryptocurrencies using your preferred payment method.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ChooseYourCrypto;
