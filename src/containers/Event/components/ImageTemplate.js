import React from "react";
import {} from "@mui/material";
import ReactPlayer from "react-player";

const ImageTemplate = ({ item }) => {
  return (
    <img
      src={item.image_url}
      style={{ width: "90%", height: 350, objectFit: "contain" }}
    />
  );
};

export default ImageTemplate;
