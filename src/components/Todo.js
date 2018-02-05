import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List.js";
import AddToList from "./AddToList.js";
import EditItem from "./EditItem.js";
import icon from "../images/icon.png";
import api from './api.js';

import "./styles/Todo.css";

export class Todo extends Component {

getList(){
	this.props.dispatch({
		type: 'FETCH_TODO',
		promise: api.readAll()
	})
}	
	render(){
		// console.log(this.props, 'todo.js props')
		return(
			<div id="todoContainer">
				{/* <h1>TODO LIST</h1> */}
				<img alt='logo icon' src={icon}></img>
				{this.props.editItem ? < EditItem /> : <div></div>}
				<AddToList />
				<button id='retrieveButton' onClick={this.getList.bind(this)} >retrieve api list</button>
				{/* <div id='linksContainer'>
					<span className="links">All Tasks</span>
					<span className="links">View Completed</span>
					<span className="links">View Incomplete</span>
				</div> */}
				<List />
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

// export default connect(  )( Todo );


