import { createTheme, Theme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";
import bluegrey from '@material-ui/core/colors/blueGrey';

const ftaTheme: Theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: bluegrey[50],
    },
    primary: {
      main:  "#483d8b",
    },
    secondary: {
      main: purple[300],
    },
  },
});

export default ftaTheme;