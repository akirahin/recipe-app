import * as actions from '../actions/actionTypes';

const initialState = {
    all: [],
    currentRecipe: {id: null},
    selected: false,
};

const RecipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_ALL_RECIPES:
            return {...state, all: action.recipes};

        case actions.SET_CURRENT_RECIPE:
            return {...state, currentRecipe: action.id};

        case actions.SHOW_RECIPE:
            return {...state, selected: true};

        case actions.HIDE_RECIPE:
            return {...state, selected: false};

        default:
            return state;
    }
};

export default RecipeReducer;