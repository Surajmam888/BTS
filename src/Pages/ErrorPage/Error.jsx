//* libraries
import { useNavigate } from "react-router-dom";

//* SVG
import Banner from "../../assets/Error.png";

//* mui components imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Error() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box
        display={"flex"}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
        rowGap={2}>
        <Typography variant="h2">Oops! This page not found:)</Typography>
        <Box>
          <img src={Banner} height={"100%"} width={"100%"} />
        </Box>
        <Typography variant="h4">Go To Home page</Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() =>
            navigate("/", {
              replace: true,
            })
          }>
          Back to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default Error;
