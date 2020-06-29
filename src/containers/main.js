import React, { useEffect } from 'react';
import { getTopThreePlantsActionCreator, setTopThreePlantsActionCreator } from '../action/actionCreator'
import PlantCard from '../components/plantCard'
import { connect } from 'react-redux';

function Main(props) {
    useEffect(() => {
        if(!props.top_three || props.top_three.length === 0)
            props.getTopThreePlants()
        return () => {
            props.setTopThreePlantsActionCreator([])
        }
    }, [props])

    return (
        <div >
            <h1>Welcome to Plantify</h1>

            <h2>Helping plant owners keep your plants alive and well </h2>
            <br></br>
            <h3>Shop Favorites</h3>
            
            <div className='top_three'>
            {props.top_three.map(plant => <PlantCard key={plant.id} plant={plant} />)}
            </div>

        </div>
    )
}

const msp = state => {
    return {
        top_three: state.top_three
    }
}

const mdp = (dispatch) => {
    return {
        getTopThreePlants: () => dispatch(getTopThreePlantsActionCreator()),
        setTopThreePlantsActionCreator: () => setTopThreePlantsActionCreator()
    }
}

export default connect(msp, mdp)(Main)