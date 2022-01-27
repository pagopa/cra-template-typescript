import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@pagopa/mui-italia/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Template
    </ThemeProvider>
  );
};

export default App;
