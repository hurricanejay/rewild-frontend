import React, { Component, useState, useEffect } from 'react';
import PlantCard from '../components/plantCard'
import { connect } from 'react-redux';
import { getPlantsActionCreator } from '../action/actionCreator'

function Main(props) {
    // const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        props.getPlants()
    }, [])

    return (
        <div>
            <h1>MAIN PAGE</h1>
            <div class='image-rows'>

            {props.plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
            </div>
        </div>
    )
}

const msp = state => {
    return {
        plants: state.plants
    }
}

const mdp = (dispatch) => {
    return {
        getPlants: () => dispatch(getPlantsActionCreator())
    }
}

export default connect(msp, mdp)(Main)
