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
import CustomizeSelect from "./CustomizeSelect";
import swapbtn from "../assets/swap-btn.png";

const StepOne = () => {
  return (
    <Box >
      <Box>
        <Typography  variant="h5"   sx={{ my: 1 }}>
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
        <Stack direction="row" spacing="80px" >
        <Typography  variant="h5"   sx={{ my: 2 }}>
         Minimum swap amount: <span style={{ color: "#ABE900" }}>$0.00</span>
        </Typography>
  
          <Typography  variant="h5"   sx={{ my: 1 }}>
            Spendable balance:{" "}
            <span style={{ color: "#ABE900" }}>Select token</span>
          </Typography>
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <IconButton
            aria-label="swap"
            sx={{ border: "1px solid #ABE900", my: "40px" }}
          >
            <img src={swapbtn} alt="swap" />
          </IconButton>
        </Box>
        <Typography  variant="h5"   sx={{ my: 1 }}>
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
        <Typography  variant="h5"   sx={{ my: 1 }}>
        Estimated swap time:
        </Typography>
       
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
    </Box>
  );
};

export default StepOne;
