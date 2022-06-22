import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DP } from "../../utils/Dimension";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import { RouteKeys } from "../../routes";

const BottomNavigationBar = ({}) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);
  const AddTab = ({}) => {
    return (
      <IconButton
        style={{
          position: "absolute",
          bottom: DP._18,
          borderRadius: DP._30,
          zIndex: 9999,
        }}
        onClick={(e) => {
          e.preventDefault();
          setValue(1);
          navigate(RouteKeys.CreateEvent);
        }}
      >
        <AddCircleOutlineIcon
          va
          style={{
            width: DP._60,
            height: DP._60,
            borderRadius: DP._30,
            backgroundColor: value === 1 ? colors.BLUE : colors.GRAY,
            color: colors.WHITE,
          }}
        />
      </IconButton>
    );
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          id="guest_tab"
          label="Guests"
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          id="add_tab"
          label="Home"
          component={() => <AddTab />}
        />
        <BottomNavigationAction
          id="host_tab"
          label="Host"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
