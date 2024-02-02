import { Box, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../../components/CommonButton";

const StepFour = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" textAlign="center">
          Keep In mind
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <CommonButton fullWidth>Next</CommonButton>
      </Box>
    </>
  );
};

export default StepFour;
