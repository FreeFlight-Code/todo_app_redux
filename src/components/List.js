import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles/List.css';
import api from './api';


class List extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.resolveClassName = this.resolveClassName.bind(this);
    }

    resolveClassName(isComplete){
        //returning string of classnames
        return isComplete ? "complete listItem" : "listItem";
    }

    toggleComplete(index) {
        let updatedItem = {...this.props.todoList[index]};
        updatedItem.completed = !updatedItem.completed;

        api.update(updatedItem)
        .then((isUpdated)=>{
            if(isUpdated){
                this.props.dispatch({
                    type:'COMPLETE_ITEM',
                    payload: index
                })
            } else {
                alert('unable to update Item code error code 45601')
            }
            // document.querySelector('#listItem' + index).classList.toggle('complete');
        })
        

    }

    handleDblClick(i) {
        // this.props.dispatch({
        //     type: 'SHOW_EDIT_ITEM',
        //     payload: true
        // })
        // this.setState({
        //     index: i
        // })
    
        this.props.history.push('/details/' + i);
        // this.showDetails();

    }

    removeItem(i) {
        let id = this.props.todoList[i].id
        api.delete(id)
        .then((isDeleted)=>{
            if (isDeleted){
                this.props.dispatch({
                    shouldConfirm: true,
                    type: 'REMOVE_ITEM',
                    payload: i
                })
            } else {
                alert('unable to delete, please check database')
            }
        })
    }

    render() {
        console.log('props', this.props)
        let todoList = this.props.todoList;
        const myList = () => {
            if (!this.props.todoList) {
                return <h1>No Tasks</h1>
            } else {
                return todoList.map((e, i) => {
                    return (
                        <div onDoubleClick={_=>{this.handleDblClick(i)}} key={i} id={"listItem" + i} className={this.resolveClassName(e.completed)}>{e.title}
                            <input checked={e.completed} onChange={()=>{this.toggleComplete(i)}} type='checkbox'></input>
                            <div onClick={() => { this.removeItem(i) }} className="removeItem">X</div>
                        </div>
                    )
                })
            }
        }

        return (
            <div id='ListContainer'>
                {myList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,

    }
}

export default connect(mapStateToProps)(List);