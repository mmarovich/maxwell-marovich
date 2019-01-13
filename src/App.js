import React, { Component } from 'react';
import './App.css';
import './assets/styles/rodal.css';

import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
