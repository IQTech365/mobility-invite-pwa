import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindoDimensions";
import slide1 from "../../assets/carousel/slide_1.jpeg";
import colors from "../../utils/colors";
import { DP, FW } from "../../utils/Dimension";

var items = [
  {
    name: "Random Name #1",
    image_url: slide1,
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    image_url: slide1,
    description: "Hello World!",
  },
];

const MainCarousel = ({ onSignInSignUpPress, onCreateEventPress }) => {
  const { height, width } = useWindowDimensions();
  function Item({ item }) {
    return (
      <div style={{ width: width, height: height - 100 }}>
        <img
          src={item.image_url}
          style={{ width: width, height: height - 100, objectFit: "cover" }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: width,
            height: height - 100,
          }}
        >
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item style={Styles.container} xs={12} sm={12} md={12} lg={12}>
              <Typography style={Styles.titleText}>
                A Smarter Way to Invite
              </Typography>
              <Typography style={Styles.descriptionText}>
                Invite people to celeberate your occasion
              </Typography>
              <Button
                variant="contained"
                style={Styles.button}
                onClick={() => {
                    onCreateEventPress && onCreateEventPress();
                }}
              >
                Create Event
              </Button>
            </Grid>
            <Grid item style={Styles.container} xs={12} sm={12} md={12} lg={12}>
              <Button
                variant="contained"
                style={Styles.signInSignUp}
                disableElevation
                onClick={() => {
                  onSignInSignUpPress && onSignInSignUpPress();
                }}
              >
                SignIn / SignUp
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default MainCarousel;

const Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: colors.WHITE,
    fontSize: DP._30,
    fontWeight: FW.bold,
  },
  descriptionText: {
    color: colors.WHITE,
    fontSize: DP._20,
    fontWeight: FW.semiBold,
  },
  button: {
    borderRadius: DP._30,
    textTransform: "none",
    paddingTop: DP._10,
    paddingBottom: DP._10,
    paddingLeft: DP._25,
    paddingRight: DP._25,
    fontWeight: FW.bold,
  },
  signInSignUp: {
    borderRadius: DP._30,
    textTransform: "none",
    paddingTop: DP._10,
    paddingBottom: DP._10,
    paddingLeft: DP._25,
    paddingRight: DP._25,
    backgroundColor: colors.BLACK,
    fontWeight: FW.bold,
  },
};
