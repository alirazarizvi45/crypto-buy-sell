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
            md: "14px",

            xs: "10px",
          },
          fontWeight: "bold",
          padding: "5px 30px",

          backgroundColor: backgroundColor || "#ABE900",
          color: color || "#000000",

          "&:hover": {
            backgroundColor: backgroundColor || "#C6F051",
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
