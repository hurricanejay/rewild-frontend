import React from 'react';

function PlantCard(props) {
    const {name, image, price, id} = props.plant;
    
    const moreInfo = () => {
        props.history.push(`/plants/${id}`)
    }
    
    return(
        <div className='plant-card' onClick={() => moreInfo()} >

            <h4>{name}</h4>
            <img  className='image' src={image} alt='plant'/>
            <p>${price}</p>
            <button>Add To Cart</button> 
        </div>



    )
}

export default PlantCard;