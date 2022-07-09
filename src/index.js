import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { Outlet, HashRouter, useRoutes } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import HomePage from './pages/HomePage/HomePage';
import Header from './component/Header';

const route = {
  path: "/", title: "主页", element: <Outlet />, children: [
    { title: "主页", index: true, element: <HomePage /> },
  ]
}

function Routes() {
  return (
    <Fragment>
      {useRoutes([route])}
    </Fragment>
  )
}

function Index() {
  const theme = createTheme({

  })
  return (
    <ThemeProvider theme={theme}>
      <Header routes={route}/>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
