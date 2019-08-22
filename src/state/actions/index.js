import * as action from './actionTypes';
import recipes from '../../data/recipes'

const actions = {
    getAllRecipes: () => {
        return {
            type: action.GET_ALL_RECIPES,
            recipes
        }
    },

    setCurrentRecipe: (recipe) => {
        return {
            type: action.SET_CURRENT_RECIPE,
            recipe
        }
    },

    showRecipe: () => {
        return {
            type: action.SHOW_RECIPE,
        }
    },

    hideRecipe: () => {
        return {
            type: action.HIDE_RECIPE,
        }
    }
};

export default actions;