import { useState } from "react";
import {
  Button,
  Menu,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
const notificationData = [
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
  {
    title: "Smile Versicherung",
    description:
      "Du hast noch keine Hutoversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
  },
];

const StyledListButton = styled(ListItemButton)(({ theme }) => ({
  marginTop: "5px",
  marginBottom: "5px",
  // transition: "color 300ms ease-in, background-color 300ms ease-in",
  "&.Mui-selected": {
    ".MuiListItemText-primary": {
      color: theme.palette.common.white,
      fontWeight: 300,
    },
    ".MuiListItemIcon-root": {
      color: theme.palette.common.white,
    },
    backgroundColor: theme.palette.tertiary.main,
    ":hover": {
      backgroundColor: theme.palette.tertiary.main,
    },
  },

  "& .MuiListItemIcon-root": {
    color: theme.palette.primary.dark,
  },
  ".MuiListItemText-primary": {
    fontWeight: 300,
    color: theme.palette.primary.dark,
  },
  "&:hover:not(.Mui-selected)": {
    ".MuiListItemText-primary": {
      color: theme.palette.primary.main,

      fontWeight: 300,
    },
    ".MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.tertiary.light,
  },
  ".MuiAvatar-root": {
    color: "#FFFFFF",
    backgroundColor: theme.palette.tertiary.main,
    filter: "drop-shadow(0px 0px 2px #000000)",
  },
  margin: 0,
}));

const NotificationPopup = () => {
  const initialItemCount = 4;
  const [showAll, setShowAll] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    setIsClicked(id);
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleClickButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseButton = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl) ? "true" : undefined}
        onClick={handleClickButton}>
        <NotificationsIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseButton}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: 280,
                md: 420,
              },
            },
          },
        }}
        sx={{
          borderRadius: "30px",
        }}>
        <List disablePadding>
          {notificationData
            .slice(0, showAll ? undefined : initialItemCount)
            .map((el, index) => (
              <ListItem disablePadding key={index}>
                <StyledListButton
                  selected={isClicked === index}
                  onClick={() => handleClick(index)}>
                  {/* <ListItemIcon>
                    <CircleNotificationsIcon />
                  </ListItemIcon> */}
                  <ListItemAvatar>
                    <Avatar>
                      <CircleNotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={el.description} />
                </StyledListButton>
              </ListItem>
            ))}
        </List>
        <Button
          onClick={toggleShowAll}
          sx={{
            width: "100%",
            padding: "10px",
            textAlign: "center",
          }}>
          {showAll ? "Show Less Notification" : "alle ansehen"}
        </Button>
      </Menu>
    </div>
  );
};

export default NotificationPopup;
