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
    
    handleChange(e){
        let id = e.target.id;
        this.setState({
            [id]: e.target.value
        })
    }

    updateItem(){
        let title = this.state.title;
        let description = this.state.description;
        let index = this.props.index;
        
        console.log('title index and description', title, index, description);
        this.props.dispatch({
            type: "UPDATE_ITEM",
            shouldConfirm: true,
            payload: {
                index: index,
                title: title, 
                description: description
            }
        })
        this.props.dispatch({
            type: 'SHOW_EDIT_ITEM',
            payload: false
        })
    }
    
    //changes state and shows edititem component
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
