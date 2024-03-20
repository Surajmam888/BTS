// eslint-disable-next-line no-unused-vars
function Icon(theme) {
    return {
        MuiIcon: {
            defaultProps: {
                // Replace the `material-icons` default value.
                baseClassName: "material-symbols-rounded",
            },
        },
    };
}

export default Icon;
