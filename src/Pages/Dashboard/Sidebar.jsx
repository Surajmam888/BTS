import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdbIcon from "@mui/icons-material/Adb";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        // Toggle Button for Mobile
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        onClick={closeDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: isMobile ? "80%" : 240,
            paddingLeft: "30px",
            // paddingTop: "100px",
            // marginTop: "85px",
          },
        }}>
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
              <AdbIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/dashboard"
                sx={{
                  textDecoration: "none",
                }}>
                BTS
              </Typography>
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>
          <ListItem
            component={Link}
            to="/dashboard"
            sx={{ paddingTop: "60px" }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="profile">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem component={Link} to="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem component={Link} to="products">
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem component={Link} to="support">
            <ListItemIcon>
              <HelpCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem component={Link} to="logoutpage">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
