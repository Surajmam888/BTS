import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Typography
        variant="h2"
        sx={{ textAlign: "center", height: "70px", paddingTop: "15px" }}>
        Dashboard
      </Typography>
    </AppBar>
  );
};

export default Header;
