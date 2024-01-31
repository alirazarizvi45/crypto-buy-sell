import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import redit from "../../assets/redit.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const images = [redit, facebook, telegram, twitter, linkedin, youtube];
  const socialMediaLinks = [
    "http://www.reddit.com",
    "http://www.facebook.com",
    "http://www.telegram.com",
    "http://www.twitter.com",
    "http://www.linkedin.com",
    "http://www.youtube.com",
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#070C0E",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item md={2.4} xs={6}>
              <Box>
                <Typography variant="h3">Logo</Typography>
                <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" color="#fff">
                  Follow Us
                </Typography>
                <Divider
                  sx={{
                    width: "38%",
                    borderBottom: "1.5px solid #fff ",
                    paddingBottom: "5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                {images.map((image, index) => (
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                    key={index}
                  >
                    <a
                      href={socialMediaLinks[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item md={2.4} xs={6}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4" color="#fff">
                  Our Community
                </Typography>
                <Divider
                  sx={{
                    width: "70%",
                    borderBottom: "1.5px solid #fff ",
                    paddingBottom: "5px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Academy
                </NavLink>

                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Wallets
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Ranks
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Calculator
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Our Blog
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Referral program
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#D9D9D9",
                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                >
                  Release update
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={2.4} xs={6}></Grid>
            <Grid item md={2.4} xs={6}></Grid>
            <Grid item md={2.4} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
