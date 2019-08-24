import React from 'react';
import { connect } from 'react-redux';
import styles from './List.module.scss'

class List extends React.Component {
    toggleHandler = (e) => {
        const item = e.target;
        item.classList.toggle(styles.bought)
    };

    render() {
        const {ingredients} = this.props;
        return (
            <div className={styles.container}>
                <h2>Shopping List</h2>
                <div className={styles.subHeader}>
                    {ingredients.length ? 'Click on items to strike them off your list!' :'You dont need to buy anything!'}
                </div>
                <ol className={styles.shopList}>
                    {ingredients.map((item, id) => <li key={id} onClick={this.toggleHandler}>{item}</li>)}
                </ol>
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