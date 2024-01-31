import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
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
