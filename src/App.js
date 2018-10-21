import React, { Component } from "react";
import axios from "axios";
import Map from "./components/Map";
import "./App.css";

class App extends Component {
    state = {
        radius: "",
        energy: "",
        mass: ""
    };
    updateStateRadius(radius, name) {
        this.setState({ radius, name });
    }
    updateStateEnergy(energy, name) {
        this.setState({ energy, name });
    }
    updateStateMass(mass, name) {
        this.setState({ mass, name });
    }
    componentDidMount() {
        axios
            .get("https://teasteroidm-api.herokuapp.com/api")
            .then(json =>
                json.data.map(
                    result => this.updateStateRadius(result.blastRadius, result.name),
                    result => this.updateStateEnergy(result.energy, result.name),
                    result => this.updateStateMass(result.mass, result.name)
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
        const radius = this.state.radius;
        const energy = this.state.energy;
        const mass = this.state.mass;
        return ( <
            div className = "App" >
            <
            header / >
            <
            Map circleOptions = { this.getCircleOptions() }
            /> <
            div id = "knowledge" >
            <
            ul >
            <
            li > Energy Amount: { energy } < /li> <
            li > Mass: { mass } < /li> <
            li > Velocity < /li> <
            li > Blast Radius: { radius } < /li> <
            a href = "https://www.nasa.gov/feature/jpl/nasa-and-fema-conduct-asteroid-impact-emergency-planning-exercise" >
            Emergency Preparedness Plan <
            /a> <
            /ul> <
            /div>

            <
            div id = "about" / >
            <
            p >
            The Tracking Extraterrestrial Astroids and Meteorites(T.E.A.M) was created
            for the purpose to identify potential asteroids threats that could potentially hit the earth atmosphere. { " " } <
            /p> <
            /div>
        );
    }
}

export default App;