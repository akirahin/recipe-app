import React from 'react';

export default class Ingredient extends React.Component {
    render() {
        const {list} = this.props;
        return (
            <ol>
                {list.map((item, id) => <li key={id}><span>{item}</span><button>+</button></li>)}
            </ol>
        )
    }
}