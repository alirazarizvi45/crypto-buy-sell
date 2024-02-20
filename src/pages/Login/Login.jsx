import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
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
import rate1 from "../../assets/rate.png";
import lock1 from "../../assets/loock.png";
import refferal from "../../assets/refferal.png";
import loginBg from "../../assets/loginBg.png";
import facebookblack from "../../assets/facebookblack.png";
import googleblack from "../../assets/googleblack.png";
import ContriesJson from "../JsonFiles/Country.json";
import { CommonButton } from "../../components";
import tick from "../../assets/tick.png";
import { Link, useLocation } from "react-router-dom";

const Login = ({ mode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const HandleLogin = () => {
    setIsLogin(true);
  };
  const HandleRegister = () => {
    setIsLogin(false);
  };
  const handlePasswordVisibility1 = () => {
    setShowPassword((prevShowPassword1) => !prevShowPassword1);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${registerbg})`,
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
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
                    color: "#fff",
                    background:
                      location.pathname === "/Login" ? "#ABE900" : "#070C0E",
                    "&:hover": {
                      background:
                        location.pathname === "/Login" ? "#ABE900" : "#070C0E",
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
                    fontWeight: "bold",
                    color: mode ? "#000000" : "#fff",
                    background:
                      location.pathname === "/Login"
                        ? mode
                          ? "#EFEFEF"
                          : "#070C0E"
                        : "#ABE900",
                    "&:hover": {
                      background:
                        location.pathname === "/Login"
                          ? mode
                            ? "#EFEFEF"
                            : "#070C0E"
                          : "#ABE900",
                    },
                    padding: "5px 20px",
                  }}
                  // onClick={HandleRegister}
                >
                  Register
                </Button>
              </Box>

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
                  type={showPassword ? "text" : "password"}
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
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

                <Box
                  sx={{
                    pt: "20px",
                  }}
                >
                  <CommonButton style={{ padding: "10px" }} fullWidth>
                    Login
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

export default Login;
