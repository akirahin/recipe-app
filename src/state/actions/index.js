import * as action from './actionTypes';

export const actions = {
    getAllRecipes: (recipes) => {
        return {
            type: action.GET_ALL_RECIPES,
            recipes
        }
    },

    setCurrentRecipe: (id) => {
        return {
            type: action.SET_CURRENT_RECIPE,
            id
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

export const listActions = {
    add: (ingredient) => {
        return {
            type: action.ADD_TO_LIST,
            ingredient
        }
    }
};