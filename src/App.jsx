import { useState } from 'react';
import './assets/css/App.css';
import AppBar from './components/layout/SearchAppBar';
import currentWeather from './components/currentWeather';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import MiniDrawer from './components/layout/MiniDrawer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App w-full">
        <MiniDrawer />
        {/* <AppBar /> */}

        <cardImg />
      </div>
      <div className="container"></div>
    </ThemeProvider>
  );
}

export default App;
