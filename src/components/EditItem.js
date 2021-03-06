import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';
import api from './api';
import icon from "../images/icon.png";



class EditItem extends Component {

//Array Index passed through params, index taken of params and title and description set to state
    componentWillMount() {
        let index = this.props.location.pathname.split('/').pop();
        index = Number(index)
        this.props.dispatch({
            type: 'SET_INDEX',
            payload: index
        })
        this.setState({
            title:this.props.todoList[index].title,
            description:this.props.todoList[index].description,
            completed: this.props.todoList[index].completed
        })
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    //determines if handleChange occurs in title or description field and setsState to its relative field
    handleChange(e){
        let id = e.target.id;
        this.setState({
            [id]: e.target.value
        })
    }

    toggleComplete (e){
        let value = e.target.checked;
        this.setState({
            completed: value
        })
    }

//Clicking Save button updates state and unmounts editItem
    updateItem(){
        let title = this.state.title;
        let description = this.state.description;
        let index = this.props.index;
        let checked = document.querySelector('#editItemCompleted').checked;
        let newObj = {
            id: this.state.id,
            description: this.state.description,
            completed: this.state.completed,
            title: this.state.title
        }

        
        api.update(newObj)
        .then((didUpdate)=>{
            if(didUpdate){
            // console.log('title index and description', title, index, description);
            this.props.dispatch({
                // shouldConfirm: true,
                type: "UPDATE_ITEM",
                index: index,
                title: title, 
                description: description,
                completed: checked
            })
            this.props.history.push('/');
        } else {
            alert('Unable to update Item')
        }
    
    })
    }
    
    //changes state and shows edititem component deprecated after edititem rendered on state change
    closeDetails(){
        this.props.history.push('/');
    }
    
    render() {
        console.log(this.state)
        return (
            <div id='EditItemContainer'>
            <h1>Edit</h1>
                 <span onClick={this.closeDetails.bind(this)} id='close'>X</span>
                 <img alt='logo icon' src={icon}></img>
                <div><label>Title</label></div>
                <input 
                    id='title' 
                    onChange={e=>{this.handleChange(e)}}
                    value={this.state.title}
                    type='text'
                ></input>
                <div><label>Description</label></div>
                <input 
                    id='description' 
                    onChange={e=>{this.handleChange(e)}}
                    value={this.state.description}  
                    type='textfield'
                ></input>
                
                <input id='editItemCompleted' checked={this.state.completed} onChange={(e)=>{this.toggleComplete(e)}} type='checkbox'></input>Completed (Check to Complete)
                <div id='buttonContainer' >
                <button onClick={this.updateItem.bind(this)}>SAVE CHANGES</button> 
                <button onClick={ this.closeDetails.bind(this) }>Cancel</button>
                </div>
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
