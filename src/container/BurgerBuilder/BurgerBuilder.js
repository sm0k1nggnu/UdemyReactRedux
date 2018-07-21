import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 1,
            cheese: 0,
            bacon: 0
        }
    }
    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Building Tools</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;