import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Container, Typography } from "@mui/material";
import swapbtn from "../../convert/assets/swap-btn.png";
import { CustomizeInput } from "../../../components/CustomizeInput";
import SearchIcon from '@mui/icons-material/Search';

export default function DropdownMenu2() {
  const [anchorEl, setAnchorEl] = React.useState({});

  const handleClick = (event, menuId) => {
    setAnchorEl((prev) => ({ ...prev, [menuId]: event.currentTarget }));
  };

  const handleClose = (menuId) => {
    setAnchorEl((prev) => ({ ...prev, [menuId]: null }));
  };

  const menus = [
    { id: 'have', label: 'Have', items: [{ to: "/item1", label: "Item 1" }, { to: "/item2", label: "Item 2" }] },
    { id: 'wanna', label: 'Wanna', items: [{ to: "/item3", label: "Item 3" }, { to: "/item4", label: "Item 4" }] },
    { id: 'payment', label: 'Payment method', items: [{ to: "/item5", label: "Item 5" }, { to: "/item6", label: "Item 6" }] },
    { id: 'location', label: 'Location', items: [{ to: "/item7", label: "Item 7" }, { to: "/item8", label: "Item 8" }] },
    { id: 'advances', label: 'Advances', items: [{ to: "/item9", label: "Item 9" }, { to: "/item10", label: "Item 10" }] },
    { id: 'currency', label: 'Currency', items: [{ to: "/item11", label: "Item 11" }, { to: "/item12", label: "Item 12" }] },
    { id: 'username', label: 'User name', items: [{ to: "/item13", label: "Item 13" }, { to: "/item14", label: "Item 14" }] },
    { id: 'connection', label: 'Last connection', items: [{ to: "/item15", label: "Item 15" }, { to: "/item16", label: "Item 16" }] }
  ];

  return (
    <Box sx={{ bgcolor: "#111B1F", marginTop: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
      <Container sx={{ display: "flex", justifyContent: "center", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
        <Box sx={{ paddingLeft: { xs: 0, md: "50px" }, width: { xs: "100%", md: "auto" } }}>
          <IconButton
            aria-controls={anchorEl['have'] ? "account-menu-have" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl['have'] ? "true" : undefined}
            onClick={(event) => handleClick(event, 'have')}
            sx={{
              background: "#111B1F",
              borderRadius: "7px",
              width: { xs: "100%", md: "180px" },
              border: "1px solid",
            }}
          >
            <Typography sx={{ flex: 1, textAlign: "left", paddingRight: { xs: "50px", md: "20px" } }}>Have</Typography>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl['have']}
            id="account-menu-have"
            open={Boolean(anchorEl['have'])}
            onClose={() => handleClose('have')}
            onClick={() => handleClose('have')}
            PaperProps={{
              elevation: 0,
              sx: {
                background: "#676767",
                minWidth: "200px",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&:before": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {menus[0].items.map((item, index) => (
              <MenuItem key={index} component={Link} to={item.to} onClick={() => handleClose('have')}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: { xs: 0, md: 1 }, width: { xs: "100%", md: "auto" } }}>
          <IconButton
            aria-label="swap"
            sx={{ border: "1px solid #ABE900", p: 0, mx: { xs: "auto", md: 0 } }}
          >
            <img src={swapbtn} alt="swap" style={{ height: "24px", width: "24px" }} />
          </IconButton>
        </Box>

        {menus.slice(1).map((menu) => (
          <Box key={menu.id} sx={{ width: { xs: "100%", md: "auto" } }}>
            <IconButton
              aria-controls={anchorEl[menu.id] ? `account-menu-${menu.id}` : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl[menu.id] ? "true" : undefined}
              onClick={(event) => handleClick(event, menu.id)}
              sx={{
                background: "#111B1F",
                borderRadius: "7px",
                width: { xs: "100%", md: "180px" },
                border: "1px solid #676767",
              }}
            >
              <Typography sx={{ flex: 1, textAlign: "left", paddingRight: { xs: "50px", md: "1px" } }}>{menu.label}</Typography>
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl[menu.id]}
              id={`account-menu-${menu.id}`}
              open={Boolean(anchorEl[menu.id])}
              onClose={() => handleClose(menu.id)}
              onClick={() => handleClose(menu.id)}
              PaperProps={{
                elevation: 0,
                sx: {
                  background: "#676767",
                  minWidth: "200px",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "&:before": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {menu.items.map((item, index) => (
                <MenuItem key={index} component={Link} to={item.to} onClick={() => handleClose(menu.id)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ))}

        <Box sx={{ position: 'relative', marginRight: { xs: 0, md: '50px' },   }}>
          <CustomizeInput type="search" borderRadius="50px" height="45px" width={{ xs: "100%", md: "500px" }} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
              pointerEvents: 'none',
            }}
          >
            <SearchIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
