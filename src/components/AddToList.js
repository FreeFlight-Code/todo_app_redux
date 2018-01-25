import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/AddToList.css';

class AddToList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(val) {
        if (!val) {
            alert('Please input a new task...')
        } else {
            this.props.dispatch({
                type: 'ADD_ITEM',
                payload: val
            })
        }
        document.querySelector("#addInput").value = "";
        // console.log(document.querySelector("#addInput").value);


    }

    render() {
        return (
            <div id='AddToListContainer'>
                <input placeholder='add new item' type="search" name="Add Todo Item" id="addInput"></input>
                <button onClick={e => { this.addItem(document.querySelector('#addInput').value) }}>ADD</button>
            </div>
        );
    }
}

export default connect()(AddToList);