function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[200],
                    padding: 30,

                    borderRadius: "30px !important",
                    marginBottom: 20,
                    "&.Mui-expanded": {
                        backgroundColor: theme.palette.common.white,
                        boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: theme.palette.primary.dark,
                    },
                    "&:before": {
                        display: "none",
                    },
                },
            },
        },
    };
}

export default Accordion;
