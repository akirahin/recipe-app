import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import Recipe from './Recipe';
import recipes from "../data/recipes";

class Recipes extends React.Component {
    componentDidMount() {
        this.props.actions.getAllRecipes(recipes);
    }

    recipeHandler = (e) => {
        const selected = e.target.dataset.recipe;
        this.props.actions.setCurrentRecipe(selected);
        this.props.actions.showRecipe();
    };

    render() {
        console.log(this);
        return (
                <div>
                    <h2>Recipes</h2>
                    {!this.props.selected && <ul onClick={this.recipeHandler}>
                        {this.props.recipes.map((recipe, i) => <li key={recipe.id} data-recipe={i}>{recipe.name}</li>)}
                    </ul>}

                    {this.props.selected &&
                    <div>
                        <Recipe recipe={this.props.recipes[this.props.currentRecipe]}/>
                        <button onClick={this.props.actions.hideRecipe}>Back</button>
                    </div>}
                </div>
        )
    }
}

const mapStateToRecipeAppProps = (state) => {
    return {
        recipes: state.RecipeReducer.all,
        currentRecipe: state.RecipeReducer.currentRecipe,
        selected: state.RecipeReducer.selected,
    }
};

const mapDispatchToRecipeAppProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToRecipeAppProps, mapDispatchToRecipeAppProps)(Recipes);