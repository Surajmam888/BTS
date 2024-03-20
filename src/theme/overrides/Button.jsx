// import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme) {
    return {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&:focus": {
                        outline: "none",
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 100,
                    padding: "15px 40px",
                    "&:focus": {
                        outline: "none",
                    },
                    color: theme.palette.common.white,
                },

                sizeMedium: {
                    fontSize: 16,
                    fontWeight: 500,
                },

                containedPrimary: {
                    boxShadow: "0px 10px 50px 0px rgba(104, 67, 126, 0.20)",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.common.white,
                    },
                },
                containedSecondary: {
                    boxShadow: "0px 10px 50px 0px rgba(91, 175, 169, 0.20)",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.main,
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.common.white,
                    },
                },

                textPrimary: {
                    color: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.primary.dark,
                    },
                },
                textSecondary: {
                    color: theme.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.secondary.dark,
                    },
                },
            },
        },
    };
}
