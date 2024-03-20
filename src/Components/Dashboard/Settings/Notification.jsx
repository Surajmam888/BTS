//* mui component import
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#2ECA45" : "secondary",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Notification() {
  return (
    <Box py={2}>
      {/* <Card sx={{ p: 2, boxShadow: "6px 6px 20px 0px #b4b2b240;" }}> */}
      <Typography variant="h5">Notification Settings</Typography>
      <Divider sx={{ my: 2 }} />
      {/* <FormGroup sx={{ mt: 3 }}> */}
      <Stack spacing={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography variant="h5">email_notifications</Typography>
            <Typography component="p">email_notifications_one</Typography>
          </Stack>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography variant="h5">push_notifications</Typography>
            <Typography component="p">push_notifications_one</Typography>
          </Stack>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography variant="h5">reminders</Typography>
            <Typography component="p">reminders_one</Typography>
          </Stack>
          <FormControlLabel
            variant="secondary"
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Stack>
      </Stack>
      {/* </FormGroup> */}
      {/* </Card> */}
    </Box>
  );
}

export default Notification;

// const Notification = () => {
//   return <div>Notification</div>;
// };

// export default Notification;
