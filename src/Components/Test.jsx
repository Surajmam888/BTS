import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Box,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import datacenter from "../assets/Services/datacenter.jpg";
import cloudservice from "../assets/Services/cloudservice.jpg";
import itmanagement from "../assets/Services/itmanagement.jpg";
import cybersecurity from "../assets/Services/cybersecurity.png";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "red",
  borderRadius: "10px",
  width: "100px",
  "&:hover": {
    backgroundColor: "white",
    color: "red",
  },
}));

const cardData = [
  {
    title: "Data Center",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: datacenter,
  },
  {
    title: "Cloud Service",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: cloudservice,
  },
  {
    title: "IT Management",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: itmanagement,
  },
  {
    title: "Cyber Security",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: cybersecurity,
  },
];

const ResponsiveCards = () => {
  return (
    <Box>
      <Box>
        <Typography sx={{ textAlign: "center", padding: "25px" }} variant="h3">
          Our Product
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ padding: "10px" }}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography variant="h4">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
              <CardActions>
                <ColorButton>Demo</ColorButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ padding: "10px" }}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography variant="h4">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
              <CardActions>
                <ColorButton>Demo</ColorButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveCards;
