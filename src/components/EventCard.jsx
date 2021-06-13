import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 120,
  },
  title: {
    fontSize: "18px",
    letterSpacing: ".2px",
    fontWeight: 700,
  },
  tags: {
    color: "#424242",
    fontSize: "14px",
    padding: "6px 12px",
    fontWeight: 400,
    borderRadius: "2px",
    background: "#eee",
    // marginBottom: "10px",
    marginRight: "5px",
    marginTop: "5px",
    // cursor: pointer;
    // text-decoration: none;
  },
  tagcontainer: {
    marginTop: "20px",
  },
  card_detail: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatars: {
    display: "flex",
  },
});

function EventCard({
  image,
  title,
  desc,
  alltags,
  venue,
  fees,
  start_date,
  registered_users,
}) {
  const classes = useStyles();
  let event_date = new Date(start_date * 1000);
  let event_time_str = event_date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  event_time_str += " " + event_date.toLocaleDateString();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography className={classes.title} gutterBottom component="p">
          {title}
        </Typography>
        <Box className={classes.card_detail}>
          <Box>
            <Typography variant="body2" color="textSecondary" component="p">
              Starts On
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {event_time_str}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" component="p">
              Entry Fee
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {fees ? fees : "Free"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" component="p">
              Venue
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {venue}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </Box>
        <Box container className={classes.tagcontainer}>
          {alltags.map((tag) => {
            return (
              <Box className={classes.tags} component="span">
                {tag}
              </Box>
            );
          })}
        </Box>
        <Box className={classes.avatars} mt={5}>
          {registered_users.top_users.map((curr_user) => {
            return (
              <Tooltip title={curr_user.name}>
                <Avatar alt="" src={curr_user.image_url} />
              </Tooltip>
            );
          })}
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
          and <b>{registered_users.other_users_count}</b> others registered
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;
