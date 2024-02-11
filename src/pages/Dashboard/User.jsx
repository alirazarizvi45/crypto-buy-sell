import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import profile from "../../assets/profile.webp";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CommonButton, BlackButton } from "../../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { CustomizeInput } from "../../components/CustomizeInput";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

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
              </Box>
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
                  backgroundColor: "#456114",
                  padding: "3px 30px",
                  borderRadius: "17px",
                }}
              >
                <VerifiedIcon fontSize="12px" />
                <Typography variant="subtitle1">Verified</Typography>
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
                    color:
                      theme.palette.mode === "light" ? "#181818" : "#ABE900",
                  }}
                >
                  197
                </span>
                <Typography variant="subtitle1">Total Transactions</Typography>
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
                    color:
                      theme.palette.mode === "light" ? "#181818" : "#ABE900",
                  }}
                >
                  100%
                </span>
                <Typography variant="subtitle1">
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
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h4" style={{ padding: "25px " }}>
              Comments
            </Typography>
            <Divider />
            <Box>
              {[...Array(5)].map((_, index) => (
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
                    <Typography
                      variant="subtitle1"
                      pb={2}
                      sx={{
                        color: "#D9D9D9",
                      }}
                    >
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
      </Grid>
    </Container>
  );
};

export default User;
