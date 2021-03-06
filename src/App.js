import React, { Component } from "react";
import axios from "axios";
import Map from "./components/Map";
import "./App.css";
class App extends Component {
  state = {
    radius: "",
    energy: "",
    mass: "",
    v_imp: "",
    silustyle
    blastRadius: "",
    fireball: "",
    richterScale: ""
  };
  updateState(name, energy, mass, v_imp, blastRadius, fireball, richterScale) {
    this.setState({
      name,
      energy,
      mass,
      v_imp,
      blastRadius,
      fireball,
      richterScale
    });

    blastRadius:"",
    fireball:"",
    richterScale:""
  };
  updateState(name, energy, mass, v_imp, blastRadius, fireball, richterScale){
  this.setState({name, energy, mass, v_imp, blastRadius, fireball, richterScale })
master
  }
  // updateStateRadius(radius, name) {
  //   this.setState({ radius, name });
  // }
  // updateStateEnergy(energy, name) {
  //   this.setState({ energy, name });
  // }
  // updateStateMass(mass, name) {
  //   this.setState({ mass, name });
  // }
  componentDidMount() {
    axios
      .get("https://teasteroidm-api.herokuapp.com/api")
      .then(json =>
            silustyle
        json.data.map(result =>
          this.updateState(
            result.name,
            result.energy,
            result.mass,
            result.v_imp,
            result.blastRadius,
            result.fireball,
            result.richterScale
          )

        json.data.map(
          result => this.updateState(result.name, result.energy, result.mass, result.v_imp, result.blastRadius, result.fireball, result.richterScale)
master
        )
      );
    // .then(newData => console.log(newData));
    //==========
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
    const blastRadius = this.state.blastRadius;
    const energy = this.state.energy;
    const mass = this.state.mass;
    const vel = this.state.v_imp;
    return (
      <div className="App">
        <header />

        {/* <Map circleOptions={this.getCircleOptions()} /> */}
        <div id="knowledge">
          <ul id="list">
=======
        <Map circleOptions={this.getCircleOptions()} />
        <div id="knowledge">
          <ul>

            <li>Energy Amount: {energy}</li>
            <li>Mass: {mass}</li>
            <li>Velocity: {vel}</li>
            <li>Blast Radius: {blastRadius}</li>
            <a href="https://www.nasa.gov/feature/jpl/nasa-and-fema-conduct-asteroid-impact-emergency-planning-exercise">
              Emergency Preparedness Plan
            </a>
          </ul>
        </div>
        <div id="about" />
        <p>
          The Tracking Extraterrestrial Astroids and Meteorites (T.E.A.M) was
 silustyle
          created for the purpose of identifying potential threats posed by
          Astroids and Meteorites to Earth atmosphere. The primary objective of
          the TEAM App's is to provide up-to-date critical information to in
          order to educate communities around the world to be prepared to
          mitigate the potential impact of Astroids related disasters.

          created for the purpose of identifying potential threats posed by Astroids and Meteorites
          to Earth atmosphere. The primary objective of the TEAM App's is to provide up-to-date critical information to 
           in order to educate communities around the world to be prepared to mitigate the potential impact of Astroids related disasters. 
 master
        </p>
      </div>
    );
  }
}
export default App;

