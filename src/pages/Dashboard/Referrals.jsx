import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  CircularProgress,
  Input,
  TextField,
  InputLabel,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import scan from "../../assets/scan.png";
import { CommonButton } from "../../components";

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

const Referrals = () => {
  const theme = useTheme();
  const [isMarked, setIsMarked] = useState(false);

  const handleMarkClick = () => {
    setIsMarked(!isMarked);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "160px", mb: "20px" }}>
      <Grid container gap={5} justifyContent={"center"}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
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
                flexDirection: "column",
                px: "30px",
                py: "20px",
                gap: "10px",
                pb: "40px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#070C0E",
                  padding: "10px",
                  borderTop: "1px solid #00E909",
                  borderRadius: "5px",
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Referral Balance</Typography>
                  <Typography>0.00 USD</Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",

                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={handleMarkClick}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    bgcolor: "#070C0E",
                    border: `2px solid #00E909`,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "6px",
                      height: "6px",
                      backgroundColor: isMarked ? "#00E909" : "transparent",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />
                <Typography variant="h5" sx={{ ml: "7px" }}>
                  Automatic Payment
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ fontSize: "14px" }}>
                If enabled, you will be considered for monthly payment. You will
                be charged a small blockchain fee for the transaction, so it is
                a good idea to let the funds accumulate
              </Typography>

              <Box sx={{ borderRadius: "20px" }}>
                <InputLabel shrink sx={{ color: "#FFFFFF" }}>
                  <Typography variant="h5">Wallet</Typography>
                </InputLabel>
                <TextField
                  placeholder="$0.00"
                  sx={{ width: "100%", bgcolor: "#070C0E" }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontSize: "14px ", pb: "15px" }}>
                Enter a valid WALLET address to receive a referral commission.
              </Typography>

              <CommonButton>Collect</CommonButton>
            </Box>
          </Box>
        </Grid>

        <Grid item md={5} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",
              // height: "370px",
              padding: "15px",
            }}
          >
            <Typography variant="h5">Invite Now</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <img src={scan} alt="scan" width="170px" height="170px" />
            </Box>
            <Box sx={{ fontSize: "14px", padding: "20px" }}>
              <Typography variant="h5" sx={{ pb: "15px" }}>
                Anyone who scans this QR code before registering will be
                credited as your reference
              </Typography>
              <Box sx={{ display: "flex", gap: { xs: "20px", md: "50px" } }}>
                <Box sx={{ border: "1px solid" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      padding: "7px",
                      textAlign: "center",
                    }}
                  >
                    3GZyNU6ML6iybkEzzsq3GMmxa4VdYT1zHZ
                  </Typography>
                </Box>
                <ShareIcon sx={{ color: "#ABE900" }} />
              </Box>
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
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",

              mt: "50px",

              px: "50px",
              py: "20px",
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
            <Typography variant="h4">How does it work?</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(to bottom, #24330C, #16200D)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    fontSize: "8rem !important",
                    textStroke: "1px #76A104",
                    WebkitTextStroke: "1px #76A104",
                    MozTextStroke: "1px #76A104",
                    MsTextStroke: "1px #76A104",
                  }}
                >
                  1
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  {" "}
                  Anyone who registers a new Swap{" "}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  {" "}
                  account with your code is your{" "}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  arbitrator
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(to bottom, #24330C, #16200D)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    fontSize: "8rem !important",
                    textStroke: "1px #76A104",
                    WebkitTextStroke: "1px #76A104",
                    MozTextStroke: "1px #76A104",
                    MsTextStroke: "1px #76A104",
                  }}
                >
                  2
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  Receive 10% of the escrow fee for{" "}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  {" "}
                  trades completed by arbitrators{" "}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  (20%if you refer both buyer and seller)..
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(to bottom, #24330C, #16200D)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    fontSize: "8rem !important",
                    textStroke: "1px #76A104",
                    WebkitTextStroke: "1px #76A104",
                    MozTextStroke: "1px #76A104",
                    MsTextStroke: "1px #76A104",
                  }}
                >
                  3
                </Typography>

                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  {" "}
                  Get paid on the first day of each{" "}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  {" "}
                  month if you accept payment and
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "14px" }}>
                  are eligible to receive payment.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to left, #F8F8F8, #FFFFFF)"
                  : "linear-gradient(to bottom,#111B1F,#111B1F)",
              border:
                theme.palette.mode === "light"
                  ? "0.7px solid #FFFFFF"
                  : "1px solid #696C6D",
              boxShadow: "0px 4px 15px 0px rgba(154, 154, 154, 0.3)",
              borderRadius: "10px",

              mt: "50px",

              px: "50px",
              py: "20px",
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
            <Typography variant="h4" sx={{ pb: "10px", fontSize: "18px" }}>
              Referral program: terms and conditions
            </Typography>
            <Typography variant="h5" sx={{ pb: "10px", fontSize: "14px" }}>
              Swap has updated the referral program to ensure that referrals get
              more commissions, more transparency on earnings and can earn
              directly into their BTC wallets without escrow and reduce
              blockchain transaction fees.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              Referring users
            </Typography>
            <Typography variant="h5" sx={{ pb: "10px", fontSize: "14px" }}>
              For every user who signs up to Swap with your referral code or
              link, you will receive a commission on the fees that arise from
              the transactions they complete. This means you earn commissions
              whether your referrals buy or sell.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              Commission structure
            </Typography>
            <Typography variant="h5" sx={{ pb: "10px", fontSize: "14px" }}>
              You earn 10% of the trade fees for each user you refer. That's up
              to 20% of the fees for each trade if you refer both the buyer and
              the seller. All commissions are calculated in BTC at the current
              market price at the time of the trade.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              Example
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              User x registers at Swap with your referral link.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              They buy 1 BTC from user y and are charged a 1% trading fee. You
              receive 10% of that fee, resulting in a commission of 0.001 BTC.
              The next week they buy another 2 BTC from the user y, for which
              they receive another 0.002 BTC commission.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              One week later, the user buys 60,000 USDC from user y. This is
              equivalent to 1 BTC at the time of the transaction, for which he
              receives an additional commission of 0.001 BTC.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              At the end of this month, he chooses to withdraw his commission
              balance and 0.004 BTC (minus a blockchain withdrawal fee) is sent
              to his Swap non-custodial BTC wallet.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px", pt: "10px" }}>
              If you had also referred the user and the platform, you would
              receive a 20% referral fee for each transaction, resulting in a
              commission balance of 0.008 BTC at the end of the period.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px", pt: "10px" }}>
              Withdrawing your commission
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              All commissions are accrued and paid in BTC. Once a month,
              referral commissions are paid only to those who elect to receive
              payment. Commission balances that are not paid will be carried
              over to the following month.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px", pt: "10px" }}>
              You can choose whether you wish to be paid on the next payment
              date by activating the Opt-in for next payment option. As payments
              are sent to blockchain users, you are required to pay a blockchain
              transaction fee to receive payments. For this reason, it may make
              sense for you not to process your payments every month.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px", pt: "10px" }}>
              You must have a minimum of USD $100 in BTC in order to withdraw.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px", pt: "10px" }}>
              Example
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              In month 1 you earn 0.001 BTC in commissions.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              In month 2 you earn 0.0035 BTC in commissions
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              You choose to get paid at the end of month 2 and receive 0.0045
              BTC (minus the blockchain transaction fee).
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              In month 3 you receive 0.005 BTC in commissions.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              You choose to get paid again at the end of month 3 and receive
              0.005 BTC (minus the blockchain transaction fee).
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              Rules
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              You may not engage in illegal activities related to the Swap
              platform or referral program.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              You may not use copyrighted material to attract users to your
              referral links.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              You may not use spam to attract users to your referral links.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              LocalCoinSwap reserves the right to adjust the rules of the
              referral program.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              LocalCoinSwap does not allow any user to self-refer through
              multiple accounts. When such activity is detected, all referrals
              will be cancelled and all referral commissions for the referrals'
              accounts will be cancelled.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              By participating in Swap's referral program, you accept and agree
              to the Privacy Policy and Terms of Service, even if they may be
              amended, supplemented or otherwise altered from time to time.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "14px",pt:"10" }}>
            Translated with DeepL.com (free version)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Referrals;
