import { createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme({
  palette: {
    success: {
      main: "#00FE00", //green #00FE00
    },
    primary: {
      main: "#030C03", // black #030C03
    },
    customBlack: {
      main: "#0C0F15",
    },
    bitter: {
      main: "#262B26",
    },
  },
  typography: {
    h1: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      color: "#ABE900",
      fontSize: "4.4 rem", //70px
      fontWeight: 600,
    },
    h2: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      color: "#D9D9D9",
      fontSize: "2.3 rem", //38px
      fontWeight: 600,
    },
    h3: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      color: "#ABE900",
      fontSize: "2 rem",
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      color: "#ffffff",
      fontSize: "1.25 rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      color: "#D9D9D9",
      fontSize: "1 rem",
      fontWeight: 400,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: "#000000",
      fontSize: "1 rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      lineHeight: 1.025,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
      fontWeight: 400,
      color: "white",
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
