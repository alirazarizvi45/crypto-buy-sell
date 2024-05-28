import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import john from "../../../assets/CoinBit.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@emotion/react";

const FEDAPPROVESCards = () => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();
  const sliderSettings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    beforeChange: (currentSlide, nextSlide) => {
      setActiveSlide(nextSlide);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <ul
        style={{
          position: "absolute",
          bottom: "-50px",
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        {dots.map((dot, index) => {
          const isActive = index === activeSlide;
          const dotOpacity = 0.9 + index * 0.2;

          return (
            <li
              key={index}
              style={{
                margin: "0 5px",
              }}
            >
              <button
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background:
                    theme.palette.mode !== "light"
                      ? isActive
                        ? `linear-gradient(rgba(171, 233, 0,  ${dotOpacity}), rgba(171, 233, 0, ${
                            (index + 1) * 0.2
                          }))`
                        : `linear-gradient(rgba(255, 252, 255,  ${dotOpacity}), rgba(255, 255, 255, ${
                            (index + 1) * 0.2
                          }))`
                      : isActive
                      ? "#ABE900"
                      : "#000",
                }}
                onClick={() => {
                  sliderRef.current.slickGoTo(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    ),
  };

  const usersData = [
    {
      cityName: "New York Times",
      time: "01/01/2024",
      title: "FED APPROVES BITCOIN ETF",
      userImage: john,
      description:
        "After the US Securities and Exchange Commission (SEC) approved the first spot bitcoin exchange-traded fund (ETF), optimism for the market grew cryptographic.",
    },
    {
      cityName: "New York Times",
      time: "01/01/2024",
      title: "FED APPROVES BITCOIN ETF",
      userImage: john,
      description:
        "After the US Securities and Exchange Commission (SEC) approved the first spot bitcoin exchange-traded fund (ETF), optimism for the market grew cryptographic.",
    },
    {
      cityName: "New York Times",
      time: "01/01/2024",
      title: "FED APPROVES BITCOIN ETF",
      userImage: john,
      description:
        "After the US Securities and Exchange Commission (SEC) approved the first spot bitcoin exchange-traded fund (ETF), optimism for the market grew cryptographic.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "50px 0px 100px 0px",
        }}
      >
        <Container maxWidth="lg">
          <Box>
           
            <Slider {...sliderSettings} ref={sliderRef}>
              {usersData.map((user, index) => (
                <Box key={index} px={2}>
                  <Box
                    sx={{
                      background: "#ABE900",
                      border: "1px solid #545759",
                      borderRadius: "10px",
                      padding: "15px",
                      marginRight: "10px",
                    }}
                  >
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={12} md={7}>
                        <Typography variant="h4" sx={{ color: "black" }}>
                          {user.title}
                        </Typography>
                        <Typography sx={{ color: "black", fontSize: "12px" }}>
                          {user.cityName}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#181818",
                            fontSize: "12px",
                            pt: "20px",
                          }}
                        >
                          {user.description}
                        </Typography>
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: "12px",
                            pb: "12px ",
                            pt: "5px",
                          }}
                        >
                          {user.time}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              color: "black",
                              fontSize: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Read More{" "}
                            <ArrowForwardIcon
                              sx={{ marginLeft: 1, fontSize: "17px" }}
                            />
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={user.userImage}
                            alt="john"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FEDAPPROVESCards;
