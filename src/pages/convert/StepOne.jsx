import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomizeSelect from "./CustomizeSelect";
import swapbtn from "./assets/swap-btn.png";

const StepOne = () => {
  return (
    <Box sx={{ background: "#070C0E", height: "100vh", pt: "150px" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "19px",
            width: { md: "500px", xs: "100%" },
            mx: "auto",
            py: "50px",
            px: "20px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" color="#ffffff" sx={{ my: 1 }}>
            You Pay
          </Typography>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              sx={{ color: "#ffffff" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <CustomizeSelect />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Stack direction="row" spacing="80px" sx={{ m: 2 }}>
            <FormHelperText id="outlined-weight-helper-text">
              Minimum swap amount:{" "}
              <span style={{ color: "#ABE900" }}>$0.00</span>
            </FormHelperText>
            <FormHelperText id="outlined-weight-helper-text">
              Spendable balance:{" "}
              <span style={{ color: "#ABE900" }}>Select token</span>
            </FormHelperText>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              aria-label="swap"
              sx={{ border: "1px solid #ABE900", my: "40px" }}
            >
              <img src={swapbtn} alt="swap" />
            </IconButton>
          </Box>
          <Typography variant="h6" color="#ffffff" sx={{ my: 1 }}>
            You Receive
          </Typography>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              sx={{ color: "#ffffff" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <CustomizeSelect />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <FormHelperText id="outlined-weight-helper-text" sx={{ m: 2 }}>
            Estimated swap time:
          </FormHelperText>
          <Button
            variant="contained"
            fullWidth
            sx={{
              color: "#000",
              fontFamily: "Inter Variable",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Create conversion
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default StepOne;
