import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
    render() {
        const {ingredients} = this.props;
        return (
            <div>
                <h2>Shopping List</h2>
                <ul>
                    {ingredients.map((item, id) => <li key={id}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ListReducer.ingredients,
    }
};

export default connect(mapStateToProps)(List);