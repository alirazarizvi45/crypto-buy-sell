import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import registerbg from "../assets/registerbg.png";
import { CustomizeInput } from "../components/CustomizeInput";

import loginBg from "../assets/loginBg.png";
import facebookblack from "../assets/facebookblack.png";
import googleblack from "../assets/googleblack.png";

import { CommonButton } from "../components";

const EmailVerification = ({ mode }) => {
  const [verificationCode, setVerificationCode] = useState(
    Array.from({ length: 8 }, () => "")
  );
  const codeInputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    if (value.length === 1 && !isNaN(value)) {
      setVerificationCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;
        return newCode;
      });

      if (index < verificationCode.length - 1) {
        codeInputRefs.current[index + 1].focus();
      }
    } else if (
      value === "" &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      setVerificationCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = "";
        return newCode;
      });

      if (index > 0) {
        codeInputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          ...(mode !== "light" && {
            backgroundImage: `url(${registerbg})`,
            backgroundPosition: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ paddingTop: "150px", paddingBottom: "20px" }}
        >
          <Grid container columnSpacing={{ md: 4 }} rowSpacing={{ xs: 4 }}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                background: mode
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#262A2C,#1F2425)",
                border: mode ? "0.7px solid #FFFFFF" : "1px solid #696C6D",
                boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
                borderRadius: "20px",
                padding: "25px",
              }}
            >
              <Box>
                <Typography variant="h2">
                  Email&nbsp;
                  <span style={{ color: mode ? "#181818" : "#ABE900" }}>
                    Verification
                  </span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 2,
                    fontSize: "18px",
                  }}
                >
                  Please enter 8-digit verification that was sent to your email.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: "2px", sm: "10px" },

                    alignItems: "center",
                  }}
                >
                  {verificationCode.map((digit, index) => (
                    <CustomizeInput
                      key={index}
                      onChange={(event) => handleChange(index, event)}
                      inputRef={(el) => (codeInputRefs.current[index] = el)}
                      autoFocus={index === 0}
                      inputProps={{
                        maxLength: 1,
                        type: "number",
                      }}
                      sx={{
                        input: {
                          color: mode ? "#5A5A5A" : "",
                          textAlign: "center",
                          fontSize: "18px",
                          MozAppearance: "textfield",
                          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                            {
                              appearance: "none",
                              margin: 0,
                            },
                        },
                        "& label.Mui-focused": {
                          backgroundColor: mode ? "#FFFFFF" : "#000000",
                        },
                        "& label": {
                          backgroundColor: mode ? "#FFFFFF" : "#000000",
                          fontFamily: ["Open Sans Variable", "sans-serif"].join(
                            ","
                          ),
                        },
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: mode ? "#FFFFFF" : "#000000",
                        },
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    pt: "20px",
                  }}
                >
                  <CommonButton style={{ padding: "10px" }} fullWidth>
                    Continue
                  </CommonButton>
                </Box>
                <Box
                  sx={{
                    pt: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Divider
                    sx={{
                      width: "10%",
                      borderBottom: "2px solid #737373D4 ",
                    }}
                  />
                  <Typography variant="h2">Or</Typography>
                  <Divider
                    sx={{
                      width: "10%",
                      borderBottom: "2px solid #737373D4 ",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    pt: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebookblack}
                      alt="FaceBook"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </a>
                  <img
                    src={googleblack}
                    alt="FaceBook"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box textAlign={"center"}>
                <img
                  src={loginBg}
                  alt=""
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EmailVerification;
