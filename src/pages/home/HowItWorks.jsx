import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import howitworks from "../../assets/howitworks.png";
import { CommonButton } from "../../components";
import john from "../../assets/john.png";
import stars from "../../assets/stars.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();
  const sliderSettings = {
    dots: true,
    // infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
                  background: isActive
                    ? `linear-gradient(rgba(171, 233, 0,  ${dotOpacity}), rgba(171, 233, 0, ${
                        (index + 1) * 0.2
                      }))`
                    : `linear-gradient(rgba(255,252, 255,  ${dotOpacity}), rgba(255,255,255, ${
                        (index + 1) * 0.2
                      }))`,
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

  let slider;

  const data = [
    {
      title: "1",
      heading: "Register",
      description:
        "Create an account on LocalCoinSwap with instant sign-up and get your free Bitcoin wallet.",
    },
    {
      title: "2",
      heading: "Search Offers",
      description:
        "Use the search bar to find the best offers. Use the filters to narrow down the perfect offer.",
    },
    {
      title: "3",
      heading: "Start a Trade",
      description:
        "Once you find the right offer, check the terms. Then start the trade and begin chatting with the seller",
    },
  ];

  const usersData = [
    {
      userImage: john,

      title: "John",
      starImage: stars,

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      userImage: john,

      title: "John",
      starImage: stars,

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      userImage: john,

      title: "John",
      starImage: stars,

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${howitworks})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#070C0E",
          minHeight: "100vh",
          padding: "50px 0px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="h2" pb={2}>
            How it
            <span style={{ color: "#ABE900" }}> works? </span>
          </Typography>
          <Typography variant="subtitle1" color="#D9D9D9" pb={2}>
            Trade with confidence on the first P2P exchange market.
          </Typography>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={4} mt={4}>
            {data.map((item, index) => (
              <Grid item md={4} xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      background:
                        "linear-gradient(to bottom, #24330C, #16200D)",
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
                    {item.title}
                  </Typography>
                  <Typography variant="h4" pb={2}>
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#D9D9D9"
                    textAlign="center"
                    pb={2}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <CommonButton>Start Trading</CommonButton>
          </Box>
        </Container>

        {/* *********** What our users are saying ******************* */}

        <Container maxWidth="lg">
          <Box>
            <Box
              sx={{
                textAlign: "center",
                mt: "100px",
              }}
            >
              <Typography variant="h2" pb={1}>
                What our <span style={{ color: "#ABE900" }}> users </span>
                are saying
              </Typography>
              <Typography variant="subtitle1" color="#D9D9D9" pb={6}>
                A trading experience people love to talk about
              </Typography>
            </Box>
            <Slider {...sliderSettings} ref={sliderRef}>
              {console.log(activeSlide, "activeSlide")}
              {usersData.map((user, index) => (
                <Box sx={{}} key={index}>
                  <Box
                    sx={{
                      background:
                        activeSlide === index ? "#ABE900" : "transparent",

                      border: "1px solid #545759",
                      borderRadius: activeSlide === index ? "30px" : "20px",
                      padding: "20px 20px",
                      margin: "1.5rem 1.5rem",
                      transform:
                        activeSlide === index ? "scale(1.1)" : "scale(1)", // Scaling effect
                      transition: "transform 0.3s ease-in-out", // Adding a smooth transition
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <img
                          src={user.userImage}
                          alt="john"
                          sizes=""
                          style={{
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
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: activeSlide === index ? "#000000" : "#fff",
                          }}
                        >
                          {user.title}
                        </Typography>

                        <img
                          src={user.starImage}
                          alt="john"
                          sizes=""
                          style={{
                            width: "100%",
                            height: "30%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        pb={2}
                        sx={{
                          color: activeSlide === index ? "#000000" : "#D9D9D9",
                        }}
                      >
                        {user.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
        {/* *********** Frequently Asked Questions ******************* */}
        <Container maxWidth="md">
          <Box>
            <Box
              sx={{
                textAlign: "center",
                mt: "100px",
              }}
            >
              <Typography variant="h2" pb={1}>
                Frequently Asked{" "}
                <span style={{ color: "#ABE900" }}>Questions</span>
              </Typography>
            </Box>
            <Accordion
              defaultExpanded
              sx={{ background: "#111B1F", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" fontWeight="bold">
                  What is LocalCoinSwap?
                </Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  width: "100%",

                  borderBottom: "1.5px solid #737373D4 ",
                }}
              />
              <AccordionDetails>
                <Typography variant="subtitle1">
                  LocalCoinSwap is the most popular non-custodial cryptocurrency
                  marketplace that enables you to buy bitcoin and trade the most
                  popular types of cryptocurrency with other traders from around
                  the world. Buy bitcoin instantly with bank transfer, cash, and
                  hundreds of different payment methods. Trading P2P on
                  LocalCoinSwap is the easiest way to buy bitcoin and expand
                  your cryptocurrency portfolio.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              defaultExpanded
              sx={{ background: "#111B1F", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" fontWeight="bold">
                  What Do I Need to Get Started?
                </Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  width: "100%",

                  borderBottom: "1.5px solid #737373D4 ",
                }}
              />
              <AccordionDetails>
                <Typography variant="subtitle1">
                  LocalCoinSwap is the most popular non-custodial cryptocurrency
                  marketplace that enables you to buy bitcoin and trade the most
                  popular types of cryptocurrency with other traders from around
                  the world. Buy bitcoin instantly with bank transfer, cash, and
                  hundreds of different payment methods. Trading P2P on
                  LocalCoinSwap is the easiest way to buy bitcoin and expand
                  your cryptocurrency portfolio.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              defaultExpanded
              sx={{ background: "#111B1F", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" fontWeight="bold">
                  Is LocalCoinSwap Secure?
                </Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  width: "100%",

                  borderBottom: "1.5px solid #737373D4 ",
                }}
              />
              <AccordionDetails>
                <Typography variant="subtitle1">
                  LocalCoinSwap is the most popular non-custodial cryptocurrency
                  marketplace that enables you to buy bitcoin and trade the most
                  popular types of cryptocurrency with other traders from around
                  the world. Buy bitcoin instantly with bank transfer, cash, and
                  hundreds of different payment methods. Trading P2P on
                  LocalCoinSwap is the easiest way to buy bitcoin and expand
                  your cryptocurrency portfolio.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              defaultExpanded
              sx={{ background: "#111B1F", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" fontWeight="bold">
                  Can I Trade Bitcoin for Cash?
                </Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  width: "100%",

                  borderBottom: "1.5px solid #737373D4 ",
                }}
              />
              <AccordionDetails>
                <Typography variant="subtitle1">
                  LocalCoinSwap is the most popular non-custodial cryptocurrency
                  marketplace that enables you to buy bitcoin and trade the most
                  popular types of cryptocurrency with other traders from around
                  the world. Buy bitcoin instantly with bank transfer, cash, and
                  hundreds of different payment methods. Trading P2P on
                  LocalCoinSwap is the easiest way to buy bitcoin and expand
                  your cryptocurrency portfolio.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
      <Box>
        <Divider
          sx={{
            width: "100%",

            borderBottom: "1.5px solid #737373D4 ",
          }}
        />
      </Box>
    </>
  );
};

export default HowItWorks;
