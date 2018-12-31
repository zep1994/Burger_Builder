import React from 'react';
import Aux from '../../../HOC/Aux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
               </li>
    })
    return(
        <Aux>
            <p>Delicious Burger With The Following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue To Checkout?</p>
        </Aux>
    )
}

export default OrderSummary