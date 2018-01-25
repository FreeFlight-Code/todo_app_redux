import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    updateTitle(id, payload){
        this.props.dispatch({
            type: "UPDATE_TITLE",
            id: id,
            payload: payload
        })
    }

    updateDescription(id, payload){
        this.props.dispatch({
            type: "UPDATE_DESCRIPTION",
            id: id,
            payload: payload
        })
    }

    toggleHidden(){
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }
    
    render() {
        console.log(this.props, '  on edititem')
        return (
            <div className='hidden' id='EditItemContainer'>

                <span onClick={()=>{this.toggleHidden()}} id='close'>X</span>
                <label for='title'>Title</label>
                <input id='title' value={this.state.title} type='text'></input>
                <label for='description'>Description</label>
                <input id='description' value={this.state.description} type='textfield'></input>
            </div>
        );
    }
}

function mapStateToProps( state ) {
	return {
		todoList: state.todoList
	}
}

export default connect( mapStateToProps )( EditItem );
