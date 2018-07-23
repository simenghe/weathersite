import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from "./components/Weather.js"
const API_KEY="da11038c911fa7bfbc83fcc237df37e0"

class App extends React.Component{
    getWeather=async()=>{
        const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        const data=await api_call.json();
        console.log(data);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <code>wez</code>
        </p>
          <header className="Big-chad">
              <h1 className="App-intro"><code>Whats up</code></h1>
              <h2 className="Big-chad"><code>Bigger chad</code></h2>
          </header>
      </div>
    );
  }
}

export default App;
