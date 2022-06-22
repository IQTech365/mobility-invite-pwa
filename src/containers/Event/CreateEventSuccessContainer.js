import React from "react";
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";
import Header from "../../components/common/Header";
import events from "../../utils/events.json";
import UiTextField from "../../components/ui/UiTextField";
import { DP, FW } from "../../utils/Dimension";
import useWindowDimensions from "../../hooks/useWindoDimensions";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ImageConst from "../../utils/ImageConst";
import colors from "../../utils/colors";

const CreateEventSuccessContainer = ({}) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Grid container spacing={2} style={Styles.container}>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <img
            src={ImageConst.CheckIcon}
            style={{
              width: width - DP._200,
              height: width - DP._200,
              borderRadius: DP._10,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <Typography style={Styles.subtitleText}>
            Your Invitation has been successfully created.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <Typography style={Styles.titleText}>
            Share Exclusive Invite✨
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <Button
            variant="outlined"
            style={{ ...Styles.button, width: width - DP._40 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
            }}
          >
            View Events
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: width - DP._40 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
            }}
          >
            Done
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateEventSuccessContainer;

const Styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: DP._40,
  },
  tabs: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
  titleText: {
    color: colors.BLACK,
    fontSize: DP._16,
    fontWeight: FW.semiBold,
    textAlign: "center",
  },
  subtitleText: {
    color: colors.BLACK,
    fontSize: DP._14,
    fontWeight: FW.normal,
    textAlign: "center",
  },
};
