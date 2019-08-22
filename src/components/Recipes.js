import React from 'react';
import Recipe from "./Recipe";

export default class Recipes extends React.Component {
    state = {
        selectedRecipe: '',
    };

    recipeHandler = (e) => {
        this.setState({selectedRecipe: e.target.innerHTML})
    };

    backHandler = () => {
        this.setState({selectedRecipe: ''})
    };

    render() {
        const recipe = this.state.selectedRecipe;
        return (
                <div>
                    <h2>Recipes</h2>
                    <ul onClick={this.recipeHandler}>
                        <li>
                            Recipe 1
                        </li>
                        <li>
                            Recipe 2
                        </li>
                    </ul>
                    <button onClick={this.backHandler}>Back</button>
                    {this.state.selectedRecipe && <Recipe recipe={recipe}/>}
                </div>
        )
    }
}