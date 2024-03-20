import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const NotificationCards = ({ title, description }) => {
  const cardStyle = {
    display: "flex",
    padding: "10px",
    margin: "30px",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: "30px",
    background: "var(--Base-White, #FFF)",
    boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.10)",
    color: "var(--Primary-Dark, #482E51)",
  };
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "#F5BD3D",
                // filter: "drop-shadow(0px 0px 4px #000000)",
                boxShadow: "5",
              }}>
              <CircleNotificationsIcon />
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle2">{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const NotificationCard = () => {
  const notificationData = [
    {
      title: "Smile Versicherung",
      description:
        "Du hast noch keine Hausratversicherung? Bei Smile erhältst du 30% auf dein erstes Jahr.",
    },
  ];

  const cardstyle = {
    width: "100%",
    marginTop: "100px",
  };

  return (
    <div style={cardstyle}>
      {[...Array(4)].map((_, index) => (
        <NotificationCards
          key={index}
          title={notificationData[0].title}
          description={notificationData[0].description}
        />
      ))}
    </div>
  );
};

export default NotificationCard;
