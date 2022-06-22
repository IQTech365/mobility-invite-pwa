import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindoDimensions";

const TopMenu = ({}) => {
  const { height, width } = useWindowDimensions();
  if (width > 320) {
    return (
      <Grid container>
        <Grid item></Grid>
      </Grid>
    );
  }

  return null;
};

export default TopMenu;

const Styles = {};
