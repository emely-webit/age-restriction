import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400'
    },
    secondary: {
      main: '#0044ff'
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
          <Route exact path="/" />
          <Route exact path="/butik" />
          <Route exact path="/diskotek-over-16" />
          <Route exact path="/diskotek-over-18" />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
