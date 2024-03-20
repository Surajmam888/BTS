import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
      dark: "#FFB7B7",
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
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       disableElevation: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         textTransform: "none",
  //       },
  //     },
  //   },
  // },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#FF0000",
          },
          textTransform: "none",
        },
      },
    },
  },
  //   palette: {
  //     primary: {
  //       main: "#FF5733",
  //       contrastText: "#FFFFFF",
  //     },
  //   },
  // });

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
      color: "red",
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      color: "red",
      fontSize: "2em",
      fontWeight: 700,
    },
    h4: {
      // fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "26px",
      color: "red",
      fontFamily: "Poppins sans-serif",
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
    subtitle2: {
      fontWeight: 400,
      lineHeight: 22 / 14,
    },
    body1: {
      lineHeight: 1.5,
      fontSize: "20px",
      color: "#6d6d6d",
      // paddingTop: "10px",
      // paddingBottom:"10px",
    },
    body2: {
      lineHeight: 1.5,
      fontSize: "18px",
      color: "#6d6d6d",
    },
  },
});
