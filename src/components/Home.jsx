import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopBar from "./TopBar";
import AllTags from "./AllTags";
import Events from "./Events";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  const [AllEvents, setAllEvents] = useState([]);
  const [event_category, setEvent_category] = useState("WEBINAR");
  const [tag_list, setTag_list] = useState([]);
  const [tag_str, setTag_str] = useState("Interview Preparation");

  const event_change = (val) => setEvent_category(val);
  const tag_change = (new_tag) => {
    setTag_list(new_tag);
    // console.log(tag_list);
    let tags_str = "";
    tag_list.map((curr_tag) => {
      tags_str += curr_tag + ",";
    });
    console.log(new_tag);
    setTag_str(tags_str);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.codingninjas.com/api/v3/events?event_category=${event_category}&event_sub_category=Upcoming&tag_list=${tag_str}&offset`
      )
      .then((res) => {
        setAllEvents(res.data.data.events);
        console.log(event_category, tag_str);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [event_category, tag_str]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopBar event_change={event_change} value={event_category} />
        </Grid>
        <Grid item xs={10}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <Events AllEvents={AllEvents} />
        </Grid>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <AllTags set_tags={tag_change} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
