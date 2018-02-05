import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/AddToList.css';
import api from './api'

class AddToList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(val) {
        let temp = {
            title:val,
            completed: false,
            description:''
        }
        if (!val) {
            alert('Please input a new task...')
        } else {
            api.create(temp)
            .then((newObjId)=>{
                temp.id = newObjId;
            })
            this.props.dispatch({
                type: 'ADD_ITEM',
                id: temp.id,
                description: temp.description,
                title: temp.title,
                completed: temp.completed
            })
        }
        document.querySelector("#addInput").value = "";
        // console.log(document.querySelector("#addInput").value);


    }

    render() {
        return (
            <div id='AddToListContainer'>
                <input placeholder='add item' type="search" name="Add Todo Item" id="addInput"></input>
                <button onClick={e => { this.addItem(document.querySelector('#addInput').value) }}>ADD</button>
            </div>
        );
    }
}

export default connect()(AddToList);