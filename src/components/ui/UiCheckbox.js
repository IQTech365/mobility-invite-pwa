import React from "react";
import { Checkbox, Grid, Typography } from "@mui/material";
import colors from "../../utils/colors";
import { DP } from "../../utils/Dimension";

const UiCheckbox = ({ label }) => {
  return (
    <Grid container>
      <Grid item style={Styles.container}>
        <Checkbox />
        <Typography style={Styles.text}>{label}</Typography>
      </Grid>
    </Grid>
  );
};

export default UiCheckbox;

const Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
      color: colors.BLACK,
      fontSize: DP._10,
  }
};
