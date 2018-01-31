import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';


class EditItem extends Component {
    constructor(props) {
        super(props);
            this.state={
                title: this.props.todoList[this.props.index].title,
                description: this.props.todoList[this.props.index].description
            }
    }
    
    //determines if handleChange occurs in title or description field and setsState to its relative field
    handleChange(e){
        let id = e.target.id;
        this.setState({
            [id]: e.target.value
        })
    }
//Clicking Save button updates state and unmounts editItem
    updateItem(){
        let title = this.state.title;
        let description = this.state.description;
        let index = this.props.index;
        
        // console.log('title index and description', title, index, description);
        this.props.dispatch({
            // shouldConfirm: true,
            type: "UPDATE_ITEM",
            payload: {
                index: index,
                title: title, 
                description: description
            }
        })
        //renders editItem component
        this.props.dispatch({
            type: 'SHOW_EDIT_ITEM',
            payload: false
        })
    }
    
    //changes state and shows edititem component deprecated after edititem rendered on state change
    toggleHidden(){
        this.props.dispatch({
            type: 'SHOW_EDIT_ITEM',
            payload: false
        })
    }
    
    render() {
        // console.log(this.state)
        return (
            <div id='EditItemContainer'>

                <span onClick={this.toggleHidden.bind(this)} id='close'>X</span>
                <label>Title</label>
                <input 
                    id='title' 
                    onChange={e=>{this.handleChange(e)}}
                    value={this.state.title}
                    type='text'
                ></input>
                <label>Description</label>
                <input 
                    id='description' 
                    onChange={e=>{this.handleChange(e)}}
                    value={this.state.description}  
                    type='textfield'
                ></input>
                <button onClick={this.updateItem.bind(this)}>SAVE</button>
            </div>
        );
    }
}

function mapStateToProps( state ) {
	return {
		todoList: state.todoList,
        index: state.index,
        editItem: state.editItem
	}
}

export default connect( mapStateToProps )( EditItem );
