import React, { Component } from 'react';
import Aux from '../../../HOC/AUX/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //could be functional
    componentWillUpdate() {
        console.log('[OrderSummary]Will update')
    }


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}
                   </li>
        })
        return (
        <Aux>
            <p>Delicious Burger With The Following Ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue To Checkout?</p>
             <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
             <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary