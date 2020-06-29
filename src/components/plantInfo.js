import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { API_ROOT } from '../constants'

function PlantInfo() {
  const [plant, setPlant] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchPlantInfo = () => {
      fetch(`${API_ROOT}${location.pathname}`)
        .then(res => res.json())
        .then(plantInfo => {
          setPlant(plantInfo)
        });
    };

    if (!plant) {
      fetchPlantInfo();
    }
  }, [plant, location]);

  return (
    <div className="plant-info">
      <h4>{plant && plant.name}</h4>
      <p>Water me every {plant && plant.frequency} days</p>
      <p>{plant && plant.amount}</p>
      <p>Preferred Light: {plant && plant.light}</p>
      <p>A Little About Me: {plant && plant.description}</p>
      <img className="image" src={plant && plant.image} alt="plant" />
      <p>${plant && plant.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default PlantInfo;
