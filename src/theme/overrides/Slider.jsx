function Slider(theme) {
    return {
        MuiSlider: {
            styleOverrides: {
                root: {
                    height: 20,
                    "& .MuiSlider-track": {
                        border: "none",
                    },
                    "& .MuiSlider-rail": {
                        backgroundColor: theme.palette.grey[200],
                    },
                    "& .MuiSlider-thumb": {
                        height: 36,
                        width: 36,
                        backgroundColor: "#fff",
                        filter: "drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.10))",
                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                            boxShadow: "inherit",
                        },
                        "&:before": {
                            display: "none",
                        },
                    },
                    "& .MuiSlider-valueLabel": {
                        lineHeight: 1.2,
                        fontSize: 12,
                        padding: "12px 15px",
                        height: 32,
                        borderRadius: 30,
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.primary.dark,
                        boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
                        // transformOrigin: "bottom left",
                    },
                },
            },
        },
    };
}

export default Slider;
