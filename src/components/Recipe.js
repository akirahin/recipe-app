import React from 'react';

import Ingredients from './Ingredient';

const Recipe = (props) => {
    const {name, image, instructions, ingredients} = props.recipe;
    return <div>
        <h2>{name}</h2>
        <img src={image} width={200} alt={name}/>
        <Ingredients list={ingredients}/>
        <div>{instructions}</div>
    </div>
};

export default Recipe;