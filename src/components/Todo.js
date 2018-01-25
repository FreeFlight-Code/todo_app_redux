import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List.js";
import AddToList from "./AddToList.js";
import EditItem from "./EditItem.js";


import "./styles/Todo.css";

export class Todo extends Component {

	render(){
		// console.log(this.props, 'todo.js props')
		return(
			<div id="todoContainer">
				<h1>TODO LIST</h1>
				< EditItem />
				<AddToList />
				<div id='linksContainer'>
					<span className="links">All Tasks</span>
					<span className="links">View Completed</span>
					<span className="links">View Incomplete</span>
				</div>
				<List />
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		name: state.name
	}
}

export default connect( mapStateToProps )( Todo );