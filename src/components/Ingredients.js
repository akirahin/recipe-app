import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {listActions} from '../state/actions';
import styles from './Ingredients.module.scss';

class Ingredients extends React.Component {
    addHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const button = e.target;
        this.props.actions.add(button.dataset.ingredient);
    };

    render() {
        const {list} = this.props;
        return (
            <div>
                <div className={styles.subHeader}>Ingredients:</div>
                <ul className={styles.list}>
                    {list.map((item, id) =>
                        <li className={styles.listItem} key={id}>
                            <span>{item}</span>
                            {this.props.ingredients.includes(item) ?
                                <button className={styles.addBtn} disabled>&#10004;</button>:
                                <button className={styles.addBtn} data-ingredient={item} onClick={this.addHandler}>Add to List</button>}
                        </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ListReducer.ingredients
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(listActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);