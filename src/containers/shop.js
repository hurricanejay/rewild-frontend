import React, { useEffect } from 'react';
import PlantCard from '../components/plantCard'
import { connect } from 'react-redux';
import { getPlantsActionCreator } from '../action/actionCreator'

function Shop(props) {
    useEffect(() => {
        props.getPlants()
    }, [])

    return (
        <div>
            <h1>SHOP ALL</h1>
            <div className='image-rows'>
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

export default connect(msp, mdp)(Shop)
