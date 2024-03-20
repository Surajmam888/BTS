import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F7F8F7",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#CBCDCD",
    600: "#637381",
    700: "#454F5B",
    800: "#7E8181",
    900: "#161C24",
};

const PRIMARY = {
    light: "#F3EEF6",
    main: "#68437E",
    dark: "#482E51",
    contrastText: "#ffffff",
};

const SECONDARY = {
    light: "#EEF7F6",
    main: "#5BAFA9",
    dark: "#214542",
    contrastText: "#4B566B",
};

const TERTIARY = {
    light: "#FCEECE",
    main: "#F5BD3D",
};

const INFO = {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
    contrastText: "#fff",
};

const SUCCESS = {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D",
    contrastText: GREY[800],
};

const WARNING = {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01",
    contrastText: GREY[800],
};

const ERROR = {
    lighter: "#FFE7D9",
    light: "#FD458A",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: "#fff",
};

const palette = {
    common: { black: "#000", white: "#fff" },
    primary: PRIMARY,
    secondary: SECONDARY,
    tertiary: TERTIARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.24),
    text: {
        primary: GREY[800],
        secondary: GREY[600],
        disabled: GREY[500],
    },
    background: {
        paper: "#fff",
        default: GREY[100],
        neutral: GREY[200],
    },
    action: {
        active: GREY[600],
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[800], 1),
        disabledBackground: alpha(GREY[500], 1),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

export default palette;
