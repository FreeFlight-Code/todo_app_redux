import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo"
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <Todo />
    </Provider>, 
    document.getElementById('root')
);

