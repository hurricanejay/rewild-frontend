import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createWatering } from '../action/actionCreator'

function Plant(props) {
    const { plant, waterings, id } = props.userPlant;
    const { name, image } = plant

    const [date, setDate] = useState('')

    const handleChange = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createWatering(id, date, props.user.id)
    }


    return (
        <div className='plant' >
            <h4>{name}</h4>
            <img className='image' src={image} alt='plant' />
            <p>Select Most Recent Date</p>
            <input type='date' value={date} onChange={(event) => handleChange(event)} />
            <input type="submit" value="Submit" onClick={(event) => handleSubmit(event)} />
            <p></p>
            <p>Last Watering Date:
                {waterings && waterings.length > 0 && waterings[waterings.length - 1] && `${new Date(waterings[waterings.length - 1].date).getUTCMonth() + 1}/${new Date(waterings[waterings.length - 1].date).getUTCDate()}/${new Date(waterings[waterings.length - 1].date).getUTCFullYear()}`}
            </p>
            <p>Next Watering Date:</p>
        </div>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

const mdp = dispatch => {
    return {
        createWatering: (userPlantId, date, userId) => dispatch(createWatering(userPlantId, date, userId))
    }
}

export default connect(msp, mdp)(Plant);