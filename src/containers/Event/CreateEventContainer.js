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
import { useNavigate } from "react-router-dom";
import { RouteKeys } from "../../routes";
import ChooseTemplateModal from "./components/ChooseTemplateModal";
import TemplateOptionsModal from "./components/TemplateOptionsModal";

const CreateEventContainer = ({}) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const [openChooseTemplateModal, setOpenChooseTemplateModal] =
    React.useState(false);
  const [openTemplateOptionsModal, setOpenTemplateOptionsModal] =
    React.useState(false);

  const _handleChooseTemplateModal = () => {
    setOpenChooseTemplateModal(true);
  };

  const _handleCloseChooseTemplateModal = () => {
    setOpenChooseTemplateModal(false);
  };

  const _handleTemplateOptionsModal = () => {
    setOpenChooseTemplateModal(false);
    setOpenTemplateOptionsModal(true);
  };

  const _handleCloseTemplateOptionsModal = () => {
    setOpenTemplateOptionsModal(false);
  };

  return (
    <>
      <Header label={"Create Event"} />
      <Grid container spacing={2} style={Styles.container}>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <UiTextField
            fullWidth
            size="small"
            select
            style={{ width: width - DP._40 }}
            placeholder="Choose Event Type"
          >
            {events.map((option) => (
              <MenuItem key={option.id} value={option.event_name}>
                {option.event_name}
              </MenuItem>
            ))}
          </UiTextField>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <Typography>Number of Events</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <img
            src={ImageConst.AddImageVideo}
            style={{
              width: width - DP._40,
              height: width - DP._40,
              borderRadius: DP._10,
              objectFit: "contain",
            }}
            onClick={_handleChooseTemplateModal}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <UiTextField
            label="Enter Event Name"
            fullWidth
            size="small"
            style={{ width: width - DP._40 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <TimePicker
            label="Time"
            //   value={value}
            //   onChange={handleChange}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                style={{ width: width - DP._40 }}
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <DatePicker
            label="Date"
            size="small"
            //   value={value}
            //   onChange={handleChange}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                style={{ width: width - DP._40 }}
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box style={{ paddingLeft: DP._20, paddingRight: DP._20 }}>
            <Grid container spacing={1}>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Button
                  fullWidth
                  variant="contained"
                  style={Styles.button}
                  disableElevation
                >
                  Online
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Button
                  fullWidth
                  variant="contained"
                  style={Styles.button}
                  disableElevation
                >
                  Offline
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Button
                  fullWidth
                  variant="contained"
                  style={Styles.button}
                  disableElevation
                >
                  Hybrid
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <UiTextField
            label="Link"
            fullWidth
            size="small"
            style={{ width: width - DP._40 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <UiTextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            size="small"
            style={{ width: width - DP._40 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.content}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: width - DP._40 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
              navigate(RouteKeys.GenerateCode);
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      <ChooseTemplateModal
        open={openChooseTemplateModal}
        onClose={_handleCloseChooseTemplateModal}
        onChooseFromTemplatePress={_handleTemplateOptionsModal}
      />
      <TemplateOptionsModal
        open={openTemplateOptionsModal}
        onClose={_handleCloseTemplateOptionsModal}
      />
    </>
  );
};

export default CreateEventContainer;

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
};
