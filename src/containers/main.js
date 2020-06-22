import React, { Component, useState, useEffect } from 'react';
import PlantCard from '../components/plantCard'

function Main() {
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/plants')
        .then(resp => resp.json())
        .then(data => {
            setPlantData(data)
        })
    })

    return (
        <div>
            <h1>MAIN PAGE</h1>
            {plantData.map(plant => <PlantCard plant={plant} />)}
        </div>
    )
}

export default Main;