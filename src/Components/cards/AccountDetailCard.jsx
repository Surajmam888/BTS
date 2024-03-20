// MUI components imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import TextField from "@mui/material/TextField";
import Loader from "../Loading/Loading";

const AccountDetailCard = () => {
  return (
    <form style={{ width: "100%" }}>
      <Card
        sx={{
          p: 2,
          height: 300,
          boxShadow: "6px 6px 20px 0px #b4b2b240;",
        }}>
        <Typography variant="h6">Personal Information</Typography>
        <Divider />
        {/* <CardHeader subheader='Personal Information'  /> */}
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField name="firstname" label={"first_name"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField name="lastname" label={"last_name"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Tooltip
                TransitionComponent={Zoom}
                title={"you_can_not_change_your_email"}>
                <TextField control="" name="email" label={"email"} disabled />
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField name="mobileNumber" label={"phone_number"} />
            </Grid>
          </Grid>
        </CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained">
            {Loader ? "updating" : "save"}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountDetailCard;
