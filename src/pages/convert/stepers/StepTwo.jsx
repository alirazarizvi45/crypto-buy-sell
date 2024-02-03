import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import bancolombia from "../../../assets/bancolombia.png";
import { CustomizeInput } from "../../../components/CustomizeInput";
import { CommonButton } from "../../../components";
const StepTwo = () => {
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState("");
  const [selectedEntity, setSelectedEntity] = useState("");
  const handlePaymentMethodChange = (event) => {
    setselectedPaymentMethod(event.target.value);
  };
  const handleEntityChange = (event) => {
    setSelectedEntity(event.target.value);
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">You Receive</Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#ABE900",
              marginTop: "5px",
            }}
          >
            $3.600 COP
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },

            gap: "20px",
          }}
        >
          <Box mt={2}>
            <InputLabel>Payment method</InputLabel>
            <FormControl sx={{ width: { md: 395, xs: 300 }, marginTop: "5px" }}>
              <Select
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mt={2}>
            <InputLabel>Entity</InputLabel>
            <FormControl sx={{ width: { md: 395, xs: 300 }, marginTop: "5px" }}>
              <Select
                value={selectedEntity}
                onChange={handleEntityChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "transparent",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#000000", // Set the background color here
                    },
                  },
                }}
              >
                <MenuItem value="image">
                  <img
                    src={bancolombia}
                    alt=""
                    style={{
                      width: "100px",
                      height: "15px",
                      objectFit: "contain",
                    }}
                  />
                </MenuItem>
                <MenuItem value="image">
                  <img
                    src={bancolombia}
                    alt=""
                    style={{
                      width: "100px",
                      height: "15px",
                      objectFit: "contain",
                    }}
                  />
                </MenuItem>
                <MenuItem value="image">
                  <img
                    src={bancolombia}
                    alt=""
                    style={{
                      width: "100px",
                      height: "15px",
                      objectFit: "contain",
                    }}
                  />
                </MenuItem>
                <MenuItem value="image">
                  <img
                    src={bancolombia}
                    alt=""
                    style={{
                      width: "100px",
                      height: "15px",
                      objectFit: "contain",
                    }}
                  />
                </MenuItem>
                <MenuItem value="image">
                  <img
                    src={bancolombia}
                    alt=""
                    style={{
                      width: "100px",
                      height: "15px",
                      objectFit: "contain",
                    }}
                  />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <InputLabel sx={{ padding: "20px 0px 10px 0px" }}>
            Account number
          </InputLabel>
          <CustomizeInput fullWidth sx={{ backgroundColor: "#000000" }} />
        </Box>
        <Box pt={8}>
          <CommonButton fullWidth>Next</CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default StepTwo;
