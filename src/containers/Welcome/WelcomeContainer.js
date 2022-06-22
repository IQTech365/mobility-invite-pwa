import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainCarousel from "../../components/common/MainCarousel";
import SignInSignUpModal from "../../components/common/SignInSignUpModal";
import { DP, FW } from "../../utils/Dimension";
import ImageConst from "../../utils/ImageConst";
import useWindowDimensions from "../../hooks/useWindoDimensions";
import UiTextField from "../../components/ui/UiTextField";
import { RouteKeys } from "../../routes";

const WelcomeContainer = ({}) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const { signInSuccess } = useSelector((state) => state.SignIn);

  const [openSignInSignUpModal, setOpenSignInSignUpModal] =
    React.useState(false);

  const _handleCreateEventPress = () => {
    if (signInSuccess) {
      navigate(RouteKeys.CreateEvent);
    } else {
      setOpenSignInSignUpModal(true);
    }
  };

  const _handleSignInSignUpPress = () => {
    setOpenSignInSignUpModal(true);
  };

  const _handleModalClose = () => {
    setOpenSignInSignUpModal(false);
  };

  return (
    <>
      <MainCarousel
        onCreateEventPress={_handleCreateEventPress}
        onSignInSignUpPress={_handleSignInSignUpPress}
      />
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography style={{ ...Styles.text, textAlign: "center" }}>
            Our Features
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{ textAlign: "center", flexDirection: "column" }}
        >
          <img src={ImageConst.MobileIcon} style={Styles.icon} />
          <Typography>No App Required</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{ textAlign: "center", flexDirection: "column" }}
        >
          <img src={ImageConst.PeopleIcon} style={Styles.icon} />
          <Typography>Unlimitted Guests</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{ textAlign: "center", flexDirection: "column" }}
        >
          <img src={ImageConst.RSVPIcon} style={Styles.icon} />
          <Typography>RSVP</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{ textAlign: "center", flexDirection: "column" }}
        >
          <img src={ImageConst.LocationIcon} style={Styles.icon} />
          <Typography>Schedule Location</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={Styles.textContainer}>
          <Button
            variant="contained"
            style={Styles.button}
            fullWidth
            disableElevation
            onClick={_handleCreateEventPress}
          >
            Create an Invite
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <img
            src={ImageConst.CelebrateImage}
            style={{
              width: width - DP._40,
              height: width - DP._40,
              borderRadius: DP._10,
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={Styles.itemContainer}
        >
          <Typography style={Styles.text}>Personal Events</Typography>
          <Typography>
            Invite your guests now digitally on a DIY Platform with no hassle
            and also share your excitement by bringing them on the same
            platform, with lot more features to keep them all engaged. You can
            also share your memories/album with all guests at a go and keep them
            all updated.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <img
            src={ImageConst.ContactImage}
            style={{
              width: width - DP._40,
              height: width - DP._40,
              borderRadius: DP._10,
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={Styles.itemContainer}
        >
          <Typography style={Styles.text}>Contact Us</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <UiTextField
            fullWidth
            size="small"
            style={{ width: width - DP._40 }}
            placeholder="Name"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <UiTextField
            fullWidth
            size="small"
            style={{ width: width - DP._40 }}
            placeholder="Email"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={Styles.content}>
          <UiTextField
            fullWidth
            multiline
            rows={3}
            size="small"
            style={{ width: width - DP._40 }}
            placeholder="Message"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ ...Styles.textContainer, marginBottom: DP._40 }}
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
            Submit
          </Button>
        </Grid>
      </Grid>
      <SignInSignUpModal
        open={openSignInSignUpModal}
        onClose={_handleModalClose}
      />
    </>
  );
};

export default WelcomeContainer;

const Styles = {
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
    marginTop: DP._15,
  },
  text: {
    fontSize: DP._30,
    fontWeight: FW.medium,
    // marginTop: DP._15,
    borderRadius: DP._10,
  },
  icon: {
    width: DP._150,
    height: DP._150,
    objectFit: "contain",
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
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    paddingLeft: DP._20,
    paddingRight: DP._20,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    paddingLeft: DP._20,
    paddingRight: DP._20,
    // marginBottom: DP._20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: DP._30,
  },
};
