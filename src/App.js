import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Recipes from './components/Recipes';
import List from './components/List';

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
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
    );
}

export default AppRouter;