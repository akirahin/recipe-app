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
        button.innerHTML = '&#10004;';
        button.disabled = true;
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
                            <button className={styles.addBtn} data-ingredient={item} onClick={this.addHandler}>Add to List</button>
                        </li>)}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(listActions, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Ingredients);