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
import googleblack from "../../assets/googleblack.png";
import ContriesJson from "../JsonFiles/Country.json";
import { CommonButton } from "../../components";
const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

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
          backgroundImage: `url(${registerbg})`,
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% ",
          width: "100%",
          backgroundColor: "#070C0E",
          minHeight: "100vh ",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingTop: "100px" }}>
          <Grid container sx={{ padding: "20px 0px" }}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                background: `linear-gradient(to bottom,#262A2C,#1F2425)`,
                borderRadius: "20px",
                border: "1px solid #696C6D",
                padding: "25px",
              }}
            >
              <Box>
                <Typography variant="h2">
                  Create your
                  <span style={{ color: "#ABE900" }}> Account </span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#D9D9D9",
                    marginTop: "10px",
                  }}
                >
                  Setting up an account takes less than 1 minute.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#070C0E",
                  padding: "10px",
                  maxWidth: "40%",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "10px 0px",
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    background: isLogin ? "#ABE900" : "#070C0E",
                    "&:hover": {
                      backgroundColor: isLogin ? "#ABE900" : "#070C0E",
                    },
                    padding: "5px 20px",
                  }}
                  onClick={HandleLogin}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: "#fff",
                    background: !isLogin ? "#ABE900" : "#070C0E",
                    "&:hover": {
                      backgroundColor: !isLogin ? "#ABE900" : "#070C0E",
                    },
                    padding: "5px 20px",
                  }}
                  onClick={HandleRegister}
                >
                  Register
                </Button>
              </Box>
              {isLogin ? (
                <Box>
                  <h1>Login</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  rem tenetur explicabo incidunt reiciendis rerum doloremque
                  distinctio maiores ad. Error?
                </Box>
              ) : (
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
                            src={att}
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
                            src={lock}
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
                            src={lock}
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
                          "& label.Mui-focused": {
                            backgroundColor: "#000000",
                          },
                          "& label": {
                            fontFamily: "Russo One",
                            backgroundColor: "#000000",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#000000",
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
                            src={refferal}
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
                    <img
                      src={facebookblack}
                      alt="FaceBook"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <img
                      src={googleblack}
                      alt="FaceBook"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Register;
