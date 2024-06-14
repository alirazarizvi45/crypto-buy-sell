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
        sx={
          {
            // backgroundColor: "#070C0E",
          }
        }
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} pt={4} pb={2}>
            <Grid item md={2.4} xs={6}>
              <Box>
                <Typography variant="h3">Logo</Typography>
                <Typography variant="subtitle1" pb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4">Follow Us</Typography>
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
                <Typography variant="h4">Our Community</Typography>
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
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Academy
                </NavLink>

                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Wallets
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Ranks
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Calculator
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Our Blog
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Referral program
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Release update
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={2.4} xs={6}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4">P2P Trading Guides</Typography>
                <Divider
                  sx={{
                    width: "85%",
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

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  P2P trading guides
                </NavLink>

                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Introduction to P2P trading
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  How to create a trade offer
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Payment methods
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  P2P escrow explained
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={2.4} xs={6}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4">Support</Typography>
                <Divider
                  sx={{
                    width: "35%",
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

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Exchange API
                </NavLink>

                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Fees
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  FAQ’s
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Support portal
                </NavLink>
                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  List your token
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={2.4} xs={12}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4">Legal</Typography>
                <Divider
                  sx={{
                    width: "25%",
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

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Privacy policy
                </NavLink>

                <NavLink
                  className="textdecoration"
                  to="/"
                  style={{
                    textDecoration: "none",

                    borderBottom: "none",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                    color: "#D9D9D9",
                  }}
                >
                  Terms of service & use
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            padding: "20px",
            mt: "50px",
          }}
        >
          <Typography variant="subtitle1" textAlign="center">
            Copyright © 2024 All rights reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
