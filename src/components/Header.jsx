import React from "react";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";

function Header({ icon, settheme, theme }) {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Box height={125} width={200} clone>
          <img
            src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
            alt=""
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box mt={4}>
          <Typography variant="h4" component="h1">
            Events & News
          </Typography>

          <Typography variant="body2" component="p">
            Learn, Compete & Grow
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box mt={3}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => settheme(!theme)}
          >
            {icon}
          </IconButton>
          <Typography>
            Click on {!theme ? "Sun" : "Moon"} Icon to change to{" "}
            {!theme ? "Light" : "Dark"} theme
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
