import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { DP } from "../../utils/Dimension";

const UiTextField = styled(TextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderRadius: DP._20,
  },
}));

export default UiTextField;
