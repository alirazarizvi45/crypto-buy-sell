import React from "react";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Chooseyourcrypto from "../../assets/Chooseyourcrypto.png";
import bitcoin from "../../assets/bitcoin.png";
import ether from "../../assets/ether.png";
import tether from "../../assets/tether.png";
import usdt from "../../assets/usdt.png";
import { DataGrid } from "@mui/x-data-grid";
import { CommonButton } from "../../components";
import CommonTable from "../../components/CommonTable";
const theme = createTheme({
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          background: `linear-gradient(to right,#181D1B,#1B221A)`,
          borderRadius: "10px",
          border: "none !important",
          ".MuiDataGrid-columnHeaders": {
            textAlign: "center",
            color: "#fff",
            fontSize: "15px",
            fontFamily: "Josefin Sans Variable,sans-serif",
            border: "none !important",
            borderRadius: "10px",
            fontWeight: "bold",
            background: `linear-gradient(to right,#474747,#474747)`,
          },
          ".left-aligned-cell": {
            textAlign: "center",
          },

          ".MuiDataGrid-cell": {
            color: "#fff",
            fontSize: "14px",
            fontFamily: "Josefin Sans Variable, sans-serif !important",

            borderBottom: "1px solid #424242",
            fontWeight: "400",
            textAlign: "center",
            height: "auto !important",
            maxHeight: "100% !important",
            minHeight: "100% !important",
            // whiteSpace: "pre-wrap !important",
          },
          ".MuiDataGrid-iconSeparator": {
            color: "#00E909",
          },
          ".MuiDataGrid-footerCell": {
            border: "none !important",
            borderBottom: "none !important",
          },
          ".MuiDataGrid-filterFormDeleteIcon,.MuiDataGrid-menuIcon,.MuiDataGrid-filterIcon,.MuiDataGrid-menuIconButton,.MuiDataGrid-sortIcon":
            {
              color: "#00E909",
            },
        },
      },
    },
  },
});

const ChooseYourCrypto = ({ mode }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:900px)");
  const columns = [
    {
      field: "currency",
      headerName: "Currency",
      width: isSmallScreen ? 100 : undefined,
      flex: isLargeScreen ? 1 : undefined,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <img
            src={params.row.image}
            alt={params.row.currency}
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
          />
          <Typography>{params.row.currency}</Typography>
        </Box>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      width: isSmallScreen ? 100 : undefined,
      flex: isLargeScreen ? 1 : undefined,
    },

    {
      field: "profit",
      headerName: "Profit",
      width: isSmallScreen ? 100 : undefined,
      flex: isLargeScreen ? 1 : undefined,
      renderCell: (params) => (
        <Typography
          style={{
            color: parseFloat(params.value) > 0 ? "#00E909" : "#FF3D00",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: isSmallScreen ? 200 : undefined,
      flex: isLargeScreen ? 1 : undefined,

      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap="10px">
          <CommonButton>Buy</CommonButton>
          <CommonButton
            sx={{
              backgroundColor: "#FF3D00",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000000",
                border: "1px solid #FF3D00",
              },
              padding: "5px 30px",
            }}
          >
            Sell
          </CommonButton>
        </Box>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      currency: "Bitcoin BTC",
      image: bitcoin,
      amount: "$41,622.13 USD",
      profit: "4.23%",
    },
    {
      id: 2,
      currency: "Ethereum ETH",
      image: ether,
      amount: "$2,256.83 USD",
      profit: "2.36%",
    },
    {
      id: 3,
      currency: "Tether USDT",
      image: tether,
      amount: "$1.00 USD",
      profit: "0.01%",
    },
    {
      id: 4,
      currency: "USD Coin USDC",
      image: usdt,
      amount: "$1.00 USD",
      profit: "-0.02%",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: mode ? "" : `url(${Chooseyourcrypto})`,
          // backgroundPosition: "center center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100% ",
          // width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              paddingTop: "100px",
            }}
          >
            <Typography variant="h2" textAlign="center">
              Choose Your{" "}
              <span style={{ color: mode ? "#181818" : "#ABE900" }}>
                Crypto
              </span>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",

                marginTop: "10px",
              }}
            >
              Trade at your own convenience, choose from over 20
              cryptocurrencies using your preferred action method.
            </Typography>
          </Box>
          <Box
            sx={{
              pb: 3,
            }}
          >
            <ThemeProvider theme={theme}>
              <CommonTable rows={rows} columns={columns} />
            </ThemeProvider>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ChooseYourCrypto;
