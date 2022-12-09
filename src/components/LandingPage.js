import { Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import PageBody from "./PageBody";

const LandingPage = () => {
  return (
    <Grid container display={"flex"} direction={"column"}>
      <Grid item sm={12}>
        <NavBar />
      </Grid>
      <Grid
        item
        flex={1}
        sm={12}
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[800],
        })}
      >
        <PageBody />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
