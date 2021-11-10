import { createTheme, Theme, adaptV4Theme } from "@mui/material/styles";

import { purple, blueGrey as bluegrey } from '@mui/material/colors';

const ftaTheme: Theme = createTheme(adaptV4Theme({
  palette: {
    mode: 'light',
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
}));

export default ftaTheme;