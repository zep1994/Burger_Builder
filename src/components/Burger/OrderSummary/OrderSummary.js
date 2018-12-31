import React from 'react';
import Aux from '../../../HOC/Aux';
import Button from '../../UI/Button/Button'

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
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary