import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import exchange2 from "../../assets/exchange2.png";
import etheriumnetwork from "../../assets/etheriumnetwork.png";
import binancesmart from "../../assets/binancesmart.png";
import celonetwork from "../../assets/celonetwork.png";
import tronnetwork from "../../assets/tronnetwork.png";
import tether from "../../assets/tether.png";
import usdt from "../../assets/usdt.png";
import dai from "../../assets/dai.png";
import nexo from "../../assets/nexo.png";
import celo from "../../assets/celo.png";
import tron from "../../assets/tron.png";
import trade from "../../assets/trade.png";

const Exchange = () => {
  const data = [
    {
      mainImage: etheriumnetwork,
      title: "   Ethereum Network",
      description:
        " Trade Ethereum and other popular ERC20 tokens on LocalCoinSwap with full non-custodial trading and wallets",
      image1: tether,
      image2: usdt,
      image3: dai,
      image4: nexo,
    },
    {
      mainImage: binancesmart,
      title: "   Binance smart chain",
      description:
        " Leverage fast block times and inexpensive transactions to trade stablecoins and BNB",
      image1: tether,
      image2: usdt,
      image3: dai,
    },
    {
      mainImage: celonetwork,
      title: "   Celo network",
      description:
        " Explore an EVM compatible blockchain reducing barriers to cryptocurrency adoption",
      image1: celo,
      image2: tether,
    },
    {
      mainImage: tronnetwork,
      title: "Tron network",
      description:
        "Non-custodial trading and wallets for TRC-20 Chain assets are now live on LocalCoinSwap",
      image1: tron,
      image2: tether,
    },
  ];
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
          <Grid container mt={3} spacing={2}>
            {data.map((item, index) => (
              <Grid item md={3} xs={12} key={index}>
                <Box
                  sx={{
                    zIndex: "100",
                    width: "260px",
                    height: "260px",
                    marginLeft: { md: "5px", sm: "230px", xs: "60px" },
                  }}
                >
                  <img
                    src={item.mainImage}
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
                    p: "1px",
                    borderRadius: "20px",
                    marginTop: { md: "-170px", xs: "-170px" },
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
                      height: "13rem",
                    }}
                  >
                    <Box
                      sx={{
                        paddingTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h4" textAlign="center" mt={3}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" mt={1} color="#D9D9D9">
                        {item.description}
                      </Typography>
                    </Box>
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
                        src={item.image1}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={item.image2}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={item.image3}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={item.image4}
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
            ))}
          </Grid>

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
                <MainButton>Create Account</MainButton>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <img
                  src={trade}
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

export default Exchange;
