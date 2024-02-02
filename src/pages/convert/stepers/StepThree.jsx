import { Box, Typography } from "@mui/material";
import React from "react";

import bancolombia from "../../../assets/bancolombia.png";
import CommonButton from "../../../components/CommonButton";
const StepThree = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            color: "#D9D9D9",
          }}
          variant="subtitle1"
        >
          You Pay:
        </Typography>
        <Typography variant="h4">$36.47</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#D9D9D9",
          }}
          variant="subtitle1"
        >
          You Receive:
        </Typography>
        <Typography variant="h4">#56.788</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#D9D9D9",
          }}
          variant="subtitle1"
        >
          Payment Method:
        </Typography>
        <Box
          sx={{
            width: "120px",
            height: "20px",
          }}
        >
          <img
            src={bancolombia}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#D9D9D9",
          }}
          variant="subtitle1"
        >
          Estimated Exchange Time:
        </Typography>
        <Typography variant="h4">01:34:56 AM</Typography>
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

export default StepThree;
