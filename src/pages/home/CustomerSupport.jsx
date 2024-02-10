import React from "react";
import customersupport from "../../assets/customersupport.png";
import support from "../../assets/support.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CommonButton } from "../../components";
const CustomerSupport = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#111B1F",
          padding: "100px 0px",
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
              textAlign:{xs:"center", sm:"left",md:"left"}
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
                  width: "300px",
                  height: "300px",
                }}
              >
                <img
                  src={support}
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
              }}
            >
              <Box>
                <Typography variant="h2" color="#D9D9D9" pb={2}>
                  Find Help with 24/7
                  <span style={{ color: "#ABE900" }}> Customer Support </span>
                </Typography>

                <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
                  Real support means being able to reach someone when it
                  matters. It doesn't matter if it's your first time buying
                  Bitcoin or you've been a cryptocurrency trader for years.
                  Everyone needs a little help sometimes. Getting the
                  information you need when you need it enables you to focus on
                  what matters most to you.
                </Typography>

                <CommonButton>Get Help</CommonButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CustomerSupport;
