import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import exchange2 from "../../assets/exchange2.png";
import etheriumnetwork from "../../assets/etheriumnetwork.png";
import tether from "../../assets/tether.png";
import usdt from "../../assets/usdt.png";
import dai from "../../assets/dai.png";
import nexo from "../../assets/nexo.png";
import binancesmart from "../../assets/binancesmart.png";

const Exchange = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${exchange2})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",

          width: "100%",
          padding: "20px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" mt={4}>
            Exchanges
          </Typography>
          <Grid container mt={8} spacing={2}>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  zIndex: "100",
                }}
              >
                <img
                  src={etheriumnetwork}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  background:
                    "linear-gradient(360deg,#CECECF 0%,  #242829 80%)",
                  p: "1.2px",
                  borderRadius: "20px",
                  marginTop: "-170px",
                }}
              >
                <Box
                  sx={{
                    padding: "40px 20px",
                    background: "#242829",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" textAlign="center" mt={3}>
                    Ethereum Network
                  </Typography>
                  <Typography variant="subtitle1" mt={1} color="#D9D9D9">
                    Trade Ethereum and other popular ERC20 tokens on
                    LocalCoinSwap with full non-custodial trading and wallets
                  </Typography>
                  <Box
                    sx={{
                      width: "50px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      src={tether}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={usdt}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={dai}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={nexo}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  zIndex: "100",
                }}
              >
                <img
                  src={binancesmart}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  background:
                    "linear-gradient(360deg,#CECECF 0%,  #242829 80%)",
                  p: "1.2px",
                  borderRadius: "20px",
                  marginTop: "-170px",
                }}
              >
                <Box
                  sx={{
                    padding: "40px 20px",
                    background: "#242829",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" textAlign="center" mt={3}>
                    Binance smart chain
                  </Typography>
                  <Typography variant="subtitle1" mt={1} color="#D9D9D9">
                    Leverage fast block times and inexpensive transactions to
                    trade stablecoins and BNB
                  </Typography>
                  <Box
                    sx={{
                      width: "50px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      src={tether}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={usdt}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={dai}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Exchange;
