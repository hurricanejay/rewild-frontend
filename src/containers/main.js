import React, { Component } from "react";
import PlantCard from "../components/PlantCard.js";
import { useEffect, useState } from 'react';

class Main extends React.Component {
  state = {
    plants: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/plants")
      .then(response => response.json())
      .then(plants => this.setState({ plants }));
  }

  render() {
    return (
      <div>
        <h1>MAIN PAGE</h1>
        <h2>Plants</h2>
        {this.state.plants.map(plant => {
          return <PlantCard plant={plant} />;
        })}
      </div>
    );
  }
}

export default Main;
