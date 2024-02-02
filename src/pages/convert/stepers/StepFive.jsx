import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const StepFive = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <CircularProgress sx={{ color: "#ABE900" }} />
        <Typography variant="h4" mt={2}>
          <span style={{ color: "#ABE900" }}> 5:00 </span> MIN
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <Typography variant="h5">Please wait.</Typography>
        <Typography variant="h5">
          The merchant is managing your request.
        </Typography>
      </Box>
    </>
  );
};

export default StepFive;
