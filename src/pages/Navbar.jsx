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
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CommonButton } from "../components";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import ProfileMenu from "./Dashboard/ProfileMenu";
const Navbar = ({ themeToggler, mode, isLoggedIn }) => {
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
          to="/"
          sx={{
            color:
              location.pathname === "/BuyCrypto"
                ? "#ABE900"
                : mode
                ? "#000"
                : "#fff",
          }}
          component={Link}
        >
          <img
            src={mode ? logo1 : logo}
            alt="logo"
            style={{ width: "150px" }}
          />
        </ListItemButton>
        <ListItemButton
          to="/BuyCrypto"
          sx={{
            color:
              location.pathname === "/BuyCrypto"
                ? "#ABE900"
                : mode
                ? "#000"
                : "#fff",
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
            color:
              location.pathname === "/SellCrypto"
                ? "#ABE900"
                : mode
                ? "#000"
                : "#fff",
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
            color:
              location.pathname === "/Swap"
                ? "#ABE900"
                : mode
                ? "#000"
                : "#fff",
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
            color:
              location.pathname === "/CreateOffer"
                ? "#ABE900"
                : mode
                ? "#000"
                : "#fff",
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
        <ListItemButton
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
        </ListItemButton>
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

        {isLoggedIn ? (
          <>
            <Button
              sx={{
                color: "theme.palette.success.main",
                backgroundColor: "#070C0E",
                py: 1.4,
                borderRadius: "10px",
              }}
            >
              <NotificationsActiveIcon />
            </Button>
            <Button
              sx={{
                color: "theme.palette.success.main",
                backgroundColor: "#070C0E",
                py: 1.4,
                borderRadius: "10px",
              }}
            >
              <SettingsIcon />
            </Button>
            <ProfileMenu />
          </>
        ) : (
          <>
            <CommonButton>Login</CommonButton>
            <CommonButton>Register</CommonButton>
          </>
        )}

        <Button
          onClick={themeToggler}
          sx={{ color: "theme.palette.success.main" }}
        >
          {mode ? <Brightness4 /> : <Brightness7 />}
        </Button>
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
          <Container maxWidth="xxl">
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
                      color:
                        location.pathname === "/"
                          ? "#ABE900"
                          : mode
                          ? "#000"
                          : "#fff",
                      fontFamily: ["Open Sans Variable", "sans-serif"].join(
                        ","
                      ),
                    }}
                    component={Link}
                  >
                    <img
                      src={mode ? logo1 : logo}
                      alt="logo"
                      style={{ width: "150px" }}
                    />
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
                        location.pathname === "/BuyCrypto"
                          ? "#ABE900"
                          : mode
                          ? "#000"
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
                      color:
                        location.pathname === "/Swap"
                          ? "#ABE900"
                          : mode
                          ? "#000"
                          : "#fff",
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
                          : mode
                          ? "#000"
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
                    Create Offer
                  </ListItemButton>
                  <ListItemButton
                    to="/ControlPanel"
                    sx={{
                      color:
                        location.pathname === "/ControlPanel"
                          ? "#ABE900"
                          : mode
                          ? "#000"
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
                  <ListItemButton
                    to="/Wallet"
                    sx={{
                      color:
                        location.pathname === "/Wallet"
                          ? "#ABE900"
                          : mode
                          ? "#000"
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
                    Wallet
                  </ListItemButton>
                  <ListItemButton
                    to="/Dashboard"
                    sx={{
                      // color:
                      //   location.pathname === "/Dashboard" ? "#ABE900" : "#00000",
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
                  </ListItemButton>
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
                  {isLoggedIn ? (
                    <>
                      <Button
                        sx={{
                          color: "theme.palette.success.main",
                          backgroundColor: "#070C0E",
                          py: 1.4,
                          borderRadius: "10px",
                        }}
                      >
                        <NotificationsActiveIcon />
                      </Button>
                      <Button
                        sx={{
                          color: "theme.palette.success.main",
                          backgroundColor: "#070C0E",
                          py: 1.4,
                          borderRadius: "10px",
                        }}
                      >
                        <SettingsIcon />
                      </Button>
                      <ProfileMenu />
                    </>
                  ) : (
                    <>
                      <CommonButton to="/Login" component={Link}>
                        Login
                      </CommonButton>
                      <CommonButton to="/Register" component={Link}>
                        Register
                      </CommonButton>
                    </>
                  )}
                  <Button
                    onClick={themeToggler}
                    sx={{
                      color: "theme.palette.success.main",
                      // backgroundColor: "#070C0E",
                      py: 1.4,
                      borderRadius: "10px",
                    }}
                  >
                    {mode ? <Brightness4 /> : <Brightness7 />}
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
                    color:
                      location.pathname === "/"
                        ? "#ABE900"
                        : mode
                        ? "#000"
                        : "#fff",
                    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
                  }}
                  component={Link}
                >
                  {/* <Typography variant="h3" color="#ABE900">
                    Logo
                  </Typography> */}
                  <img
                    src={mode ? logo1 : logo}
                    alt="logo"
                    style={{ width: "150px" }}
                  />
                </ListItemButton>
                <Button onClick={toggleDrawer(true)}>
                  <MenuIcon
                    style={{
                      fontSize: "38px",
                      cursor: "pointer",
                      color: mode ? "#000" : "#fff",
                    }}
                  />
                </Button>
              </Stack>
              <Paper style={{ background: mode ? "#EEEEEE" : "#070C0E" }}>
                <SwipeableDrawer
                  PaperProps={{
                    sx: {
                      background: mode ? "#EEEEEE" : "#070C0E",
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
