import { Box, Container } from "@mui/material";

import StepOne from "./stepers/StepOne";
import StepTwo from "./stepers/StepTwo";
import StepThree from "./stepers/StepThree";
import StepFour from "./stepers/StepFour";
import StepFive from "./stepers/StepFive";
// import StepOne from "./stepers/StepOne";

const Steps = () => {
  return (
    <Box sx={{ background: "#070C0E", pt: "150px" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <StepOne />
        </Box>
        <br />
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "30px 20px",
          }}
        >
          <StepTwo />
        </Box>
        <br />
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "30px 20px",
          }}
        >
          <StepThree />
        </Box>
        <br />
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "30px 20px",
          }}
        >
          <StepFour />
        </Box>
        <br />
        <Box
          sx={{
            background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "30px 20px",
          }}
        >
          <StepFive />
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;
