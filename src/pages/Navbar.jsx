import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  SwipeableDrawer,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CommonButton } from "../components";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ themeToggler, mode }) => {
  
  const theme = useTheme();
  useMediaQuery("(max-width:1200px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  let location = useLocation();
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

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: "200px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <ListItemButton
          to="/BuyCrypto"
          sx={{
            color: location.pathname === "/BuyCrypto" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          BuyCrypto
        </ListItemButton>

        <ListItemButton
          to="/SellCrypto"
          sx={{
            color: location.pathname === "/SellCrypto" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          SellCrypto
        </ListItemButton>
        <ListItemButton
          to="/Swap"
          sx={{
            color: location.pathname === "/Swap" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "15px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          Swap
        </ListItemButton>

        <ListItemButton
          to="/CreateOffer"
          sx={{
            color: location.pathname === "/CreateOffer" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          CreateOffer
        </ListItemButton>
        {/* <ListItemButton
          to="/Dashboard"
          sx={{
            color: location.pathname === "/Dashboard" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          Dashboard
        </ListItemButton> */}
        {/* <ListItemButton
          to="/Wallet"
          sx={{
            color: location.pathname === "/Wallet" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          Wallet
        </ListItemButton> */}
        {/* <ListItemButton
          to="/Ranks"
          sx={{
            color: location.pathname === "/Ranks" ? "#ABE900" : "#fff",
            fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
            fontSize: "13px",
            "&:hover": {
              color: "#ABE900",
            },
          }}
          component={Link}
        >
          Ranks
        </ListItemButton> */}
        <CommonButton>Login</CommonButton>
        <CommonButton>Register</CommonButton>
      </Box>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        component="nav"
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
                  <ListItemButton
                    to="/"
                    sx={{
                      color: location.pathname === "/" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                    }}
                    component={Link}
                  >
                    <Typography variant="h3" color="#ABE900">
                      Logo
                    </Typography>
                  </ListItemButton>
                </Box>
                <Box
                  display="flex"
                  justifyContent=" start"
                  alignItems="center"
                  gap={2}
                >
                  <ListItemButton
                    to="/BuyCrypto"
                    sx={{
                      color:
                        location.pathname === "/BuyCrypto" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    BuyCrypto
                  </ListItemButton>

                  {/* <ListItemButton
                    to="/SellCrypto"
                    sx={{
                      color:
                        location.pathname === "/SellCrypto"
                          ? "#ABE900"
                          : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    SellCrypto
                  </ListItemButton> */}
                  <ListItemButton
                    to="/Swap"
                    sx={{
                      color: location.pathname === "/Swap" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "15px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    Swap
                  </ListItemButton>

                  <ListItemButton
                    to="/CreateOffer"
                    sx={{
                      color:
                        location.pathname === "/CreateOffer"
                          ? "#ABE900"
                          : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    CreateOffer
                  </ListItemButton>
                  <ListItemButton
                    to="/ControlPanel"
                    sx={{
                      color:
                        location.pathname === "/ControlPanel"
                          ? "#ABE900"
                          : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    Control Panel
                  </ListItemButton>
                  {/* <ListItemButton
                    to="/Dashboard"
                    sx={{
                      color:
                        location.pathname === "/Dashboard" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    Dashboard
                  </ListItemButton> */}
                  {/* <ListItemButton
                    to="/Wallet"
                    sx={{
                      color:
                        location.pathname === "/Wallet" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    Wallet
                  </ListItemButton> */}
                  {/* <ListItemButton
                    to="/Ranks"
                    sx={{
                      color:
                        location.pathname === "/Ranks" ? "#ABE900" : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                      fontSize: "13px",
                      "&:hover": {
                        color: "#ABE900",
                      },
                    }}
                    component={Link}
                  >
                    Ranks
                  </ListItemButton> */}
                  <CommonButton to="/Login" component={Link}>
                    Login
                  </CommonButton>
                  <CommonButton to="/Register" component={Link}>
                    Register
                  </CommonButton>
                  <Button onClick={themeToggler} color="customWhite">
                    {mode ? <Brightness7 /> : <Brightness4 />}
                  </Button>
                </Box>
              </Box>
            </Hidden>
            <Hidden lgUp>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                <ListItemButton
                  to="/"
                  sx={{
                    color: location.pathname === "/" ? "#ABE900" : "#fff",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                  component={Link}
                >
                  <Typography variant="h3" color="#ABE900">
                    Logo
                  </Typography>
                </ListItemButton>
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
