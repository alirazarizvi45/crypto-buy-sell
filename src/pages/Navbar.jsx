import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import MainButton from "../components/MainButton";
const Navbar = () => {
  useMediaQuery("(max-width:1200px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (state.left) {
      setState({ ...state, left: false });
    }
  };
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      padding: "10px",
      fontFamily: "Familjen Grotesk",
      fontSize: "18px",
      fontWeight: "800",

      cursor: "pointer",
      color: isActive ? "#ABE900" : "#fff",
      alignItems: "center",
    };
  };

  const list = () => (
    <Box>
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{ width: "250px" }}
      >
        <Box display="flex" justifyContent="center" mb={3}></Box>
        <List>
          <a href="">
            <ListItem
              style={{
                justifyContent: "center",
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    textTransform: "capitalize",
                    textAlign: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#ffffff",
                    fontSize: "20px",
                  },
                }}
                primary="Buy Crypto"
              />
            </ListItem>
          </a>

          <NavLink to="/SellCrypto">
            <ListItem
              style={{
                justifyContent: "center",
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    textTransform: "capitalize",
                    textAlign: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Josefin Sans Variable,sans-serif",
                  },
                }}
                primary="Sell Crypto"
              />
            </ListItem>
          </NavLink>

          <a href="" style={{ textDecoration: "none" }}>
            <ListItem
              style={{
                justifyContent: "center",
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    textTransform: "capitalize",
                    textAlign: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Josefin Sans Variable,sans-serif",
                    ":hover": {
                      color: "#EA600E",
                    },
                  },
                }}
                primary="Swap"
              />
            </ListItem>
          </a>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Container maxWidth="xl">
            <Hidden lgDown>
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Box>
                  {/* <img
            src={logo}
            alt=""
            srcSet=""
            style={{
              height: "40px",
              width: "50px",
              objectFit: "contain",
            }}
          /> */}
                  <Typography variant="h2" color="#ABE900">
                    Logo
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent=" start"
                  alignItems="center"
                  gap={3}
                >
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/",
                        }),
                      }}
                      onClick={() => handleLinkClick("/")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Buy Crypto
                      </Typography>
                    </a>
                  </NavLink>

                  <NavLink to="/SellCrypto" style={{ textDecoration: "none" }}>
                    <a
                      href=""
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/SellCrypto",
                        }),
                      }}
                      onClick={() => handleLinkClick("/SellCrypto")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Sell Crypto
                      </Typography>
                    </a>
                  </NavLink>
                  <NavLink to="/Swap" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/Swap",
                        }),
                      }}
                      onClick={() => handleLinkClick("/Swap")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Swap
                      </Typography>
                    </a>
                  </NavLink>

                  <NavLink to="/CreateOffer" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/CreateOffer",
                        }),
                      }}
                      onClick={() => handleLinkClick("/CreateOffer")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Create Offer
                      </Typography>
                    </a>
                  </NavLink>
                  <NavLink to="/Dashoboard" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/Dashoboard",
                        }),
                      }}
                      onClick={() => handleLinkClick("/Dashoboard")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Dashoboard
                      </Typography>
                    </a>
                  </NavLink>
                  <NavLink to="/Wallet" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/Wallet",
                        }),
                      }}
                      onClick={() => handleLinkClick("/Wallet")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Wallet
                      </Typography>
                    </a>
                  </NavLink>
                  <NavLink to="/Ranks" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/Ranks",
                        }),
                      }}
                      onClick={() => handleLinkClick("/Ranks")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          "&:hover": {
                            color: "#ABE900",
                          },
                        }}
                      >
                        Ranks
                      </Typography>
                    </a>
                  </NavLink>
                  <MainButton>Login</MainButton>
                  <MainButton
                    sx={{
                      backgroundColor: "#000",
                      border: "1px solid #ABE900",
                      "&:hover": {
                        backgroundColor: "#C6F051",
                        color: "#fff",
                      },
                    }}
                  >
                    Register
                  </MainButton>
                </Box>
              </Box>
            </Hidden>
            <Hidden lgUp>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                <Button onClick={toggleDrawer(true)}>
                  <MenuIcon
                    style={{
                      fontSize: "38px",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </Button>
              </Stack>
              <Paper style={{ background: "#070C0E" }}>
                <SwipeableDrawer
                  PaperProps={{
                    sx: {
                      background: "#070C0E !important",
                      justifyContent: "center",
                    },
                  }}
                  anchor="left"
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list()}
                </SwipeableDrawer>
              </Paper>
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
