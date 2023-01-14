import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AutoSearch from "../component/AutoSearch";
import { Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <Typography variant="h3" gutterBottom textAlign={"center"}>
        Welcome to the Bottom Rung!
      </Typography>
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        Search for countless entry level jobs and internships to get you started
        on climbing that corporate ladder
      </Typography>
      <Grid item xs={3}>
        <br />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <AutoSearch />
          <Button>Go!</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default Home;
