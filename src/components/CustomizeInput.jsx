import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomizeInput = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "white",
    fontFamily: "Russo One",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F1620A",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "#F1620A",
    },
    "&:hover fieldset": {
      borderColor: "#F1620A",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F1620A",
    },
    "&.Mui-disabled": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#F1620A",
      },
    },
  },
}));
