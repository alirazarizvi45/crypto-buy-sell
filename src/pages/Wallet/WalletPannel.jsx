import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Portfolio from "./Portfolio";
import SendAndReceive from "./SendAndReceive";

const WalletPannel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabContent = [<Portfolio />, <SendAndReceive />];
  const hoverStyle = {
    "&:hover": {
      bgcolor: "#3D5509",
    },
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "150px",
          backgroundColor: "#070C0E",
        }}
      >
        <Box sx={{ flexGrow: 1, mx: "auto" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            textColor="#ffffff"
            indicatorColor="transparent"
          >
            <Tab
              label="Portfolio"
              sx={{
                border: value === 0 ? "1px solid #57AA04" : "",
                borderBottom: "none",
                bgcolor: value === 0 ? "#3D5509" : "",
                ...hoverStyle,
                display: "flex",
                justifyContent: "flex-start",
                padding: "20px",
                borderRadius: "10px 10px 0px 0px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            />

            <Tab
              label="Send And Receive"
              sx={{
                border: value === 1 ? "1px solid #57AA04" : "",
                borderBottom: "none",
                bgcolor: value === 1 ? "#3D5509" : "",
                ...hoverStyle,
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                padding: "20px",
                borderRadius: "10px 10px 0px 0px",
                fontWeight: "bold",
              }}
            />

            {/* Rest of the tabs */}
          </Tabs>
          <Divider
            sx={{
              width: "100%",
              borderBottom: "1.5px solid #737373D4 ",
            }}
          />
          <Box sx={{ p: 3 }}>
            {tabContent.map((content, index) => (
              <div
                key={index}
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
              >
                {value === index && <div>{content}</div>}
              </div>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WalletPannel;
