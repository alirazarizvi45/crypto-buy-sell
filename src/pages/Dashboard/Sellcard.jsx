import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Rating,
  Container,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { CommonButton } from "../../components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

import profile from "../../assets/profile.webp";
import graph from "../../assets/graph.png";
import nequi from "../../assets/nequi.png";
import bancolombia from "../../assets/bancolombia.png";
import formkit_bitcoin from "../../assets/formkit_bitcoin.png";
import etherCrypto from "../../assets/etherCrypto.png";
import tetherCrypto from "../../assets/tetherCrypto.png";
import MaticCrypto from "../../assets/MaticCrypto.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CenteredCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "center",
});

const StyledContainer = styled("div")({
  width: "100%",
  height: "100%",
});

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  borderTop: "1px solid #74f511",
  borderBottom: "1px solid #74f511",
});

const StyledCardContent = styled(CardContent)({
  flex: 1,
  backgroundColor: " #111B1F",
  position: "relative",
});
const cryptocurrencies = [
  formkit_bitcoin,
  etherCrypto,
  tetherCrypto,
  MaticCrypto,
  etherCrypto,
  formkit_bitcoin,
  MaticCrypto,
  tetherCrypto,
];

const itemsPerPage = 4;

const Sellcard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptocurrencies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          gap: "15px",
        }}
      >
        <Typography variant="h2" pb={1}>
          sell
        </Typography>
        <IconButton
          sx={{
            backgroundColor: currentPage === 1 ? "#000000" : "#ABE900",
            color: currentPage === 1 ? "#ffffff" : "#000000",
            ml: "5px",
            width: "30px",
            height: "30px",
          }}
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor:
              indexOfLastItem >= cryptocurrencies.length
                ? "#000000"
                : "#ABE900",
            color:
              indexOfLastItem >= cryptocurrencies.length
                ? "#ffffff"
                : "#000000",
            width: "30px",
            height: "30px",
          }}
          disabled={indexOfLastItem >= cryptocurrencies.length}
          onClick={nextPage}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {currentItems.map((crypto, index) => (
          <Grid item xs={12} md={3} key={index}>
            <StyledContainer>
              <StyledCard>
                <StyledCardContent>
                  <CardMedia
                    component="img"
                    image={crypto}
                    sx={{
                      borderRadius: "50px",
                      width: "90px",
                      flexDirection: "row",
                      position: "absolute",
                      right: "-2%",
                      top: "14%",
                    }}
                  />

                  <Box
                    sx={{
                      background: "#ABE900",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",

                      padding: "20px 5px",
                      clipPath:
                        "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                    }}
                  >
                    <Typography variant="h5" fontSize="20px" color="#000000">
                      Limited Time
                    </Typography>
                    <Typography variant="h4" color="#000000">
                      $3.879
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={profile}
                      sx={{
                        borderRadius: "500px",
                        width: "40px",
                        flexDirection: "row",
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="white"
                        sx={{ marginLeft: "20px" }}
                      >
                        JUAN PEREZ
                      </Typography>
                      <Rating
                        name="user-rating"
                        value={5}
                        readOnly
                        sx={{ size: "xs" }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="#00A42E">
                    <FiberManualRecordIcon
                      sx={{
                        marginTop: "5px",
                        fontSize: "small",
                        color: "#00A42E",
                      }}
                    />{" "}
                    Online
                  </Typography>
                  <Box sx={{ marginBottom: 0 }}>
                    <Box
                      sx={{
                        height: "60px",
                        marginTop: "20px",
                        display: "flex",
                        marginBottom: "2%",
                      }}
                    >
                      {/* Box with Data 1 */}
                      <Box
                        sx={{
                          backgroundColor: "black",
                          flex: 1,
                          borderRadius: "5px",
                          padding: "5px",
                          display: "flex",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        <AccessTimeIcon sx={{ color: "white" }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#ABE900", marginLeft: "5px" }}
                        >
                          1 hour <br />
                          <span style={{ color: "white", fontSize: "8px" }}>
                            Transaction time
                          </span>
                        </Typography>
                      </Box>

                      {/* Box with Data 2 */}
                      <Box
                        sx={{
                          backgroundColor: "black",
                          flex: 1,
                          borderRadius: "5px",
                          padding: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <GppGoodOutlinedIcon sx={{ color: "white" }} />
                        <Typography
                          variant="body1"
                          sx={{ color: "#ABE900", marginLeft: "5px" }}
                        >
                          99% <br />
                          <span style={{ color: "white", fontSize: "10px" }}>
                            Secure
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "#D9D9D9" }}>
                      Payment Method
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={bancolombia}
                        alt="nequi"
                        style={{ width: "90px", height: "15px" }}
                      />
                      <img
                        src={nequi}
                        alt="nequi"
                        style={{ width: "90px", height: "15px" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "2%",
                      marginBottom: "4%",
                    }}
                  >
                    <Typography sx={{ color: "#00E909" }}>+180%</Typography>
                    <CardMedia
                      component="img"
                      image={graph}
                      sx={{
                        width: "100%",
                        flexDirection: "row",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="body2"
                    color="white"
                  >
                    Limits: $1.00 - $100.00
                  </Typography>
                  <CenteredCardActions sx={{ marginTop: "10px" }}>
                    <CommonButton fullWidth>Exchange</CommonButton>
                  </CenteredCardActions>
                </StyledCardContent>
              </StyledCard>
            </StyledContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Sellcard;
