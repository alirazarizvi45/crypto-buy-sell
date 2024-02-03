import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bitcoinimg from "../../assets/bitcoinimg.png";
import { CustomizeInput } from "../../components/CustomizeInput";
import { CommonButton } from "../../components";
const LiveOperations = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              backgroundColor: "#111B1F",
              borderRadius: "10px",
              border: "1px solid #42484B",
            }}
          >
            <Box
              sx={{
                padding: "20px",
              }}
            >
              <img
                src={bitcoinimg}
                alt="bitcoin"
                style={{ width: "60px", height: "60px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#070C0E",
              }}
            >
              <Box
                sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h4" color="#E90E00">
                    SELL
                  </Typography>
                  <Typography variant="h4">0000001</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">22/04/2024 00:00</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">User:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">Amount:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">State: </Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">Receive:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
              }}
            >
              <CommonButton fullWidth>See</CommonButton>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              backgroundColor: "#111B1F",
              borderRadius: "10px",
              border: "1px solid #42484B",
            }}
          >
            <Box
              sx={{
                padding: "20px",
              }}
            >
              <img
                src={bitcoinimg}
                alt="bitcoin"
                style={{ width: "60px", height: "60px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#070C0E",
              }}
            >
              <Box
                sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h4" color="#00E909">
                    BUY
                  </Typography>
                  <Typography variant="h4">0000001</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">22/04/2024 00:00</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">User:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">Amount:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">State: </Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">Receive:</Typography>
              <CustomizeInput />
            </Box>
            <Box
              sx={{
                padding: "20px",
              }}
            >
              <CommonButton fullWidth>See</CommonButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" textAlign="center" pt={6}>
        What are the terms and conditions for trading with you?
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          pt: "20px",
        }}
      >
        <CommonButton>See all offers</CommonButton>
      </Box>
    </>
  );
};

export default LiveOperations;
