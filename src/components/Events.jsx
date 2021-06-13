import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function Events({ AllEvents }) {
  return (
    <div>
      <Grid container spacing={3}>
        {AllEvents.map((Event) => {
          return (
            <Grid item xs={12} md={6}>
              <EventCard
                title={Event.name}
                image={Event.cover_picture}
                desc={Event.short_desc}
                alltags={Event.card_tags}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Events;
