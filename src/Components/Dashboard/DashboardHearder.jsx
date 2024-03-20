// import { useEffect, useState } from "react";

//* using toast for success and error
// import { toast } from "react-toastify";

//* Custom loading components
// import Loading from "../loading/Loading";

//* image imports

//* mui components import
// import Badge from "@mui/material/Badge";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
// import Popover from "@mui/material/Popover";
// import { useTheme } from "@mui/material/styles";
// import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

//* mui icons imports
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import LanguageSelector from "../language-selector/LanguageSelector";
// import LoggedInMenu from "../logged-in-menu/LoggedInMenu";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationPopup from "./NotificationPopup";
import { useState } from "react";

const drawerWidth = 260;

function DashboardHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      position="fixed"
      handleDrawerToggle={handleDrawerToggle}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: "#fff",
        minHeight: 85,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}>
      <Box
        sx={{
          minHeight: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: 1,
          px: 3,
        }}>
        <Box display={"flex"}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Header Settings Start */}
        <Stack direction={"row"} columnGap={2}>
          <NotificationPopup />
          {/* <LoggedInMenu colorPrimary />
          <LanguageSelector buttonSxProps={{ padding: 0 }} /> */}
        </Stack>
      </Box>
    </AppBar>
  );
}

export default DashboardHeader;
