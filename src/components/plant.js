import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createWatering} from '../action/actionCreator'

function Plant(props) {
    const {plant, waterings, id} = props.userPlant;
    const {name, image} = plant
    
    const [date, setDate] = useState(null)

    const handleChange = (event) => {
       setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createWatering(id, date)
    }


    return(
        <div className='plant' >

            <h4>{name}</h4>
            <img  className='image' src={image} alt='plant'/>
            <input type='date' value={date} onChange={(event) => handleChange(event)}/> 
            <input type="submit" value="Submit" onSubmit={handleSubmit}/>
            <p></p>
            <p>Last Watering Date: 
                {waterings && waterings.length > 0 && waterings[waterings.length -1] && waterings[waterings.length -1].date }
            </p>
            <p>Next Watering Date:</p>
        </div>



    )
}

const mdp = dispatch => {
    return {
        createWatering: (userPlantId, date) => dispatch(createWatering(userPlantId, date))
    }
}

export default connect(null, mdp)(Plant);