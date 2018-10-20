import React, { Component } from "react";
import axios from "axios";
import Map from "./components/Map";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.getAllData();
  }
  getCircleOptions(
    lat = 40.73061,
    lng = -73.935242,
    radius = Math.sqrt(1000) * 100
  ) {
    return {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 0.35,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      center: { lat, lng },
      radius: radius
    };
  }
  getAllData() {
    axios
      .get("https://teasteroidm-api.herokuapp.com/api", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(results => {
        console.log(results);
      });
  }
  render() {
    return (
      <div className="App">
        <Map circleOptions={this.getCircleOptions()} />
      </div>
    );
  }
}

export default App;
