import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Header/>
          <div className='container'>
              <Dashboard/>
          </div>
      </div>
    );
  }
}

export default App;
