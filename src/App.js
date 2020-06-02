import React from 'react';
import Frontpage from './components/Frontpage/Frontpage';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>

      <div className="App">
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/butik" component={Header} />
        <Route exact path="/diskotek-over-16" component={Frontpage} />
        <Route exact path="/diskotek-over-18" component={Frontpage} />
      </div>

    </HashRouter>
  );
}

export default App;
