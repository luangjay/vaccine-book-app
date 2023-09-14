import { type ThemeOptions } from "@mui/material/styles";
import { fontSans } from "./fonts";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0d47a1",
      light: "#3d6bb3",
      dark: "#093170",
      contrastText: "#f6f6f8",
    },
    secondary: {
      main: "#00695c",
      light: "#33877c",
      dark: "#004940",
      contrastText: "#f6f6f8",
    },
    info: {
      main: "#03a9f4",
      light: "#35baf6",
      dark: "#0276aa",
      contrastText: "#f6f6f8",
    },
    success: {
      main: "#4caf50",
      light: "#6fbf73",
      dark: "#357a38",
      contrastText: "#f6f6f8",
    },
    warning: {
      main: "#ffc107",
      light: "#ffcd38",
      dark: "#b28704",
      contrastText: "#f6f6f8",
    },
    error: {
      main: "#f44336",
      light: "#f6685e",
      dark: "	#aa2e25",
      contrastText: "#f6f6f8",
    },
  },
  typography: {
    fontFamily: fontSans.style.fontFamily,
  },
};

export default themeOptions;
