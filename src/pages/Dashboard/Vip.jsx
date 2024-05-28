import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CommonButton from "../../components/CommonButton";
import Vip2 from "./vip2";

const Vip = ({mode}) => {
  const styles = {
    textShadow: "0px 4px 4px #ffffff",
  };
  return (
    <>
    <Container maxWidth="lg" sx={{ paddingTop: "100px" }}>
      <TableContainer
        component={Paper}
        sx={{ bgcolor:mode ? "#FFFFFF":"#111B1F", borderRadius: "20px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#DAAB07",
                    marginTop: "-25px",

                    ...styles, // Adding text shadow styles
                  }}
                >
                  GOLD
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF"}}>
                  30 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  180 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  365 days
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell>
                <Typography  sx={{ fontSize: "16px" }}>
                  8 hours of highlights per month
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px" }}>
                  8 hours of highlights per month
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px" }}>
                  8 hours of highlights per month
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Token</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Earning From Referrals</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                17% referral commission on membership and featured packages.
              </TableCell>
              <TableCell sx={{ fontSize: "16px" ,color:"#FFFFFF"}}>
                17% referral commission on membership and featured packages.
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                17% referral commission on membership and featured packages.{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{color:"#FFFFFF"}}>Tools</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{ marginTop: "-60px",color:"#FFFFFF" }}>
                  Cost
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$50 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$250 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$450 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
            </TableRow>

            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#111B1F", marginTop: "100px", borderRadius: "15px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#FF7337",
                    marginTop: "-25px",

                    ...styles, // Adding text shadow styles
                  }}
                >
                  PREMIUM
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  30 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  180 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  365 days
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell>
                <Typography  sx={{ fontSize: "16px" }}>
                  5 hours of highlights per month
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px" }}>
                  5 hours of highlights per montht
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px" }}>
                  5 hours of highlights per month
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Token</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Earning From Referrals</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                15% commission on the membership purchase of your referrals
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                15% commission on the membership purchase of your referrals
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                15% commission on the membership purchase of your referrals
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Tools</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{ marginTop: "-60px",color:"#FFFFFF" }}>
                  Cost
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$75 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$375 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$675 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
            </TableRow>

            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#111B1F", borderRadius: "20px", marginTop: "100px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#498CB2",
                    marginTop: "-25px",

                    ...styles, // Adding text shadow styles
                  }}
                >
                  Business
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  30 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  180 days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h1" sx={{ paddingTop: "40px",color:"#FFFFFF" }}>
                  365 days
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell>
                <Typography  sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                  15 hours of highlights per month
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                  15 hours of highlights per month
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                  15 hours of highlights per month
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{color:"#FFFFFF"}}>Token</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                5% of Membership in Token
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{color:"#FFFFFF"}}>Outstanding</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                Preferential customer service
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Earning From Referrals</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                21% referral commission on membership and featured packages.
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                21% referral commission on membership and featured packages.
              </TableCell>
              <TableCell sx={{ fontSize: "16px" ,color:"#FFFFFF"}}>
                21% referral commission on membership and featured packages.{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4"sx={{color:"#FFFFFF"}}>Tools</Typography>
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
              <TableCell sx={{ fontSize: "16px",color:"#FFFFFF" }}>
                VIP Arbitrage Tools
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" sx={{ marginTop: "-60px",color:"#FFFFFF" }}>
                  Cost
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$125 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$625 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h3">$1.125 USDT</Typography>
                <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <CommonButton>Buy</CommonButton>
                </Box>
              </TableCell>
            </TableRow>

            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    <Vip2/>
    </>
  );
};

export default Vip;
