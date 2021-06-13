import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
});

function EventCard({ image, title, desc, alltags }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography className={classes.title} gutterBottom component="p">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
        <Box container className={classes.tagcontainer}>
          {alltags.map((tag) => {
            return (
              <Box className={classes.tags} component="span">
                {tag}
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}

export default EventCard;
