import React from 'react';

function Plant(props) {
    const {plant, waterings} = props.userPlant;
    const {name, image} = plant
    

    //userplant.plant 
    
    return(
        <div className='plant-card' >

            <h4>{name}</h4>
            <img  className='image' src={image} alt='plant'/>
            <p>Select your watering date</p>
            <p>Last Watering Date: 
                {waterings && waterings.length > 0 && waterings[waterings.length -1] && waterings[waterings.length -1].date }
            </p>
            <p>Next Watering Date:</p>
        </div>



    )
}

export default Plant;