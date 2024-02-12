import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import exchange2 from "../../assets/exchange2.png";
import bg1 from "../../assets/bg1.png";
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

import { CommonButton } from "../../components";

const Exchange = () => {
  const theme = useTheme();

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
          backgroundImage:
            theme.palette.mode === "light"
              ? `url(${bg1})`
              : `url(${exchange2})`,
          // backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          // backgroundSize: "cover",
          // minHeight: "100vh",
          // width: "100%",
          // padding: "0px 0px 150px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              pt: { md: 8, sm: 6, xs: 4 },
            }}
          >
            Exchanges
          </Typography>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item md={3} xs={12} key={index}>
                <Box
                  sx={{
                    zIndex: "100",
                    width: "100%",
                    height: "260px",
                    // marginLeft: { md: "5px", sm: "230px", xs: "60px" },
                    textAlign: "center",
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
                    ...(theme.palette.mode !== "light" && {
                      background:
                        "linear-gradient(360deg,#CECECF 0%,  #242829 80%)",
                      p: "1px",
                    }),
                    borderRadius: "20px",
                    marginTop: { md: "-170px", xs: "-170px" },
                  }}
                >
                  <Box
                    sx={{
                      padding: "15px 20px",

                      background:
                        theme.palette.mode === "light"
                          ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                          : "#242829",
                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        minHeight: "180px",
                        paddingTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h4" textAlign="center" mt={3}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" mt={1}>
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
            spacing={10}
            sx={{
              padding: "130px 0px 50px 0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: { xs: "center", sm: "left", md: "left" },
            }}
          >
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h2" pb={2}>
                  Trade with{" "}
                  <span
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#181818" : "#ABE900",
                    }}
                  >
                    Transparency
                  </span>
                </Typography>
                <Typography variant="subtitle1" pb={2}>
                  Feel confident by trading on-chain with non-custodial
                  exchange. Exchange Bitcoin, Ethereum, and other popular
                  cryptocurrencies using secure smart contracts and Bitcoin
                  scripts alongside wallets where you control the private keys.
                  Empower yourself by exploring how to buy and sell
                  cryptocurrency without having to hand over control of your
                  funds.
                </Typography>

                <CommonButton>Start Trading</CommonButton>
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
