import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TopBar({ event_change, value }) {
  const classes = useStyles();
  // const [value, setValue] = useState("WEBINAR");

  const handleChange = (e, newValue) => {
    // console.log(newValue);
    event_change(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Webinar" value="WEBINAR" />
        <Tab label="Coding Events" value="CODING_EVENT" />
        <Tab label="Bootcamp Events" value="BOOTCAMP_EVENT" />
        <Tab label="Workshop" value="WORKSHOP" />
      </Tabs>
    </Paper>
  );
}

export default TopBar;
