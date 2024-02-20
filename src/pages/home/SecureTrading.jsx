import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import secure from "../../assets/secure.png";
import { CommonButton } from "../../components";
const SecureTrading = () => {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#111B1F",
          padding: "50px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-start", xs: "center" },
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  height: "300px",
                }}
              >
                <img
                  src={secure}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign:{xs:"center", sm:"left",md:"left"}
              }}
            >
              <Box>
                <Typography variant="h2" pb={2} color={"#D9D9D9"}>
                  Secure Trading Made{" "}
                  <span style={{ color: "#ABE900" }}>Easy</span>
                </Typography>

                <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
                  It shouldn't be challenging to stay safe trading
                  cryptocurrency. Easy to follow trading processes that enable
                  you to trade safely with escrow protection so you can convert
                  Bitcoin to cash or trade cryptocurrency with hundreds of other
                  payment methods. The best way to buy Bitcoin and other
                  cryptocurrencies are the methods that are flexible enough to
                  fit your needs, and with P2P trading, you are in control.
                </Typography>

                <CommonButton>Learn More</CommonButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SecureTrading;
