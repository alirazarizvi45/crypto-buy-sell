import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputBase,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { CustomizeInput } from "../../components/CustomizeInput";
import { CommonButton } from "../../components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CreateOffer = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState("");
  const [exchange, setExchange] = useState("");
  const [advertise, setAdvertise] = useState("");
  const [currency, setCurrency] = useState("");
  const [payment, SetPayment] = useState("");
  const [price, setPrice] = useState("");
  const handleCryptoCurrencyChange = (e) => {
    setCryptocurrencies(e.target.value);
  };
  const handleExchangeChange = (e) => {
    setExchange(e.target.value);
  };
  const handleAdvertiseChange = (e) => {
    setAdvertise(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handlePaymentChange = (e) => {
    SetPayment(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "150px",
          padding: "20px 0px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#111B1F",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #42484B",
          }}
        >
          <Typography variant="h2" textAlign="center" pt={6}>
            Create a new offer
          </Typography>
          <Box
            sx={{
              paddingTop: "50px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              Are you buying or selling cryptocurrencies?
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={cryptocurrencies}
                onChange={handleCryptoCurrencyChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Money Transfer" sx={{ color: "#000000" }}>
                  Money Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              What cryptocurrency do you exchange?
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={exchange}
                onChange={handleExchangeChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="Etherium" sx={{ color: "#000000" }}>
                  Etherium
                </MenuItem>
                <MenuItem value="Binance " sx={{ color: "#000000" }}>
                  Binance
                </MenuItem>
                <MenuItem value="Polygon" sx={{ color: "#000000" }}>
                  Polygon
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              In which location do you want to advertise your offer?
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={advertise}
                onChange={handleAdvertiseChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="US" sx={{ color: "#000000" }}>
                  US
                </MenuItem>
                <MenuItem value="UK " sx={{ color: "#000000" }}>
                  UK
                </MenuItem>
                <MenuItem value=" LA" sx={{ color: "#000000" }}>
                  LA
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              Which currency you are buying or selling?
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={currency}
                onChange={handleCurrencyChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="Ether" sx={{ color: "#000000" }}>
                  Ether
                </MenuItem>
                <MenuItem value="Tehther" sx={{ color: "#000000" }}>
                  Tehther
                </MenuItem>
                <MenuItem value="Bitcoin" sx={{ color: "#000000" }}>
                  Bitcoin
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              What payment method do you want to accept?
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={payment}
                onChange={handlePaymentChange}
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  color: "#fff",
                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Bank Transfer
                </MenuItem>
                <MenuItem value="Money Transfer" sx={{ color: "#000000" }}>
                  Money Transfer
                </MenuItem>
                <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                  Transfer
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              backgroundColor: "#070C0E",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                How would you like to set your price?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handlePriceChange}
                value={price}
              >
                <FormControlLabel
                  value="Dynamic market price"
                  control={<Radio sx={{ color: "#ABE900" }} />}
                  label="Dynamic market price"
                />
                <FormControlLabel
                  value="Fixed price"
                  control={<Radio sx={{ color: "#ABE900" }} />}
                  label="Fixed price"
                />
                <FormControlLabel
                  value="Price formula"
                  control={<Radio sx={{ color: "#ABE900" }} />}
                  label="Price formula"
                />
              </RadioGroup>
            </FormControl>
            {price === "Dynamic market price" && (
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1">
                  How would you like to set your price?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                    gap: { xs: "5px", md: "0px" },
                  }}
                >
                  <CustomizeInput placeholder="Write here" />
                  <Typography variant="h2">%</Typography>
                  <FormControl
                    sx={{ marginTop: "5px", width: { md: 350, xs: 250 } }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "#5A5A5A" }}
                    >
                      Select Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={cryptocurrencies}
                      onChange={handleCryptoCurrencyChange}
                      label="Select Currency"
                      sx={{
                        backgroundColor: "#000000",
                        color: "#fff",
                        "& .MuiSelect-icon": {
                          color: "#fff",
                        },
                      }}
                    >
                      <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                        Bank Transfer
                      </MenuItem>
                      <MenuItem
                        value="Money Transfer"
                        sx={{ color: "#000000" }}
                      >
                        Money Transfer
                      </MenuItem>
                      <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                        Bank Transfer
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    marginTop: "40px",
                  }}
                >
                  <CommonButton fullWidth>Consult</CommonButton>
                </Box>
              </Box>
            )}

            {price === "Fixed price" && (
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                <Typography variant="subtitle1" pb={2}>
                  Set a fix price
                </Typography>
                <CustomizeInput placeholder="Write here" />
              </Box>
            )}
            {price === "Price formula" && (
              <>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <TextField
                    multiline
                    rows={8} // Adjust the number of rows as needed
                    fullWidth
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      Use market. to bring market suggestions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      Use . after subsequent variables so that relevant
                      suggestions emerge
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      The syntax to obtain the quote price is
                      market.$exchange.$par.$type
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      The syntax to obtain the quote price is
                      market.$exchange.$par.$type
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      Use the exchange. to display exchange rate suggestions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      Example of a valid exchange rate formula: exchange.usdeur
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "#ABE900", width: "10px" }}
                    />
                    <Typography variant="subtitle1">
                      Combine values ​​with aggregate functions like min() max.
                      () and avg() to construct a complex formula
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box
            sx={{
              marginTop: "50px",
            }}
          >
            <Typography variant="subtitle1">
              What are the trading limits you would like to set for this
              exchange?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <FormControl
                sx={{ marginTop: "5px", width: { md: 350, xs: 250 } }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "#5A5A5A" }}
                >
                  Select Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={cryptocurrencies}
                  onChange={handleCryptoCurrencyChange}
                  label="Select Currency"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#fff",
                    "& .MuiSelect-icon": {
                      color: "#fff",
                    },
                  }}
                >
                  <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                    Bank Transfer
                  </MenuItem>
                  <MenuItem value="Money Transfer" sx={{ color: "#000000" }}>
                    Money Transfer
                  </MenuItem>
                  <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                    Bank Transfer
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{ marginTop: "5px", width: { md: 350, xs: 250 } }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "#5A5A5A" }}
                >
                  Select Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={cryptocurrencies}
                  onChange={handleCryptoCurrencyChange}
                  label="Select Currency"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#fff",
                    "& .MuiSelect-icon": {
                      color: "#fff",
                    },
                  }}
                >
                  <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                    Bank Transfer
                  </MenuItem>
                  <MenuItem value="Money Transfer" sx={{ color: "#000000" }}>
                    Money Transfer
                  </MenuItem>
                  <MenuItem value="Bank Transfer" sx={{ color: "#000000" }}>
                    Bank Transfer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "30px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              What are the terms and conditions for trading with you?
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="light"
              fontSize="13px"
              pt={1}
            >
              Do not include any personal information in your terms as it is
              publicly visible.
            </Typography>
            <TextField
              multiline
              rows={8} // Adjust the number of rows as needed
              fullWidth
              variant="outlined"
              sx={{
                marginTop: "20px",
                backgroundColor: "#070C0E",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "30px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              What are the terms and conditions for trading with you?
            </Typography>

            <TextField
              multiline
              rows={2} // Adjust the number of rows as needed
              fullWidth
              variant="outlined"
              sx={{
                marginTop: "10px",
                backgroundColor: "#070C0E",
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <CommonButton fullWidth>Create Conversion</CommonButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateOffer;
