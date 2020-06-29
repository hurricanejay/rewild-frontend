import React, { useEffect } from 'react';
import PlantCard from '../components/plantCard'
import { connect } from 'react-redux';
import { getPlantsActionCreator } from '../action/actionCreator'

function Shop(props) {
    useEffect(() => {
        if(!props.plants || props.plants.length === 0)
            props.getPlants()
    }, [props])

    return (
        <div>
            <h1>SHOP ALL</h1>
            <div className='image-rows'>
                {props.plants.map(plant => <PlantCard key={plant.id} plant={plant} history={props.history} />)}
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
