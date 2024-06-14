import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import bitcoin from "../../assets/bitcoin.png";
import tron from "../../assets/tron.png";
import tether from "../../assets/tether.png";
import celoo from "../../assets/celoo.png";
import celo from "../../assets/celo.png";
import bnb from "../../assets/bnb.png";
import usd from "../../assets/usd.png";
import dai from "../../assets/dai.png";
import nexo from "../../assets/nexo.png";
import ether from "../../assets/ether.png";
import swap from "../../assets/swap.png";

const NameBox = ({ name }) => (
  <Box sx={{ padding: "10px 0px" }}>
    <Typography variant="h2">{name}</Typography>
  </Box>
);

const Portfolio = () => {
  const data = [
    [
      {
        id: "1",
        img: bitcoin,
        name: "BTC",
        fullName: "Bitcoin",
        symbol: "BTC",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
    ],
    [
      {
        id: "2",
        img: tron,
        name: "TRON Mainnet",
        fullName: "TRON",
        symbol: "TRX",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "3",
        img: tether,
        name: "",
        fullName: "Tether",
        symbol: "USDT",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
    ],
    [
      {
        id: "4",
        img: celoo,
        name: "Celo Mainnet",
        fullName: "Celo",
        symbol: "CELO",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "5",
        img: celo,
        name: "",
        fullName: "Celo dollar",
        symbol: "BTC",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
    ],
    [
      {
        id: "6",
        img: bnb,
        name: "BSC Mainnet",
        fullName: "Binance",
        symbol: "BNB",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "7",
        img: tether,
        name: "",
        fullName: "Tether",
        symbol: "USDT",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "8",
        img: usd,
        name: "",
        fullName: "USDC Cooin",
        symbol: "USDC",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "9",
        img: dai,
        name: "",
        fullName: "DAI Satblecoin",
        symbol: "DAI",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
    ],
    [
      {
        id: "10",
        img: ether,
        name: "Ethereum Mainnet",
        fullName: "Etherum",
        symbol: "ETH",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "11",
        img: tether,
        name: "",
        fullName: "Tether",
        symbol: "USDT",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "12",
        img: usd,
        name: "",
        fullName: "USDC Cooin",
        symbol: "USDC",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "13",
        img: dai,
        name: "",
        fullName: "DAI Satblecoin",
        symbol: "DAI",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "14",
        img: nexo,
        name: "",
        fullName: "NEXO",
        symbol: "NEXO",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
      {
        id: "15",
        img: swap,
        name: "",
        fullName: "SWAPCOIN",
        symbol: "SPC",
        balance1: "0.00000334",
        symbol1: "BTC",
        balance2: "0.00000334",
        symbol2: "USDT",
        coin: "1BTC",
        price: "$40,037.00",
        change: "Change",
        percentage: "-0.31%",
      },
    ],
  ];

  return (
    <>
      {data.map((row, index) => (
        <div key={index}>
          <NameBox name={row[0].name} />
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center", padding: "20px 0px" }}
          >
            {row.map((item) => (
              <Grid item md={3} sm={4} xs={12} key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "#ABE900",
                    borderRadius: "12px",
                    padding: "1px 0px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#111B1F",
                      borderRadius: "12px",
                      padding: "10px 15px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "50px",
                        }}
                      >
                        <img
                          src={item.img}
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
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h4" color="#fff">
                          {item.fullName}
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                          {item.symbol}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "20px",
                        gap: "10px",
                      }}
                    >
                      <Typography variant="subtitle1" color="#FFFFFF">
                        Balance
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <Typography variant="h4">{item.balance1}</Typography>
                        <Typography variant="h4" color="#ABE900">
                          {item.symbol1}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <Typography variant="h4">{item.balance2}</Typography>
                        <Typography variant="h4" color="#ABE900">
                          {item.symbol2}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack direction="row" padding="40px 0px" gap="10px">
                      <Box
                        sx={{
                          backgroundColor: "#070C0E",
                          padding: "10px",
                          borderRadius: "5px",
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6" color="#fff">
                          {item.coin}
                        </Typography>
                        <Typography variant="h6" color="#ABE900">
                          {item.price}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#070C0E",
                          padding: "10px",
                          borderRadius: "5px",
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6" color="#fff">
                          {item.change}
                        </Typography>
                        <Typography variant="h6" color="#E90E00">
                          {item.percentage}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
