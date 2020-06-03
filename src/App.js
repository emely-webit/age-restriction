import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header'
import Frontpage from './components/Frontpage/Frontpage';
import Diskotek18 from './components/Diskotek/Diskotek18';
import Butik from './components/Butik/Butik';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#0044ff',
    },
    error: {
      main: '#F20505',
    },
    warning: {
      main: '#FFB845',
    },
    success: {
      main: '#78CC4F',
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Header />
        <div className="App">
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/butik" component={Butik}/>
          <Route exact path="/diskotek-over-16"  />
          <Route exact path="/diskotek-over-18" component={Diskotek18} />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
