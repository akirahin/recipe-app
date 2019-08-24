import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/state/store'
import Recipes from './components/Recipes';
import List from './components/List';import './App.scss';

function AppRouter() {
    return (
        <Provider store={store} >
            <Router>
                <div className='app'>
                    <nav>
                        <ul className='nav'>
                            <li>
                                <Link to="/">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/list/">Shopping List</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Recipes} />
                    <Route path="/list/" component={List} />
                </div>
            </Router>
        </Provider>
    );
}

export default AppRouter;