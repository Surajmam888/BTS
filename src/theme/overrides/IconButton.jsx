// eslint-disable-next-line no-unused-vars
function IconButton(theme) {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:focus": {
                        outline: "none",
                    },
                },
            },
        },
    };
}

export default IconButton;
