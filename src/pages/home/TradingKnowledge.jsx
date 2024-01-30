import React from "react";
import tradingKnowledge2 from "../../assets/tradingKnowledge2.png";
import knowledge from "../../assets/knowledge.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CommonButton } from "../../components";
const TradingKnowledge = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${tradingKnowledge2})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#070C0E",
          minHeight: "auto",
          padding: "50px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
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
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h2" pb={2}>
                  Expand Your Trading
                  <span style={{ color: "#ABE900" }}> Knowledge </span>
                </Typography>

                <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
                  Make money trading cryptocurrency with P2P exchange.
                  Increasing your cryptocurrency trading knowledge is easy when
                  you have the best free cryptocurrency guides and trading
                  tutorials. Learn how to buy and sell bitcoin for a profit, and
                  earn money with advanced trading techniques like crypto
                  arbitrage.
                </Typography>

                <CommonButton>Start Learning</CommonButton>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", xs: "center" },
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                }}
              >
                <img
                  src={knowledge}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TradingKnowledge;
