import React from 'react';

import Ingredient from './Ingredient';

const Recipe = (props) => {
    const {name, image, instructions, ingredients} = props.recipe;
    return <div>
        <h2>{name}</h2>
        <img src={image} width={200} alt={name}/>
        <Ingredient list={ingredients}/>
        <div>{instructions}</div>
    </div>
};

export default Recipe;