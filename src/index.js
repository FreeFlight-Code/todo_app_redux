import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';

import store from "./redux/store";

import Todo from "./components/Todo"

ReactDOM.render(
    <Provider store={ store }>
        <Todo />
    </Provider>, 
    document.getElementById('root')
);

