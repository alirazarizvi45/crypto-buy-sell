import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Rating,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import profile from "../../assets/profile.webp";

import daimondBg from "../../assets/daimondBg.png";
import cameraIcon from "../../assets/cameraIcon.png";
import DiamondIcon from "@mui/icons-material/Diamond";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CommonButton, BlackButton } from "../../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { CustomizeInput } from "../../components/CustomizeInput";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import profileIcon1 from "../../assets/profileIcon1.png";
import profileIcon2 from "../../assets/profileIcon2.png";
import profileIcon3 from "../../assets/profileIcon3.png";
import profileIcon4 from "../../assets/profileIcon4.png";
import profileIcon5 from "../../assets/profileIcon5.png";
import CustomizedSteppers from "./CustomizedSteppers";

const data = [
  {
    label: "Outstanding",
    hours: ["0 hours", "0 hours1", "hours3", "hours8", "hours"],
  },
  { label: "Commission", hours: ["-0%", "-5%", "-10%", "-17%", "-25%"] },
  {
    label: "Token",
    hours: [
      "0 USDT IN prk TOKEN",
      "0 USDT IN prk TOKEN",
      "0 USDT IN prk TOKEN",
      "0 USDT IN prk TOKEN",
      "0 USDT IN prk TOKEN",
    ],
  },
];
const steps = [
  { price: "$0", description: "" },
  { price: "$1000", description: "SALES AND PURCHASES5 COUNTERPARTIES" },
  {
    price: "$5000",
    description: "SALES AND PURCHASES COMPLETION HIGHER THAN 95%",
  },
  {
    price: "$15000",
    description: "SALES AND PURCHASE SCOMPLETION HIGHER THAN 97%",
  },
  {
    price: "$25000",
    description: "SALES AND PURCHASES COMPLETION HIGHER THAN 99%",
  },
];
const User = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ mt: "160px", mb: "20px" }}>
      <Grid container gap={3} justifyContent={"center"}>
        <Grid item md={5} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#262A2C,#1F2425)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: -6,
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  boxShadow: "0px 2px 8.1px 0px rgba(171, 233, 0, 0.33)",
                  position: "relative",
                }}
              >
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    borderRadius: "100%",
                    width: "99px",
                    height: "99px",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "2px",
                    right: "-3px",
                    width: "35px",
                    height: "35px",
                    backgroundImage: `url(${cameraIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "-53px",
                marginLeft: "40px",
                position: "relative",
              }}
            >
              <img
                src={daimondBg}
                alt={daimondBg}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <DiamondIcon
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "13px",
                  color: "#000",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                height: "250px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="h2">Alejandro ortiz</Typography>
                <BorderColorIcon
                  style={{ color: "#ABE900", cursor: "pointer" }}
                />
              </Box>
              <Stack spacing={1} direction={"row"}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Typography variant="h4">(4. 8)</Typography>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor:
                    theme.palette.mode === "light" ? "#B6EB25" : "#456114",

                  padding: "3px 30px",
                  borderRadius: "17px",
                }}
              >
                <VerifiedIcon
                  fontSize="12px"
                  sx={{
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.mode === "light" ? "#000" : "",
                  }}
                >
                  Verified
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  my: 4,
                }}
              >
                <CommonButton>Trust Trader</CommonButton>
                <BlackButton>Block Trader</BlackButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 3,
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#262A2C,#1F2425)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h4" style={{ padding: "25px " }}>
              Trader Details
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#070C0E",
                  display: "flex",
                  py: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px !important",
                  width: { xs: "150px", sm: "250px", md: "210px" },
                  border: "1px solid #ABE900 ",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#ABE900",
                  }}
                >
                  197
                </span>
                <Typography variant="subtitle1" color="#FFFFFF">
                  Total Transactions
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#070C0E",
                  display: "flex",
                  py: 1,

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px !important",
                  width: { xs: "180px", sm: "250px", md: "210px" },
                  border: "1px solid #ABE900 ",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#ABE900",
                  }}
                >
                  100%
                </span>
                <Typography variant="subtitle1" color="#FFFFFF">
                  Completed Transactions
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: { xs: "15px", md: "25px" },
              }}
            >
              <Box
                sx={{
                  my: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Member Since:</Typography>
                <CustomizeInput
                  defaultValue={"12/Nov/2001"}
                  sx={{
                    width: { xs: "200px", sm: "60%", md: "250px" },
                    "& input": {
                      padding: "10px",
                      color: theme.palette.mode === "light" ? "#676767" : "",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  py: "12px",
                  display: "flex",
                  alignItems: "center",

                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4"> Trusted by:</Typography>
                <CustomizeInput
                  defaultValue={"0 Traders"}
                  sx={{
                    width: { xs: "200px", sm: "60%", md: "250px" },
                    "& input": {
                      padding: "10px",
                      color: theme.palette.mode === "light" ? "#676767" : "",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  py: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Blocked by: </Typography>
                <CustomizeInput
                  defaultValue={"0 Traders"}
                  sx={{
                    width: { xs: "200px", sm: "60%", md: "250px" },
                    "& input": {
                      padding: "10px",
                      color: theme.palette.mode === "light" ? "#676767" : "",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  py: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Time Zone:</Typography>
                <CustomizeInput
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" sx={{ color: "#5A5A5A" }}>
                          <ModeEditOutlineIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  defaultValue={"America/Bogota"}
                  sx={{
                    width: { xs: "200px", sm: "60%", md: "250px" },
                    "& input": {
                      padding: "10px",
                      color: theme.palette.mode === "light" ? "#676767" : "",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  py: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Language Spoken:</Typography>
                <CustomizeInput
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" sx={{ color: "#5A5A5A" }}>
                          <ModeEditOutlineIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  defaultValue={"English"}
                  sx={{
                    width: { xs: "200px", sm: "60%", md: "250px" },
                    "& input": {
                      padding: "10px",
                      color: theme.palette.mode === "light" ? "#676767" : "",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  py: "12px",
                }}
              >
                <CommonButton fullWidth>See Comments</CommonButton>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#262A2C,#1F2425)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
              height: "923px",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ABE900",
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#080D0E",
                borderRadius: "2px",
              },
            }}
          >
            <Typography variant="h4" style={{ padding: "25px " }}>
              Comments
            </Typography>
            <Divider />
            <Box>
              {[...Array(9)].map((_, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      padding: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "100%",
                      }}
                    >
                      <img
                        src={profile}
                        alt="john"
                        sizes=""
                        style={{
                          borderRadius: "100%",
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
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h4">moon</Typography>

                      <Stack spacing={1} direction={"row"}>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                        <Typography variant="h4">(4. 8)</Typography>
                      </Stack>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      px: "20px",
                    }}
                  >
                    <Typography variant="subtitle1" pb={2} sx={{}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec sem eget libero sodales accumsan.
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item md={11.3} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#262A2C,#1F2425)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
              // height: "500",
            }}
          >
            <Typography variant="h4" style={{ padding: "25px " }}>
              LOYALTY PROGRAM
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                gap: "10px",
                textAlign: { xs: "center", sm: "center", md: "left" },
                padding: "25px ",
              }}
            >
              <Box>
                <Typography variant="h4">Requirements</Typography>
                <Typography variant="subtitle1">
                  Volume of transactions in the month.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "none", sm: "100%", md: "100%" },
                }}
              >
                <Stack
                  ml={3}
                  spacing={{ xs: 2, sm: 4, md: 8 }}
                  direction={{ xs: "column", sm: "row", md: "row" }}
                >
                  <Box>
                    <img
                      src={profileIcon5}
                      alt="john"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h5">P2P Trailblazer</Typography>
                  </Box>
                  <Box>
                    <img
                      src={profileIcon4}
                      alt="john"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h5">Peer Pioneer</Typography>
                  </Box>
                  <Box>
                    <img
                      src={profileIcon3}
                      alt="john"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h5">Master Matcher</Typography>
                  </Box>
                  <Box>
                    <img
                      src={profileIcon2}
                      alt="john"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h5">Elite Exchanger</Typography>
                  </Box>
                  <Box>
                    <img
                      src={profileIcon1}
                      alt="john"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h5">Elite Exchanger</Typography>
                  </Box>
                </Stack>
                <Box>
                  <Stack sx={{ width: "100%", pt: 2 }}>
                    {/* <Stepper alternativeLabel activeStep={1}>
                      {steps.map((step, index) => (
                        <Step key={index}  >
                          <StepLabel
                          
                          >
                            <Box>
                              <Typography variant="h5">
                                {step.price}{" "}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontSize: {
                                    xs: "8px",
                                    sm: "10px",
                                    md: "0.875rem",
                                  },
                                }}
                              >
                                {step.description}
                              </Typography>
                            </Box>
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper> */}
                    <CustomizedSteppers steps={steps} />
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Box sx={{ pl: "25px " }}>
                <Typography variant="h4">Requirements</Typography>
              </Box>
              <Box
                sx={{
                  borderBottom: `1px solid ${
                    theme.palette.mode === "light" ? "#000" : "#fff"
                  }`,
                  width: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                padding: "25px ",
              }}
            >
              <TableContainer
                sx={{
                  overflowX: "auto",
                  "&::-webkit-scrollbar": {
                    width: "2px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ABE900",
                    borderRadius: "2px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#080D0E",
                    borderRadius: "2px",
                  },
                }}
              >
                <Table>
                  <TableBody>
                    {data.map((row, rowIndex) => (
                      <TableRow key={rowIndex} sx={{ borderBottom: "none" }}>
                        <TableCell
                          sx={{
                            borderBottom: "none",
                            fontFamily: ["Kanit", "sans-serif"].join(","),
                            color:
                              theme.palette.mode === "light"
                                ? "#404040"
                                : "#D9D9D9",
                            fontSize: "1rem",
                            fontWeight: 400,
                          }}
                        >
                          {row.label}
                        </TableCell>
                        {row.hours.map((hour, index) => (
                          <TableCell
                            key={index}
                            align="center"
                            sx={{
                              width: "135px",
                              borderBottom: "none",
                              fontFamily: ["Inter Variable", "sans-serif"].join(
                                ","
                              ),
                              color:
                                theme.palette.mode === "light"
                                  ? "#404040"
                                  : "#D9D9D9",
                              fontSize: "0.9rem",
                              fontWeight: 400,
                            }}
                          >
                            {hour}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box>
              <List>
                <ListItem>
                  <Typography variant="subtitle1">
                    • MINIMUM ACTIVITY ON THE PLATFORM: 5 TRANSACTIONS
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    • TRANSITIONAL VOLUME
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    • MINIMUM REPUTATION OF 80%
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    • YOU CAN CLASSIFY THE PROGRAM FROM THE SECOND MONTH
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
