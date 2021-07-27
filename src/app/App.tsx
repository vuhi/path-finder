import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Themes from './Themes';
import AppRoutes from './AppRoutes';


const App: FunctionComponent<any> = () => {
  return (
    <ThemeProvider theme={Themes}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
