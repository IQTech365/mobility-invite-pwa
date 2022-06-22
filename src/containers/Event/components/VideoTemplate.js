import React from "react";
import {} from "@mui/material";
import ReactPlayer from "react-player";

const VideoTemplate = ({ item }) => {
  return (
    <ReactPlayer
      url={item.image_url}
      height="300"
      width="250"
      muted={true}
      playing={true}
      volume={0.5}
    />
  );
};

export default VideoTemplate;
