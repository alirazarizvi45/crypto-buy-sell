import React from "react";
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
  CircularProgress,
} from "@mui/material";
import profile from "../../assets/Ellipse 25.png";
import ShareIcon from "@mui/icons-material/Share";
import daimondBg from "../../assets/daimondBg.png";
import Aff from "../../assets/affiliate.png";
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

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      sx={{ width: 200, height: 200, color: "#111B1F" }}
    >
      {/* Invisible progress (background) */}
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          color: "#000000",
          position: "absolute",
          left: 0,
        }}
        size={200}
        thickness={6}
      />
      {/* Visible progress */}
      <CircularProgress
        variant="determinate"
        value={value}
        sx={{
          color: "#06350b",
          position: "absolute",
          left: 0,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
        size={200}
        thickness={6}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="#00E909"
          sx={{ fontSize: "20px" }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );  
};

const Affiliate = () => {
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
              height: "250px",
           
            }}
          >
            <Typography
              variant="h3"
              style={{ padding: "20px", textAlign: "center" }}
            >
              $100 USDT
            </Typography>
            <img src={Aff} alt="Affiliate" width="100%" />
          </Box>
          <Box sx={{ display: "flex" }}>
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
                height: "40px",
                width:{xs:"100%", md:"500px"},
                mt: "10px",
            
              }}
            >
              <Typography
               
                sx={{ paddingTop: "10px", textAlign: "center",fontSize:{xs:"10px", md:"15px"}}}
              >
                3GZyNU6ML6iybkEzzsq3GMmxa4VdYT1zHZ
              </Typography>
            </Box>
            <Box sx={{ padding: "20px", ml: "20px", color: "#ABE900" }}>
              <ShareIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12}>
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
              height: "400px",
              mt: "50px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "1px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#00E909 ",
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-track": {   
                backgroundColor: "#080D0E",
                borderRadius: "2px",
              },
            }}
          >
            <Box sx={{textAlign:"center"}}>
            <CircularProgressWithLabel value={40} />
            <Typography variant="h4">Transaction volume</Typography>
            <Typography  sx={{color:"#00E909",pt:"10px"}}>$1.500 USDT</Typography>
            </Box>
            <Box sx={{textAlign:"center"}}>
            <CircularProgressWithLabel value={40} />
            <Typography variant="h4">Transaction volume</Typography>
            <Typography  sx={{color:"#00E909",pt:"10px"}}>10</Typography>
            </Box>
            <Box sx={{textAlign:"center"}}>
            <CircularProgressWithLabel value={40} />
            <Typography variant="h4">Transaction volume</Typography>
            <Typography sx={{color:"#00E909",pt:"10px"}}>$1.500 PERK</Typography>
            </Box>  
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: "50px", p: "30px" }}>
        <Typography variant="h5">
          1. Participation in the Affiliate Program:By participating in the
          affiliate program, you agree to the following terms and conditions.
          Participation implies consent and compliance with all provisions
          outlined in this document.
        </Typography>

        <Typography variant="h5">
          2. Payment in PERK Tokens:Commissions and payments associated with the
          affiliate program will be exclusively made in PERK tokens. Program
          members must provide accurate and up-to-date information to receive
          corresponding payments.
        </Typography>

        <Typography variant="h5">
          3. Liability for Illegal or Suspicious Activities:a. The platform is
          not responsible for account blocks or terminations due to illegal or
          suspicious activities detected by competent authorities.b. Affiliates
          are responsible for conducting their promotional activities in an
          ethical and legal manner.
        </Typography>

        <Typography variant="h5">
          4. Suspension or Termination of Accounts:a. The platform reserves the
          right to suspend or terminate affiliate accounts in case of detecting
          illegal, fraudulent, or suspicious activities.b. Any action that
          violates applicable laws or the platform's terms of service may result
          in immediate termination of affiliation.
        </Typography>
        <Typography variant="">
          5. Commission Payouts:a. Generated commissions will be paid
          periodically in PERK tokens, in accordance with the terms set by the
          platform.b. The platform reserves the right to adjust commissions in
          case of errors, returns, or cancellations..
        </Typography>
        <Typography variant="h5">
          6. Proper Use of Affiliate Links:Affiliates must use the links
          provided by the platform appropriately and ethically. The use of
          deceptive tactics or spam may result in disqualification from the
          program.
        </Typography>
        <Typography variant="h5">
          7. Changes to Terms and Conditions:The platform reserves the right to
          modify these terms and conditions at any time. Affiliates will be
          notified of such changes through established communication channels.
        </Typography>
        <Typography variant="h5">
          8. Confidentiality:Information about the affiliate program and
          financial details is confidential. Affiliates must refrain from
          sharing confidential information with third parties.
        </Typography>
        <Typography variant="h5">
          9. Acceptance of Terms and Conditions:Ongoing participation in the
          affiliate program implies acceptance of these terms and conditions.
          Affiliates should regularly review this document to stay informed of
          any changes.
        </Typography>
        <Typography variant="h5">
          10. Contact:For inquiries or clarifications, affiliates can contact
          the support team through the communication channels provided by the
          platform. Participation in the affiliate program is subject to
          acceptance of these terms and conditions.
        </Typography>
      </Box>
    </Container>
  );
};

export default Affiliate;
