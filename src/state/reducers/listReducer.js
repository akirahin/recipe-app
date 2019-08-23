import * as actions from '../actions/actionTypes';

const ListReducer = (state= {ingredients: []}, action) => {
    if (action.type === actions.ADD_TO_LIST) {
        return {...state, ingredients: [...state.ingredients, action.ingredient]};
    } else {
        return state;
    }
};

export default ListReducer;