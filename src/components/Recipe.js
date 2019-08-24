import React from 'react';
import styles from './Recipe.module.scss'

import Ingredients from './Ingredients';

const Recipe = (props) => {
    const {name, image, instructions, ingredients} = props.recipe;
    return <div className={styles.container}>
        <h3 className={styles.header}>{name}</h3>
        <img src={image} alt={name} className={styles.image}/>
        <Ingredients list={ingredients}/>
        <div className={styles.instructions}>{instructions}</div>
    </div>
};

export default Recipe;