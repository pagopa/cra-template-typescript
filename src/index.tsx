import 'react-app-polyfill/ie11';
import 'core-js/es/object/values';
import 'core-js/es/promise';
import 'core-js/es/array';
import 'core-js/stable/string';
import 'core-js/stable/number';
import 'core-js/stable/url-search-params';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@pagopa/mui-italia/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          APP
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
