import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
// import {makeStyles} from '@mui/material/styles';
import CancelIcon from "@mui/icons-material/Cancel";
import useWindowDimensions from "../../hooks/useWindoDimensions";
import { DP, FW } from "../../utils/Dimension";
import colors from "../../utils/colors";
import ImageConst from "../../utils/ImageConst";
import UiTextField from "../ui/UiTextField";
import UiCheckbox from "../ui/UiCheckbox";

const SignInSignUpModal = ({ open, onClose }) => {
  const { height, width } = useWindowDimensions();
  // const useStyles = makeStyles({
  //   textField: {
  //     [`& fieldset`]: {
  //       borderRadius: DP._10,
  //     }
  //   }
  // })

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.modal(width, height)}>
          <Grid container>
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
              <img src={ImageConst.LockImage} style={Styles.lockImage} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.loginLabelContainer}
            >
              <Typography style={Styles.loginLabel}>Login</Typography>
              <Typography style={Styles.descriptionLabel}>
                Enter your Mobile Number and Verify to login
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.textContainer}
            >
              <UiTextField
                fullWidth
                size="small"
                type={"number"}
                maxLength={10}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.textContainer}
            >
              <Button
                variant="contained"
                style={Styles.button}
                fullWidth
                disableElevation
                onClick={() => {
                  // onCreateEventPress && onCreateEventPress();
                }}
              >
                Request OTP
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.textContainer}
            >
              <UiCheckbox
                label={
                  "Yes, I want to recieve important information & updates on my Whatsapp"
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={Styles.textContainer}
            >
              <UiCheckbox label={"I agree to the Terms & Conditions applied"} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInSignUpModal;

const Styles = {
  modal: (windowWidth, windowHeight) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: windowWidth > 320 ? 300 : windowWidth - 100,
    height: windowHeight - 200,
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
    width: "80%",
    height: "80%",
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
};
