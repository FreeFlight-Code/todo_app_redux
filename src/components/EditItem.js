import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            // title: this.props.todoList[this.props.index].title,
            // description: this.props.todoList[this.props.index].description
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
    
    
    componentWillMount() {
        console.log('props  ', this.props)
//         let list = this.props.todoList;
//         let i = this.props.index;
//         this.setState({
//             title: list[i].title,
//             description: list[i].description
//         })
    }
    

    updateItem(){
        // console.log(this.props.focusedItem.title, ': title')
        console.log('state: ',this.state )
        let index = this.props.index;
        let title = this.state.title;
        let description = this.state.description;

        this.props.dispatch({
            type: "UPDATE_ITEM",
            payload: {
                index: index,
                title: title, 
                description: description
            }
        })
      
    }
    
    toggleHidden(){
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }
    
    render() {
        console.log(this.props, '  props on edititem')
        console.log(this.state, '  state on edititem')
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
		todoList: state.todoList,
		index: state.index
	}
}

export default connect( mapStateToProps )( EditItem );
