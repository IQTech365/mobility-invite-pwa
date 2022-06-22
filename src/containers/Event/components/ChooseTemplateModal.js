import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
// import {makeStyles} from '@mui/material/styles';
import CancelIcon from "@mui/icons-material/Cancel";
import useWindowDimensions from "../../../hooks/useWindoDimensions";
import { DP, FW } from "../../../utils/Dimension";
import colors from "../../../utils/colors";
import ImageConst from "../../../utils/ImageConst";

const ChooseTemplateModal = ({ open, onClose, onChooseFromTemplatePress }) => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.modal(width, height)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.crossIcon}>
              <IconButton onClick={onClose}>
                <CancelIcon style={{ fontSize: DP._40, color: colors.PINK }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.lockImageContainer}
            >
              <Typography>Upload Your Picture or Video</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <img
                src={ImageConst.ChooseFromGallery}
                style={Styles.chooseMediaOption}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <img
                src={ImageConst.ChooseFromTemplate}
                style={Styles.chooseMediaOption}
                onClick={onChooseFromTemplatePress}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ChooseTemplateModal;

const Styles = {
  modal: (windowWidth, windowHeight) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: windowWidth > 320 ? 300 : windowWidth - 100,
    // height: windowHeight - 200,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    borderRadius: DP._8,
  }),
  crossIcon: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "flex-end",
  },
  lockImageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
  },
  lockImage: {
    width: "25%",
    height: "25%",
  },
  loginLabelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "flex-start",
  },
  loginLabel: {
    fontSize: DP._25,
    color: colors.BLACK,
  },
  descriptionLabel: {
    fontSize: DP._15,
    color: colors.GRAY,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
    marginTop: DP._15,
  },
  textField: {
    marginTop: DP._15,
    borderRadius: DP._10,
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
  chooseMediaOption: {
    // width: DP._159,
    height: DP._212
  },
};
