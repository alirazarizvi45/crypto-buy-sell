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
import CustomizeSelect from "./stepers/CustomizeSelect";
import swapbtn from "./assets/swap-btn.png";
import StepOne from "./stepers/StepOne";
// import StepOne from "./stepers/StepOne";

const Steps = () => {
  return (
    <Box sx={{ background: "#070C0E", pt: "150px" }}>
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
          <StepOne />
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;
