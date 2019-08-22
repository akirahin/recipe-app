import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import Recipe from './Recipe';

class Recipes extends React.Component {
    recipeHandler = (e) => {
        this.setState({selectedRecipe: e.target.innerHTML})
    };

    backHandler = () => {
        this.setState({selectedRecipe: ''})
    };

    render() {
        console.log(this);
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

const mapStateToRecipeAppProps = (state) => {
    return {
        recipes: state.all,
        currentRecipe: state.currentRecipe,
        isOpen: state.isOpen,
    }
};

const mapDispatchToRecipeAppProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToRecipeAppProps, mapDispatchToRecipeAppProps)(Recipes);