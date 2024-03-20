import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

// ----------------------------------------------------------------------

export default function GlobalStyles() {
    const inputGlobalStyles = (
        <MUIGlobalStyles
            styles={{
                "*": {
                    boxSizing: "border-box",
                },
                html: {
                    margin: 0,
                    padding: 0,
                    scrollBehavior: "smooth",
                },
                body: {
                    margin: 0,
                    padding: 0,
                    webkitFontSmoothing: "antialiased",
                    fontFamily: ["Poppins", "sans-serif"].join(","),
                },

                img: {
                    display: "block",
                    maxWidth: "100%",
                },
                ul: {
                    margin: 0,
                    padding: 0,
                },
            }}
        />
    );

    return inputGlobalStyles;
}
