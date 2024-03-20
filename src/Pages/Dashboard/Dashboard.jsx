import Grid from "@mui/material/Grid";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={10} sx={{ marginLeft: { md: "250px", sm: "230px" } }}>
        <MainSection />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
