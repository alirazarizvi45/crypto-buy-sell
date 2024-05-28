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
import profile from "../../assets/Ellipse 25.png";

import daimondBg from "../../assets/daimondBg.png";
import cameraIcon from "../../assets/cameraIcon.png";
import DiamondIcon from "@mui/icons-material/Diamond";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CommonButton, BlackButton } from "../../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";

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
const vip2 = () => {
  const styles = {
    textShadow: "0px 4px 4px #ffffff",
  };
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
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
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
                justifyContent: "flex-start",
                alignItems: "center",
                mt: -6,
                pl: 0,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#DAAB07",
                  marginTop: "-40px",
                  ...styles, // Adding text shadow styles
                }}
              >
                GOLD
              </Typography>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  boxShadow: "0px 2px 8.1px 0px rgba(171, 233, 0, 0.33)",
                  position: "relative",
                  ml: 10, // Add left margin for spacing
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
                <Typography variant="h2">Alejandro Ortiz</Typography>
                <BorderColorIcon
                  style={{ color: "#ABE900", cursor: "pointer" }}
                />
              </Box>
              <Stack spacing={1} direction={"row"}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Typography variant="h4">(4.5)</Typography>
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
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8  , #FFFFFF )"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
              height: "300px",
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
            <Typography variant="h3" style={{ padding: "20px " }}>
              Your membership expires in:
            </Typography>
            <Box sx={{ textAlign: "center", mt: "15px" }}>
              <Typography variant="h1">29 : 22 : 15 : 59</Typography>
              <Typography variant="h5">days Hours minutes seconds</Typography>
            </Box>

            <Typography variant="h3" sx={{ mt: "10px", ml: "20px" }}>
              Remaining hours of highlights:
            </Typography>
            <Typography variant="h1" sx={{ textAlign: "center", pt: "10px" }}>
              5 hours
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: "50px", p: "30px" }}>
        <Typography variant="h5">
          1. Eligibility:Access and enjoyment of membership benefits are
          contingent upon meeting the following requirements:
        </Typography>
        <ul>
          <li>
            <Typography variant="h5">
              Completion rate exceeding 95% in relevant programs.
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              Overall rating surpassing 95% in associated evaluations.
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">
          2. Maintenance of Eligibility:Members must maintain the eligibility
          criteria outlined in point 1 to continue receiving membership
          benefits.
        </Typography>
        <Typography variant="">
          3. Freezing or Cancellation of Membership:a. In the event that a
          member fails to meet eligibility requirements, membership may be
          suspended or canceled.b. If a member engages in illegal activities or
          receives reports substantiating such actions, membership may be frozen
          or canceled without prior notice.
        </Typography>
        <Typography variant="h5">
          4. Reporting Illegal Activities:Members are obligated to promptly
          report any illegal activity they become aware of involving other
          members of the program.
        </Typography>
        <Typography variant="h5">
          5. Review and Appeal:a. Members have the right to appeal the freezing
          or cancellation of their membership by providing evidence supporting
          their case.b. All decisions regarding eligibility and discipline will
          be reviewed by the designated committee and will be final.
        </Typography>
        <Typography variant="h5">
          6. Changes to Terms and Conditions:The entity reserves the right to
          modify these terms and conditions at any time. Members will be
          notified of any changes through direct communication.
        </Typography>
        <Typography variant="h5">
          7. Confidentiality:Personal information provided by members will be
          treated confidentially and used solely for the purpose of
          administering the membership program.
        </Typography>
        <Typography variant="h5">
          8. Acceptance of Terms and Conditions:By participating in the
          membership program, members acknowledge and commit to comply with
          these terms and conditions in their entirety.
        </Typography>
      </Box>
    </Container>
  );
};

export default vip2;
