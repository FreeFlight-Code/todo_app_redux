import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'sample text',
            description:'sample text'
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(){
        this.props.dispatch({
            type: "UPDATE_TITLE",
            payload: this.state.title
        })
        this.props.dispatch({
            type: "UPDATE_DESCRIPTION",
            payload: this.state.description
        })
        console.log('state: ',this.state )
    }

    toggleHidden(){
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }
    
    render() {
        // console.log(this.props, '  props on edititem')
        // console.log(this.state, '  state on edititem')
        return (
            <div className='hidden' id='EditItemContainer'>

                <span onClick={()=>{this.toggleHidden()}} id='close'>X</span>
                <label>Title</label>
                <input onChange={e=>this.setState({title:e.target.value})} id='title' value={this.state.title} type='text'></input>
                <label>Description</label>
                <input onChange={e=>this.setState({description:e.target.value})} id='description' value={this.state.description} type='textfield'></input>
                <button onClick={e=>{this.updateItem()}}>SAVE</button>
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
