//* mui components imports
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Support() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={3} mb={10}>
        <Typography variant="h4">Support</Typography>
        <Divider />
        <Paper
          elevation={0}
          sx={{
            minHeight: "400px",
            my: "20px",
            borderRadius: 3,
            margin: "100px",
            // backgroundColor: "#F7F8F7",
            boxShadow: "5",
          }}>
          <Container maxWidth="lg">
            <Stack height={"300px"} justifyContent={"center"}>
              <Typography variant="h4" textAlign={"center"}>
                Here you will find the support features in a few weeks. Until
                then please write an mail@mactosys.com or +41 (0)44 280 1234
              </Typography>
            </Stack>
          </Container>
        </Paper>
      </Stack>
    </Container>
  );
}

export default Support;
