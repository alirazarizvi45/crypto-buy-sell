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
        position="static"
        sx={{ background: "#000000", width: "100%", height: "100%" }}
      >
        <Toolbar sx={{ justifyContent: "space-around", py: 2 }}>
          <Container maxWidth="xl">
            <Hidden lgDown>
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
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
                  <Typography>Logo</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent=" start"
                  alignItems="center"
                  gap={6}
                >
                  <NavLink to="/BuyCrypto" style={{ textDecoration: "none" }}>
                    <a
                      style={{
                        ...styledactivelink({
                          isActive: location.pathname === "/BuyCrypto",
                        }),
                      }}
                      onClick={() => handleLinkClick("/BuyCrypto")}
                    >
                      <Typography
                        variant="h6"
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

                  <NavLink to="/SellCrypto">
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography
                        variant="h6"
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

                  <a style={{ textDecoration: "none", color: "white" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        "&:hover": {
                          color: "#ABE900",
                        },
                      }}
                    >
                      Swap
                    </Typography>
                  </a>
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
