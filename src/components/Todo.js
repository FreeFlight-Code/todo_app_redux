import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List.js";
import AddToList from "./AddToList.js";
import EditItem from "./EditItem.js";
import icon from "../images/icon.png";
import api from './api.js';

import "./styles/Todo.css";

class Todo extends Component {

getList(){
	this.props.dispatch({
		type: 'FETCH_TODO',
		promise: api.readAll()
	})
}	
	render(){
		console.log(this.props, 'todo.js props')
		return(
			<div id="todoContainer">
				<img alt='logo icon' src={icon}></img>
				{this.props.editItem ? < EditItem /> : <div></div>}
				<AddToList />
				<button id='retrieveButton' onClick={this.getList.bind(this)} >retrieve api list</button>
				<List history={this.props.history}/>
				<p>Double Click to Edit or see Details...</p>
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		todoList: state.todoList,
		index: state.index,
		editItem: state.editItem
	}
}

export default connect( mapStateToProps )( Todo );



