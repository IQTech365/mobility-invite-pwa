import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography } from "@mui/material";
import useWindowDimensions from "../../../hooks/useWindoDimensions";
import slide1 from "../../../assets/templates/template_image.png";
import videoTemplate from "../../../assets/templates/template_video.mp4";

import colors from "../../../utils/colors";
import { DP, FW } from "../../../utils/Dimension";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactPlayer from "react-player";

var imageTemplates = [
  {
    name: "Random Name #1",
    image_url: slide1,
    description: "Probably the most random thing you have ever seen!",
    media_type: "image",
  },
  {
    name: "Random Name #2",
    image_url: slide1,
    description: "Hello World!",
    media_type: "image",
  },
  {
    name: "Random Name #2",
    image_url: slide1,
    description: "Hello World!",
    media_type: "image",
  },
  {
    name: "Random Name #2",
    image_url: slide1,
    description: "Hello World!",
    media_type: "image",
  },
  {
    name: "Random Name #2",
    image_url: slide1,
    description: "Hello World!",
    media_type: "image",
  },
];

var videoTemplates = [
  {
    name: "Random Name #1",
    image_url: videoTemplate,
    description: "Probably the most random thing you have ever seen!",
    media_type: "video",
  },
  {
    name: "Random Name #2",
    image_url: videoTemplate,
    description: "Hello World!",
    media_type: "video",
  },
  {
    name: "Random Name #2",
    image_url: videoTemplate,
    description: "Hello World!",
    media_type: "video",
  },
  {
    name: "Random Name #2",
    image_url: videoTemplate,
    description: "Hello World!",
    media_type: "video",
  },
  {
    name: "Random Name #2",
    image_url: videoTemplate,
    description: "Hello World!",
    media_type: "video",
  },
];

const TemplateCarousel = ({ onTemplateSelect, tabIndex }) => {
  const { height, width } = useWindowDimensions();

  function ImageTemplateItem({ item, onPress, index }) {
    return (
      <div style={{ width: width, height: 150 }} key={index}>
        <img
          src={item.image_url}
          style={{ width: 150, height: 150, objectFit: "contain" }}
          onClick={() => {
            onTemplateSelect && onTemplateSelect(item);
          }}
        />
      </div>
    );
  }

  function VideoTemplateItem({ item, onPress, index }) {
    return (
      <div
        style={{ width: width, height: 150 }}
        key={index}
        onClick={() => {
          onTemplateSelect && onTemplateSelect(item);
        }}
      >
        <ReactPlayer
          url={item.image_url}
          height="300"
          width="250"
          muted={true}
          playing={false}
          volume={0.5}
        />
      </div>
    );
  }

  const _renderImageTemplates = () => {
    return imageTemplates.map((item, i) => (
      <SwiperSlide>
        <ImageTemplateItem key={i} item={item} />
      </SwiperSlide>
    ));
  };

  const _renderVideoTemplates = () => {
    return videoTemplates.map((item, i) => (
      <SwiperSlide>
        <VideoTemplateItem key={i} item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => {}}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {tabIndex === 0 ? _renderImageTemplates() : _renderVideoTemplates()}
    </Swiper>
  );
};

export default TemplateCarousel;

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
