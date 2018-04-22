import React, { Component } from 'react';
import './App.scss';  

class App extends Component {
  render() {
    return (
      <div className="AppWrap">
        <div className="App">
            <h1 className="App-title">Hello World</h1>
        </div>
        <div class="cloud cloudA"></div>
        <div class="cloud cloudB"></div>
      </div>
    );
  }
}

export default App;
