// import { Container, Typography } from "@mui/material";

// const UserSettings = () => {
//   return (
//     <Container>
//       <Typography>This is Settings Page</Typography>
//     </Container>
//   );
// };

// export default UserSettings;

import { useState } from "react";

//*  Translation
// import { useOutletContext } from "react-router-dom";

//* components imports
import AccountProfile from "../../../Components/Dashboard/Settings/AccountProfile";
import ChangePassword from "../../../Components/Dashboard/Settings/ChangePassword";
import Notification from "../../../Components/Dashboard/Settings/Notification";

//* mui components imports
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import CircularProgress, { circularProgressClasses } from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

//* mui icons import
import PersonIcon from "@mui/icons-material/Person";
import LockResetIcon from "@mui/icons-material/LockReset";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Container>
          <Box p={1}>{children}</Box>
        </Container>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  // const preloadedData = useOutletContext();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} mb={10}>
        <Typography variant="h4">Settings</Typography>
        <Divider />
        <Paper
          elevation={0}
          sx={{
            minHeight: "50vh",
          }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              maxWidth: { xs: 320, sm: 480, md: "100%" },
            }}>
            <Tabs
              textColor="secondary"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile>
              <Tab
                icon={<PersonIcon />}
                iconPosition="start"
                label={"account"}
                {...a11yProps(0)}
              />
              <Tab
                icon={<LockResetIcon />}
                iconPosition="start"
                label={"change_password"}
                {...a11yProps(1)}
              />
              <Tab
                icon={<EditNotificationsIcon />}
                iconPosition="start"
                label={"notification"}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <AccountProfile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ChangePassword />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Notification />
          </TabPanel>
        </Paper>
      </Stack>
    </Container>
  );
}
