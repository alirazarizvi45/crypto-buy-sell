import { LoadingButton } from "@mui/lab";
import React from "react";

const MainButton = (props) => {
  const { children, loading, backgroundColor, color } = props;
  return (
    <>
      <LoadingButton
        loadingPosition="end"
        variant="contained"
        type="submit"
        loading={loading}
        disabled={loading}
        sx={{
          fontSize: {
            lg: "14px",
            md: "14px",
            sm: "10px",
            xs: "10px",
          },

          backgroundColor: backgroundColor || "#ABE900",
          color: color || "#fff",

          "&:hover": {
            backgroundColor: backgroundColor
              ? `${backgroundColor}CC`
              : "#C6F051",
          },
          "&:disabled": {
            backgroundColor: backgroundColor || "#ACC762",
          },
          ".MuiLoadingButton-loading": {
            backgroundColor: backgroundColor || "#ACC762",
          },
        }}
        {...props}
      >
        {loading ? "Processing" : children}
      </LoadingButton>
    </>
  );
};
export default MainButton;
