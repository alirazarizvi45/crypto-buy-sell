import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Divider,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomizeInput } from "../../components/CustomizeInput";
import bitcoin from "./assets/bitcoin.png";
import usdt from "./assets/usdt.png";
import EastIcon from "@mui/icons-material/East";

export default function CustomizeSelect() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const stackData = Array.from({ length: 50 }, (_, index) => ({
    key: index,
    name: `USDT ${index + 1}`,
    description: `USDT on xyz chain ${index + 1}`,
  }));

  return (
    <React.Fragment>
      <Button
        variant="contained"
        endIcon={<ExpandMoreIcon />}
        onClick={handleClickOpen("paper")}
        sx={{
          background: "#ABE900",
          color: "#000000",
          py: "16px",
          ml: "-14px",
        }}
      >
        Select tokens
      </Button>
      <Dialog
        PaperProps={{
          sx: {
            border: "2px solid #ffffff",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "19px",
            backgroundColor: "#070C0E",
          },
        }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle color="#ffffff" id="scroll-dialog-title">
            Select a Token
          </DialogTitle>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <Divider color="#ffffff" />
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            color="#ffffff"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <CustomizeInput
              fullWidth
              placeholder="Search name or place address"
            />
            <FormHelperText id="outlined-weight-helper-text" sx={{ m: 2 }}>
              Common tokens
            </FormHelperText>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing="10px"
            >
              <Button
                endIcon={
                  <img src={bitcoin} alt="swap" style={{ width: "20px" }} />
                }
                aria-label="swap"
                sx={{ border: "1px solid #ABE900", width: "100px" }}
              >
                BTC
              </Button>
              <Button
                endIcon={
                  <img src={bitcoin} alt="swap" style={{ width: "20px" }} />
                }
                aria-label="swap"
                sx={{ border: "1px solid #ABE900", width: "100px" }}
              >
                BTC
              </Button>
              <Button
                endIcon={
                  <img src={bitcoin} alt="swap" style={{ width: "20px" }} />
                }
                aria-label="swap"
                sx={{ border: "1px solid #ABE900", width: "100px" }}
              >
                BTC
              </Button>
              <Button
                endIcon={
                  <img src={bitcoin} alt="swap" style={{ width: "20px" }} />
                }
                aria-label="swap"
                sx={{ border: "1px solid #ABE900", width: "100px" }}
              >
                BTC
              </Button>
            </Stack>

            {stackData.map((item) => (
              <Stack
                key={item.key}
                sx={{ my: "20px" }}
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                width="100%"
              >
                <Stack direction="row" alignItems="center" spacing="5px">
                  <img
                    src={usdt} // Assuming usdt is the same for all items, replace with dynamic source if necessary
                    alt="usdt"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Stack direction="column">
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.description}</Typography>
                  </Stack>
                </Stack>
                <EastIcon />
              </Stack>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
