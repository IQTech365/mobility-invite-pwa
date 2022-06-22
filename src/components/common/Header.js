import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindoDimensions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {DP, FW} from '../../utils/Dimension';
import { useNavigate } from "react-router-dom";

const Header = ({label}) => {
  const { height, width } = useWindowDimensions();
  const isMobile = useMediaQuery('(max-width:760px)');
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <Grid container>
        <Grid item style={Styles.container}>
            <Button startIcon={<ArrowBackIcon />} style={Styles.button} onClick={() => {
              navigate(-1);
            }}>{label}</Button>
        </Grid>
      </Grid>
    );
  }

  return null;
};

export default Header;

const Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "flex-start",
    // marginTop: DP._15,
  },
  button: {
    borderRadius: DP._30,
    textTransform: "none",
    paddingTop: DP._10,
    paddingBottom: DP._10,
    paddingLeft: DP._25,
    paddingRight: DP._25,
    fontWeight: FW.bold,
    marginTop: DP._15,
  },
};
