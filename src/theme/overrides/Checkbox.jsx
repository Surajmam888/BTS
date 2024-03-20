function Checkbox(theme) {
    return {
        MuiCheckbox: {
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

export default Checkbox;
