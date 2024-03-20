// ----------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
export default function Menu(theme) {
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiMenu-paper": {
                        borderRadius: 30,
                        // padding: "20px 0",
                        // backgroundColor: theme.palette.common.white,
                        boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
                        minWidth: 160,
                        marginTop: 5,
                    },
                    // "& .MuiMenu-item": {
                    //     // margin: "0 20px",
                    // },
                },
            },
        },
    };
}
