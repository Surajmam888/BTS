import styled from "@emotion/styled";
import { Box, Button, Card, Typography, Grid } from "@mui/material";
import explainproject from "../assets/OurService/explainproject1.jpg";
import Brainstroming from "../assets/OurService/Brainstroming.jpg";
import file from "../assets/OurService/file.jpg";
import digital from "../assets/OurService/digital.png";
import rivision from "../assets/OurService/rivision.png";
import complete from "../assets/OurService/complete.jpg";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#FF0000",
  color: "#FFFFFF",
  height: "40px",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#FF0000",
  },
}));

const ColorTypography = styled(Typography)(() => ({
  fontFamily: "Courier New monospace",
  fontSize: "18px",
}));

const StyleTypography = styled(Typography)(() => ({
  fontSize: "26px",
  color: "red",
  fontFamily: "Poppins sans-serif",
}));

const StyleCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "20px 0",
}));

const ImageContainer = styled(Box)({
  width: "100%",
  textAlign: "center",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ResponsiveCard = ({ title, description, imageSrc }) => {
  return (
    <StyleCard>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <img src={imageSrc} alt="" />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <StyleTypography>{title}</StyleTypography>
            <ColorTypography>{description}</ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
        </Grid>
      </Grid>
    </StyleCard>
  );
};

const CloudService = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
        <Typography variant="h3">Our Services</Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {[
          {
            title: "Cloud Services and Security",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: explainproject,
          },
          {
            title: "UI/UX And Video Animation",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: complete,
          },
          {
            title: "Software Development",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: digital,
          },
          {
            title: "Mobile Development",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: rivision,
          },
          {
            title: "Digital Marketing",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: file,
          },
          {
            title: "Internet Of Things",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageSrc: Brainstroming,
          },
        ].map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ResponsiveCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CloudService;
