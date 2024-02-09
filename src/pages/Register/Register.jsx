import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import registerbg from "../../assets/registerbg.png";
import { CustomizeInput } from "../../components/CustomizeInput";
import att from "../../assets/att.png";
import Line from "../../assets/Line.png";
import lock from "../../assets/lock.png";
import refferal from "../../assets/refferal.png";
import facebookblack from "../../assets/facebookblack.png";

import code1 from "../../assets/code1.png";
import rate1 from "../../assets/rate.png";
import lock1 from "../../assets/loock.png";

import googleblack from "../../assets/googleblack.png";
import ContriesJson from "../JsonFiles/Country.json";
import { CommonButton } from "../../components";
import tick from "../../assets/tick.png";
import { Link, useLocation } from "react-router-dom";
const Register = ({ mode }) => {
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const location = useLocation();
  const HandleLogin = () => {
    setIsLogin(true);
  };
  const HandleRegister = () => {
    setIsLogin(false);
  };
  const handlePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword1) => !prevShowPassword1);
  };
  const handlePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword2) => !prevShowPassword2);
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
              {!isLogin && (
                <Box>
                  <Typography variant="h2">
                    Create your&nbsp;
                    <span style={{ color: mode ? "#181818" : "#ABE900" }}>
                      Account
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    Setting up an account takes less than 1 minute.
                  </Typography>
                </Box>
              )}

              {isLogin && (
                <Box>
                  <Typography variant="h2">Welcome back</Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#D9D9D9",
                      marginTop: "10px",
                    }}
                  >
                    Please enter your email and password
                  </Typography>
                </Box>
              )}

              <Box
                sx={{
                  backgroundColor: mode ? "#EFEFEF" : "#070C0E",
                  padding: "10px",
                  maxWidth: "40%",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "10px 0px",
                }}
              >
                <Button
                  component={Link}
                  to="/Login"
                  sx={{
                    fontWeight:"bold",
                    color: mode ? "#000000" : "#fff",
                    background:
                      location.pathname === "/Register"
                        ? mode
                          ? "#EFEFEF"
                          : "#070C0E"
                        : "#070C0E",
                    "&:hover": {
                      background:
                        location.pathname === "/Register"
                          ? mode
                            ? "#EFEFEF"
                            : "#070C0E"
                          : "#070C0E",
                    },
                    padding: "5px 20px",
                  }}
                  // onClick={HandleLogin}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/Register"
                  sx={{
                    fontWeight: 600,
                    color: mode ? "#000000" : "#fff",
                    background:
                      location.pathname === "/Register" ? "#ABE900" : "#070C0E",
                    "&:hover": {
                      background:
                        location.pathname === "/Register"
                          ? "#ABE900"
                          : "#070C0E",
                    },
                    padding: "5px 20px",
                  }}
                  // onClick={HandleRegister}
                >
                  Register
                </Button>
              </Box>
              {isLogin && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <CustomizeInput
                    placeholder="Email Address"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? rate1 : att}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& label.Mui-focused": {
                        backgroundColor: "#000000",
                      },
                      "& label": {
                        backgroundColor: "#000000",
                        fontFamily: ["Open Sans Variable", "sans-serif"].join(
                          ","
                        ),
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000000",
                      },
                    }}
                  />
                  <CustomizeInput
                    placeholder="Password"
                    fullWidth
                    type={showPassword1 ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? lock1 : lock}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handlePasswordVisibility1}
                            sx={{ color: "#5A5A5A" }}
                          >
                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& label.Mui-focused": {
                        backgroundColor: "#000000",
                      },
                      "& label": {
                        backgroundColor: "#000000",
                        fontFamily: ["Open Sans Variable", "sans-serif"].join(
                          ","
                        ),
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000000",
                      },
                    }}
                  />

                  <Box
                    sx={{
                      pt: "20px",
                    }}
                  >
                    <CommonButton fullWidth>Login</CommonButton>
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
              )}
              {!isLogin && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <CustomizeInput
                    placeholder="Email Address"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? rate1 : att}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      input: { color: mode ? "#5A5A5A" : "" },
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
                  <CustomizeInput
                    placeholder="Password"
                    fullWidth
                    type={showPassword1 ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? lock1 : lock}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handlePasswordVisibility1}
                            sx={{ color: "#5A5A5A" }}
                          >
                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      input: { color: mode ? "#5A5A5A" : "" },
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
                  <CustomizeInput
                    placeholder="Re-Type Password"
                    fullWidth
                    type={showPassword2 ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? lock1 : lock}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),

                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handlePasswordVisibility2}
                            sx={{ color: "#5A5A5A" }}
                          >
                            {showPassword2 ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility color="#fff" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      input: { color: mode ? "#5A5A5A" : "" },
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
                  <Autocomplete
                    id="country-select-demo"
                    options={ContriesJson}
                    autoHighlight
                    fullWidth
                    getOptionLabel={(option) => option.label || ""}
                    onChange={(event, newValue) => setSelectedCountry(newValue)}
                    sx={{
                      "& .MuiAutocomplete-popupIndicator, .MuiAutocomplete-clearIndicator":
                        {
                          color: "white !important",
                        },
                    }}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{
                          "& > img": { mr: 2, flexShrink: 0 },
                          color: "black",
                        }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <CustomizeInput
                        {...params}
                        placeholder="Choose a country"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: selectedCountry ? (
                            <InputAdornment
                              position="start"
                              sx={{
                                display: "flex",
                                gap: "12px",
                              }}
                            >
                              <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
                                alt=""
                              />
                              <img
                                src={Line}
                                alt=""
                                style={{
                                  width: "15px",
                                  height: "30px",
                                  objectFit: "contain",
                                }}
                              />
                            </InputAdornment>
                          ) : null,
                        }}
                        sx={{
                          input: { color: mode ? "#5A5A5A" : "" },
                          "& label.Mui-focused": {
                            backgroundColor: mode ? "#FFFFFF" : "#000000",
                          },
                          "& label": {
                            backgroundColor: mode ? "#FFFFFF" : "#000000",
                            fontFamily: [
                              "Open Sans Variable",
                              "sans-serif",
                            ].join(","),
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: mode ? "#FFFFFF" : "#000000",
                          },
                        }}
                      />
                    )}
                  />
                  <CustomizeInput
                    placeholder="Referral code"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={mode ? code1 : refferal}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={Line}
                            alt=""
                            style={{
                              width: "15px",
                              height: "30px",
                              objectFit: "contain",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      input: { color: mode ? "#5A5A5A" : "" },
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
                  <Box
                    sx={{
                      pt: "20px",
                    }}
                  >
                    <CommonButton fullWidth>Register</CommonButton>
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
              )}
            </Grid>
            {!isLogin && (
              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      flexDirection: "column",
                      gap: { sm: "58px", xs: "90px" },
                    }}
                  >
                    <img
                      src={tick}
                      alt="Tick"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={tick}
                      alt="Tick"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={tick}
                      alt="Tick"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <img
                      src={tick}
                      alt="Tick"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <Box>
                      <Typography variant="h4">Instant registration</Typography>
                      <Typography variant="subtitle1" pt={1}>
                        No manual verification wait times, all you need is an
                        email address to get started.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4">250+ Payment methods</Typography>
                      <Typography variant="subtitle1" pt={1}>
                        Buy Bitcoin, Ethereum & popular Cryptos using over 250
                        other payment methods.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4">
                        Trade with escrow protection
                      </Typography>
                      <Typography variant="subtitle1" pt={1}>
                        During the trade the cryptocurrency is locked into a
                        secure escrow system.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4">
                        Exchange directly with no middleman
                      </Typography>
                      <Typography variant="subtitle1" pt={1}>
                        The buyer pays the seller directly, without any other
                        third parties involved.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Register;
