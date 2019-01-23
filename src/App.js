import React, { Component } from 'react';
import Orders from './Orders';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">




      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </nav>








       <Orders/>
      </div>
    );
  }
}

export default App;
