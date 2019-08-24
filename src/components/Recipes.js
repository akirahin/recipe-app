import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/actions';
import Recipe from './Recipe';
import recipes from '../data/recipes';
import styles from './Recipes.module.scss';

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
        return (
                <div className={styles.container}>
                    <h2 className={styles.header}>Recipes</h2>
                    {!this.props.selected && <div className={styles.subHeader}>Select a Recipe</div>}
                    {this.props.selected ?
                        <button onClick={this.props.actions.hideRecipe} className={styles.back}>Back to Contents</button> :
                        <ul onClick={this.recipeHandler} className={styles.list}>
                            {this.props.recipes.map((recipe, i) => <li key={recipe.id} data-recipe={i} className={styles.listItem}>{recipe.name}</li>)}
                        </ul>
                    }

                    {this.props.selected && <Recipe recipe={this.props.recipes[this.props.currentRecipe]}/>}
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