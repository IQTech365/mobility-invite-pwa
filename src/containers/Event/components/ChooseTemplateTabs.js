import React from "react";
import { Tabs, Tab, Typography, Box, Button } from "@mui/material";
import TabPanel from "./TabPanel";
import TemplateCarousel from "./TemplateCarousel";
import { DP, FW } from "../../../utils/Dimension";
import ImageTemplate from "./ImageTemplate";
import VideoTemplate from "./VideoTemplate";

const ChooseTemplateTabs = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const [selectedTemplate, setSelectedTemplate] = React.useState({});
  const [isEditPress, setIsEditPress] = React.useState(false);
  const [isVideoTemplate, setIsVideoTemplate] = React.useState(false);

  const handleChange = (event, newValue) => {
    setIsEditPress(false);
    setValue(newValue);
  };

  const _handleTempplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  //** For Image Template */
  const _showImageTemplateSelectionView = () => {
    return (
      <>
        <ImageTemplate item={selectedTemplate} />
        <div style={Styles.buttonContainer}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: 50 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
              setIsEditPress(true);
            }}
          >
            Edit
          </Button>
        </div>
        <TemplateCarousel onTemplateSelect={_handleTempplateSelect} tabIndex={value} />
      </>
    );
  };

  const _showImageTemplateEditView = () => {
    return (
      <>
        <ImageTemplate item={selectedTemplate} />{" "}
        <div style={Styles.buttonContainer}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: 50 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
              //   setIsEditPress(true);
            }}
          >
            Save
          </Button>
        </div>
      </>
    );
  };

  //** For Video Template */
  const _showVideoTemplateSelectionView = () => {
    return (
      <>
        <VideoTemplate item={selectedTemplate} />
        <div style={Styles.buttonContainer}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: 50 }}
            fullWidth
            disableElevation
            onClick={() => {
              setIsEditPress(true);
            }}
          >
            Edit
          </Button>
        </div>
        <TemplateCarousel onTemplateSelect={_handleTempplateSelect} tabIndex={value} />
      </>
    );
  };

  const _showVideoTemplateEditView = () => {
    return (
      <>
        <VideoTemplate item={selectedTemplate} />{" "}
        <div style={Styles.buttonContainer}>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: 50 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
              //   setIsEditPress(true);
            }}
          >
            Play
          </Button>
          <Button
            variant="contained"
            style={{ ...Styles.button, width: 50 }}
            fullWidth
            disableElevation
            onClick={() => {
              // onCreateEventPress && onCreateEventPress();
              //   setIsEditPress(true);
            }}
          >
            Save
          </Button>
        </div>
      </>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Image" {...a11yProps(0)} />
          <Tab label="Video" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {isEditPress
          ? _showImageTemplateEditView()
          : _showImageTemplateSelectionView()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isEditPress
          ? _showVideoTemplateEditView()
          : _showVideoTemplateSelectionView()}
      </TabPanel>
    </Box>
  );
};

export default ChooseTemplateTabs;

const Styles = {
  button: {
    borderRadius: DP._10,
    textTransform: "none",
    paddingTop: DP._10,
    paddingBottom: DP._10,
    paddingLeft: DP._50,
    paddingRight: DP._50,
    fontWeight: FW.bold,
    marginTop: DP._10,
    marginBottom: DP._10,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};
