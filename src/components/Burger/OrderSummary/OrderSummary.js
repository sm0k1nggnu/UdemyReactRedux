import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span
                        style={{textTransform: 'capitalize'}}>{igKey}
                    </span>:{props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>YOur Order</h3>
            <p>All ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>COntinue to checkout</p>
        </Aux>
    );
}

export default orderSummary;

// const orderSummary = (props) => {
//     return (
//         <Aux>
//             real function with logic
//         </Aux>
//     );
// }

// const modal = (props) => (
//     <div className={classes.Modal}>no logic, just return</div>
// )