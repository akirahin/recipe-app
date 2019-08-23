import { combineReducers } from 'redux';
import RecipeReducer from './recipeReducer';
import ListReducer from './listReducer';

export default combineReducers({
    RecipeReducer,
    ListReducer
});