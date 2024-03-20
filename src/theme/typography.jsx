// ----------------------------------------------------------------------

export function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
    return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg),
        },
    };
}

// ----------------------------------------------------------------------

const typography = {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 600,
        fontSize: pxToRem(58),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 44, md: 58, lg: 58 }),
    },
    h2: {
        fontWeight: 600,
        fontSize: pxToRem(46),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 38, md: 46, lg: 46 }),
    },
    h3: {
        fontWeight: 600,
        fontSize: pxToRem(38),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 32, md: 38, lg: 38 }),
    },
    h4: {
        fontWeight: 600,
        fontSize: pxToRem(28),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 24, md: 28, lg: 28 }),
    },
    h5: {
        fontWeight: 600,
        fontSize: pxToRem(20),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 18, md: 20, lg: 20 }),
    },
    h6: {
        fontWeight: 600,
        lineHeight: 1.1,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 16, md: 18, lg: 18 }),
    },
    subtitle1: {
        fontWeight: 400,
        lineHeight: 1.1,
        fontSize: pxToRem(20),
    },
    subtitle2: {
        fontWeight: 400,
        lineHeight: 22 / 14,
        fontSize: pxToRem(18),
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(18),
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(16),
    },

    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
    },
};

export default typography;
