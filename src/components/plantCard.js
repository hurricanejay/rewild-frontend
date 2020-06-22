import React from 'react';

function PlantCard(props) {
    const {name, image, price, description, frequency, amount, light} = props.plant;
    return(
        <div>
            <h3>{name}</h3>
            <h4>{frequency}</h4>
            <h4>{light}</h4>
            <img src={image} />
            <p>{description}</p>
            <h3>{price}</h3>
            <h3>{amount}</h3>
        </div>
    )
}

export default PlantCard;