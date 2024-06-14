import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  CircularProgress,
  Input,
  TextField,
  InputLabel,
} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import scan from "../../assets/scan.png";
import { BlackButton, CommonButton } from "../../components";
import bitcoin from "../../assets/bitcoin.png";



const SendAndReceive = () => {
  const theme = useTheme();
  const [isMarked, setIsMarked] = useState(false);

  const handleMarkClick = () => {
    setIsMarked(!isMarked);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "70px", mb: "20px" }}>
      <Grid container gap={5} justifyContent={"center"}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                px: "30px",
                py: "20px",
                gap: "10px",
                pb: "40px",
              }}
            >
            <Box
  sx={{
    bgcolor: "#070C0E",
    padding: "20px",
    borderTop: "1px solid #00E909",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
   
  }}
>
  <Stack
    direction="row"
    sx={{
      display: "flex",
      alignItems: "center", // Align items vertically centered
    }}
  >
    <img src={bitcoin} alt="bitcoin" style={{ marginRight: '10px' }} />
    <Stack
      direction="column"
    >
      <Typography variant="h4">Bitcoin</Typography>
      <Typography variant="h5" sx={{fontSize:"12px"}}>BTC</Typography>
    </Stack>
  </Stack>
  <Stack
      direction="column"
    >
      <Typography variant="h4">0 BTC</Typography>
      <Typography variant="h5" sx={{fontSize:"12px"}}>$0.00 USD</Typography>
    </Stack>
</Box>


              <Box
                sx={{
                  display: "flex",

                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={handleMarkClick}
              >
              </Box>
             

              <Box sx={{ borderRadius: "20px" ,pt:"5px"}}>
                <InputLabel shrink sx={{ color: "#FFFFFF" }}>
                  <Typography variant="h4">Send BTC</Typography>
                </InputLabel>
                <TextField
                  placeholder="Wallet"
                  sx={{ width: "100%", bgcolor: "#070C0E" }}
                />
              </Box>
              <Box sx={{ borderRadius: "20px", pt:"10px",pb:"20px"}}>
                <InputLabel shrink sx={{ color: "#FFFFFF" }}>
                  <Typography variant="h4">Amount</Typography>
                </InputLabel>
                <Stack direction="row" gap={3}>
                <TextField
                  placeholder="$0.00"
                  sx={{ width: "75%", bgcolor: "#070C0E" }}
                />
                <BlackButton>Max</BlackButton>
                </Stack>
              </Box>
              
              <CommonButton>Send</CommonButton>
            </Box>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
              // height: "370px",
              // padding: "50px",
              py:"20px",
              px:"50px"
            }}
          >
           

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <img src={scan} alt="scan" width="170px" height="170px" />
            </Box>
            <Box sx={{ fontSize: "14px", padding: "20px" }}>
            <Box
      sx={{
        border: "1px solid",
        padding: "5px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box" 
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "6px", md: "8px" },
          padding: "7px",
          textAlign: "center",
          flexWrap: "wrap",
          wordBreak: "break-all", 
        }}
      >
        3GZyNU6ML6iybkEzzsq3GMmxa4VdYT1zHZ
      </Typography>
      <BorderColorIcon sx={{ color: "#ABE900", fontSize: { xs: "12px", md: "16px" } }} />
    </Box>
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                 gap:"10px",
                  my: 4,
                 
                
                }}
              >
                <CommonButton>Copy</CommonButton>
                <BlackButton>Export</BlackButton>
              </Box>
            </Box>
          
          </Box>
        </Grid>
      </Grid>
     
    </Container>
  );
};

export default SendAndReceive;
