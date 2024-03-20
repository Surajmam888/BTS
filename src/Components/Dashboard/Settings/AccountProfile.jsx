//* component import
import AccountImageCard from "../../cards/AccountImageCard";
import AccountDetailCard from "../../cards/AccountDetailCard";

//* mui component import
import Grid from "@mui/material/Grid";

function AccountProfile() {
  return (
    <Grid container px={3} py={3} spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <AccountImageCard />
      </Grid>
      <Grid item lg={8} md={6} xs={12}>
        <AccountDetailCard />
      </Grid>
    </Grid>
  );
}

export default AccountProfile;
