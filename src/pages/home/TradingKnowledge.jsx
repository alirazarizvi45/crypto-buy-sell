import React from "react";
import tradingKnowledge2 from "../../assets/tradingKnowledge2.png";
import tradingKnowledge1 from "../../assets/tradingKnowledge1.png";
import knowledge from "../../assets/knowledge.png";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { CommonButton } from "../../components";
const TradingKnowledge = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "light"
              ? `url(${tradingKnowledge1})`
              : `url(${tradingKnowledge2})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

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
              textAlign: { xs: "center", sm: "left", md: "left" },
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
                  <span
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#181818" : "#ABE900",
                    }}
                  >
                    {" "}
                    Knowledge{" "}
                  </span>
                </Typography>

                <Typography variant="subtitle1" pb={2}>
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
