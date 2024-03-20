import { Box, Button, Typography, Grid } from "@mui/material";
import Software3 from "../assets/Focus/Software3.png";
import Mobile from "../assets/Focus/Mobile1.png";
import styled from "@emotion/styled";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "red",
  alignItems: "center",
  width: "200px",
  height: "50px",
  "&:hover": {
    backgroundColor: "white",
    color: "red",
  },
}));

const Product = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#FFF2EF",
        paddingY: { xs: "50px", md: "80px" },
      }}>
      <Typography
        variant="h3"
        sx={{
          color: "red",
          fontSize: { xs: "28px", md: "32px" },
          fontFamily: "Poppins sans-serif",
          marginBottom: { xs: "20px", md: "-200px" },
        }}>
        Our Focus
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              marginBottom: { xs: "20px", md: 0 },
              marginTop: { xs: "20px", md: "150px" },
            }}>
            <img
              src={Software3}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "10px",
            }}>
            <Typography
              variant="h4"
              sx={{
                color: "red",
                fontSize: { xs: "24px", md: "26px" },
                fontFamily: "Poppins sans-serif",
                marginBottom: "15px",
              }}>
              Software Development
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins sans-serif",
                fontSize: { xs: "16px", md: "18px" },
                marginBottom: "15px",
              }}>
              Software development is the process of designing, creating,
              testing, and maintaining different software applications.
            </Typography>
            <ColorButton>Learn More →</ColorButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "20px", md: 0 },
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: { xs: "80px", md: "300px" },
              padding: "10px",
            }}>
            <Typography
              variant="h4"
              sx={{
                color: "red",
                fontSize: { xs: "24px", md: "26px" },
                fontFamily: "Poppins sans-serif",
                marginBottom: "15px",
              }}>
              Mobile Development
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins sans-serif",
                fontSize: { xs: "16px", md: "18px" },
                marginBottom: "15px",
              }}>
              Mobile application development is the process of creating software
              applications that run on a mobile device, and a typical mobile
              computing resources.
            </Typography>
            <ColorButton sx={{ marginLeft: "0px" }}>Learn More →</ColorButton>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              marginBottom: { xs: 0, md: 0 },
              marginTop: { xs: "20px", md: "300px", lg: "300px" },
            }}>
            <img
              src={Mobile}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
