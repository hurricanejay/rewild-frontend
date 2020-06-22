import React from 'react';

function PlantCard(props) {
    const {name, image, price, description, frequency, amount, light} = props.plant;
    return(
        <div>
        <div className='plant-card'>
            <h4>{name}</h4>
            <p>Water me every {frequency} days</p>
            <p>{amount}</p>
            <p>Preferred Light: {light}</p>
            <p>A Little About Me: {description}</p>
            <img className='image' src={image} alt='plant'/>
            <p>${price}</p>
            <button>Add To Cart</button> 
        </div>

        </div>




    )
}

export default PlantCard;