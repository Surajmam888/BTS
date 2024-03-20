// ----------------------------------------------------------------------

export default function Select(theme) {
    return {
        MuiSelect: {
            styleOverrides: {
                root: {
                    "--Select-brandBorderColor": theme.palette.secondary.main,
                    "--Select-brandBorderHoverColor": theme.palette.secondary.main,
                    "--Select-brandBorderFocusedColor": theme.palette.secondary.main,

                    "&.Mui-focused": {
                        backgroundColor: "transparent",
                        border: "2px solid var(--Select-brandBorderFocusedColor)",
                    },
                    "&:hover:not(.Mui-disabled, .Mui-error)": {
                        backgroundColor: "transparent",
                        border: "2px solid var(--Select-brandBorderHoverColor)",
                    },
                },
            },
        },
    };
}
