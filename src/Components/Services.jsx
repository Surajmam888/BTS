import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import website from "../assets/New folder/website.png";
import seo from "../assets/New folder/seo.png";
import sketch from "../assets/New folder/sketch.jpg";
import UIUX from "../assets/New folder/UIUX.png";
import Digital from "../assets/New folder/Digital.jpg";
import graphics from "../assets/New folder/graphics.png";
import marketana from "../assets/New folder/marketana.jpg";
import bussness from "../assets/New folder/bussness.jpg";

export default function Services() {
  return (
    <>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "",
            paddingTop: "50px",
            fontSize: "26px",
            color: "red",
            fontWeight: "900px",
          }}>
          Our Services
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              padding: "50px 50px 50px 200px",
              backgroundColor: "",
            }}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={website}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Website Development
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={graphics}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Graphics Designing
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={UIUX}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  UI/UX web Designing
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={bussness}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Market Data Analysiling
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              padding: "0px 50px 50px 200px",
              backgroundColor: "",
            }}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={seo}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Seo & Content Writing
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={Digital}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Digital market planing
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={marketana}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bussness Market Planing
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 110 }}
                image={sketch}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sketch Designing & Development
                </Typography>
                <Button sx={{ height: "30px" }}>Contact Us</Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
