import React, { Component, Card } from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather.js";
import ChadCard from "./components/ChadCard.js";
const API_KEY = "da11038c911fa7bfbc83fcc237df37e0";
const diaboloImage='http://medias12.netjuggler.net/produit/epic-diabolo/a-dream-3.jpg';

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my website!</h1>
        </header>
        <p className="App-intro">
            <ChadCard/>
            <img src={diaboloImage}/>
          <code>Integrate the wez</code>
        </p>
        <header className="Big-chad">
          <h1 className="App-intro">
            <code>Whats up</code>
          </h1>
          <h2 className="Big-chad">
            <code>Bigger chad</code>
          </h2>
            <h3 className="Big-title">
                MY HACKINTOSH JOURNEY!
            </h3>
        </header>
      </div>
    );
  }
}

export default App;
