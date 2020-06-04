import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Frontpage from './components/Frontpage/Frontpage';
import Butik from './components/Butik/Butik';
import Diskotek18 from './components/Diskotek/Diskotek18';
import Diskotek16 from './components/Diskotek/Diskotek16';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#393D42',
      contrastText: '#fefefe'
    },
    secondary: {
      main: '#7C05F2',
    },
    error: {
      main: '#F20505',
    },
    warning: {
      main: '#FFB845',
    },
    success: {
      main: '#93F205',
    },
    info: {
      main: '#730202'
    },
    text: {
      secondary: '#fefefe'
    },
    background: {
      paper: '#393D42'
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
          <Route exact path="/diskotek-over-16" component={Diskotek16}  />
          <Route exact path="/diskotek-over-18" component={Diskotek18} />
        </div>
        <Footer/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
