import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {listActions} from '../state/actions';

class Ingredients extends React.Component {
    addHandler = (e) => {
        const button = e.target;
        this.props.actions.add(button.dataset.ingredient);
        button.innerHTML = 'added';
        button.disabled = true;
    };

    render() {
        const {list} = this.props;
        return (
            <ol onClick={this.addHandler}>
                {list.map((item, id) => <li key={id}><span>{item}</span><button data-ingredient={item}>+</button></li>)}
            </ol>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(listActions, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Ingredients);