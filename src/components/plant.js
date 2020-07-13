import React, { useState } from 'react';

function Plant(props) {
    const {plant, waterings} = props.userPlant;
    const {name, image} = plant
    
    const [date, setDate] = useState(null)

    const handleChange = (event) => {
       setDate(event.target.value)
    }
    
    return(
        <div className='plant' >

            <h4>{name}</h4>
            <img  className='image' src={image} alt='plant'/>
            <input type='date' value={date} onChange={(event) => handleChange(event)}/> 
            <input type="submit" value="Submit"/>
            <p></p>
            <p>Last Watering Date: 
                {waterings && waterings.length > 0 && waterings[waterings.length -1] && waterings[waterings.length -1].date }
            </p>
            <p>Next Watering Date:</p>
        </div>



    )
}

export default Plant;