import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './Forecast/forecast.js';
import CurrentWeather from './CurrentWeather/currentweather';
import axios from 'axios';

var forecastResponse;

class App extends Component {
  state={
    response:false,
    current:false
  }
  componentDidMount(){
    debugger;
    axios.get('http://api.apixu.com/v1/forecast.json?key=3880a9a22f2f4c15a9d142434181210&q=jaisalmer&days=5')
    .then(response => {
        debugger;
        forecastResponse=response.data;
        this.setState({
          response:response.data
        });
        console.log(response);
      })
      .catch(error => {
          debugger;
        console.log(error);
      });

      axios.get('http://api.apixu.com/v1/current.json?key=3880a9a22f2f4c15a9d142434181210&q=jaisalmer')
      .then(response => {
          debugger;
          forecastResponse=response.data;
          this.setState({
            current:response.data
          });
          console.log(response);
        })
        .catch(error => {
            debugger;
          console.log(error);
        });
  }
  render() {
    return (
      <div className="App">
      <h1>Weather Forecast Today</h1>
      <CurrentWeather today={this.state.current}/>
       <Forecast value={this.state.response}/>
      </div>
    );
  }
}

export default App;
