import * as actions from '../actions/actionTypes';

const initialState = {
    lastId: 0,
    all: [],
    currentRecipe: {id: null},
    isOpen: false,
};

const RecipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_ALL_RECIPES:
            let lastId = state.lastId;
            let recipes = action.recipes.all.map(recipe => {
                lastId = lastId++;
                recipe.id = lastId;
                return recipe;
            });
            return {...state, lastId: lastId, all: recipes};
        case actions.SET_CURRENT_RECIPE:
            let newCurrent = state.currentRecipe.id === action.recipe.id ? initialState.currentRecipe : action.recipe;
            return {...state, currentRecipe: newCurrent};

        case actions.SHOW_RECIPE:
            return {...state, isOpen: true};

        case actions.HIDE_RECIPE:
            return {...state, isOpen: false};
        default:
            return state;
    }
};

export default RecipeReducer;