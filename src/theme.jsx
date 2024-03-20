import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#55b7f8",
      dark: "#4da5df",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#fe7529",
      dark: "#e56925",
      contrastText: "rgba(255,252,252,0.87)",
    },
    info: {
      main: "#ffffff",
      dark: "#B2B2B2",
      contrastText: "rgba(255,255,255,0.87)",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h1: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "3em",
      lineHeight: "64px",
      color: "#123763",
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "2.5em",
      color: "#123763",
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: "#123763",
      fontSize: "2em",
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: "#123763",
      fontSize: "1.5em",
      lineHeight: "38px",
      fontWeight: 700,
    },
    h5: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "1em",
      color: "#123763",
      fontWeight: 700,
    },
    h6: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: " #123763",
      fontSize: ".875em",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "14px",
      color: "#6d6d6d",
    },
  },
});
