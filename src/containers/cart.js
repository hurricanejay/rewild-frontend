import React from 'react'
import { connect } from 'react-redux';
import { tsPropertySignature } from '@babel/types';

function Cart(props){

    const { name, image, price, id } = props.plant;

    plants.map(plant => {
    
    })
    
    return(
        <div>
                <p>{name}</p>
                <img className='image' src={image}
                    alt='plant' />
                <p>${price}</p>
                Quantity: 
        </div>
    )
}

const msp = state => {
    return {
        plants: state.plants,
        user: state.user
    }
}
export default connect(msp)(Cart);