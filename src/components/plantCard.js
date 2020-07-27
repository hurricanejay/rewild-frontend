import React, { useState } from 'react';

function PlantCard(props) {
    const { name, image, price, id } = props.plant;
    const [showButton, setShowButton] = useState(false)

    const moreInfo = () => {
        props.history.push(`/plants/${id}`)
    }

    return (
        <div className='plant-card'
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            <div onClick={() => moreInfo()}>
                <h4>{name}</h4>
                <img className='image' src={image}
                    alt='plant' />
                <p>${price}</p>
            </div>
            {showButton && <button id='cart-btn'>Add To Cart</button>}
        </div>
    )
}

export default PlantCard;