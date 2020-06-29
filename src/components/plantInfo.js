import React, { useState, useEffect } from "react";
import { API_ROOT, HEADERS } from '../constants'

function PlantInfo(props) {

    const [plant, setPlant] = useState(null);

  useEffect(() => {
    console.log("use effect?");
    if (!plant) {
      fetchPlantInfo();
    }
  }, [plant]);

  const fetchPlantInfo = () => {
    fetch(`${API_ROOT}/plants`)
      .then(res => res.json())
      .then(plantInfo => {
        setPlant(plantInfo)
      });
  };

//   const {name, amount, frequency, light, image, description, price} = plant
  return (


    <div className="plant-card">
      <h4>{plant.name}</h4>
      <p>Water me every {plant.frequency} days</p>
      <p>{plant.amount}</p>
      <p>Preferred Light: {plant.light}</p>
      <p>A Little About Me: {plant.description}</p>
      <img className="image" src={plant.image} alt="plant" />
      <p>${plant.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default PlantInfo;
