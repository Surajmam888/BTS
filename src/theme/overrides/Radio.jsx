function Radio(theme) {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: theme.palette.primary.dark,
                    "&:hover": {
                        color: theme.palette.secondary.main,
                    },
                    "& .Mui-checked": {
                        backgroundColor: theme.palette.secondary.main,
                    },
                },
            },
        },
    };
}

export default Radio;
