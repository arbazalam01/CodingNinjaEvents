import React from "react";
import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function Events({ AllEvents }) {
  return (
    <div>
      <Grid container spacing={3}>
        {!(Array.isArray(AllEvents) && AllEvents.length) ? (
          <Box mt={30} ml={45}>
            <h1>No events found</h1>
          </Box>
        ) : (
          AllEvents.map((Event, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <EventCard
                  title={Event.name}
                  image={Event.cover_picture}
                  desc={Event.short_desc}
                  alltags={Event.card_tags}
                  venue={Event.venue}
                  fees={Event.fees}
                  start_date={Event.event_start_time}
                  registered_users={Event.registered_users}
                  status={Event.event_sub_category}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
}

export default Events;
