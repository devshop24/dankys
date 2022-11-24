import { createTheme } from '@mui/material/styles';
import { primary, secondary, info } from './colors';

import typography from './typography.js';
import components from './components';

const theme = createTheme({
  palette: {
    primary,
    secondary,
    info,
  },
  typography,
  components
});

export default theme;