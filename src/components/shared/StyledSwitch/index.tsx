// vendor imports
import React from "react";
import {
  styled,
  Switch,
  SwitchProps,
} from "@mui/material";

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch {...props} />
))(({ theme }) => ({
  width: 50,
  height: 28,
  padding: 0,
  borderRadius: 26,
  overflow: "hidden",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    // checked
    "&.Mui-checked": {
      transform: "translateX(21px)",
      color: theme.palette.text.primary,
      // трек checked
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0,
      },
      // ползунок checked
      "& .MuiSwitch-thumb::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${encodeURIComponent(theme.palette.text.secondary)}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      },
    },
  },
  // трек
  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.info.main,
    opacity: 1,
    transitionDuration: "300ms",
  },
  // ползунок
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 25,
    "&:before": {
      content: "\"\"",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 18,
      height: 18,
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" fill="${encodeURIComponent(theme.palette.text.secondary)}"/></svg>')`,
      left: 4,
    },
  },
}));

export default StyledSwitch;
