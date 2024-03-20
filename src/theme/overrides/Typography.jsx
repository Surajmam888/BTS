// ----------------------------------------------------------------------

export default function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: theme.palette.primary.dark,
                },
                paragraph: {
                    marginBottom: theme.spacing(2),
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1),
                },
                caption: {
                    color: "#A3A7A8",
                },
                
            },
        },
    };
}
