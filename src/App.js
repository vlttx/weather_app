import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'

class App extends Component{
 constructor() {
  super()

  this.state ={
    fetchingData: true,
    //once the fetching of data will be finished, set it to false
    weatherDate: {}
  }
 }

  render(){
    const {fetchingData } = this.state
    console.log(fetchingData)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>    
      </header>
      <p>
      {fetchingData ?
        <img src={logo} className="App-logo" alt="logo"/> : <h2>Data was received</h2>}
      </p>
    </div>
  );
}
}

export default App;
