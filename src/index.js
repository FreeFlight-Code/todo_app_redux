import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo"
import EditItem from "./components/EditItem"
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <div id='Fullpage' >
                <Route exact path="/" component={Todo}/>
                <Route path="/details" component={EditItem}/>
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

