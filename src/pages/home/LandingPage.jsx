import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import buysellcrypto from "../../assets/buysellcrypto.png";
import Chooseyourcrypto from "../../assets/Chooseyourcrypto.png";
import Exchange from "./Exchange";
import { CommonButton } from "../../components";
import CommonTable from "../../components/CommonTable";
import ChooseYourCrypto from "./ChooseYourCrypto";
const LandingPage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          padding: "50px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { md: "flex-end", xs: "center" },
          }}
        >
          <Box>
            <Typography variant="h1" pb={2}>
              Buy & Sell <span style={{ color: "#ABE900" }}>Crypto</span>
            </Typography>
            <Typography variant="h4" pb={2}>
              Fast, Easy, and Private.
            </Typography>
            <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
              Buy BTC, ETH, USDC, USDT, DAI and more cryptos worldwide using
              300+ payment methods.
            </Typography>
            <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
              Get your free wallet today.
            </Typography>
            <CommonButton>Create Account</CommonButton>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box>
            <img
              src={buysellcrypto}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "#111B1F",
            padding: "0px 80px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">40k+</Typography>
              <Typography variant="h5">TRADE OFFERS</Typography>
            </Box>
            <Divider
              sx={{
                background:
                  "linear-gradient(92deg, rgba(158, 158, 158, 0.28) -9.2%, rgba(255, 255, 255, 0.70) 58.37%, rgba(156, 156, 156, 0.48) 111.65%)",
                borderRight: "2px solid",
                borderImage:
                  "linear-gradient(92deg, rgba(158, 158, 158, 0.28) -9.2%, rgba(255, 255, 255, 0.70) 58.37%, rgba(156, 156, 156, 0.48) 111.65%) 1",
                height: "150px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" color="#ABE900">
                105M+
              </Typography>
              <Typography variant="h5">IN TRADES</Typography>
            </Box>
            <Divider
              sx={{
                background:
                  "linear-gradient(92deg, rgba(158, 158, 158, 0.28) -9.2%, rgba(255, 255, 255, 0.70) 58.37%, rgba(156, 156, 156, 0.48) 111.65%)",
                borderRight: "2px solid",
                borderImage:
                  "linear-gradient(92deg, rgba(158, 158, 158, 0.28) -9.2%, rgba(255, 255, 255, 0.70) 58.37%, rgba(156, 156, 156, 0.48) 111.65%) 1",
                height: "150px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">200+</Typography>
              <Typography variant="h5">PAYMENT METHODS</Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <ChooseYourCrypto />
      <Exchange />
    </>
  );
};
export default LandingPage;
