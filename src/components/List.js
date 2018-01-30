import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles/List.css';



class List extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.resolveClassName = this.resolveClassName.bind(this);
    }

    resolveClassName(isComplete){
        //returning string of classnames
        return isComplete ? "complete listItem" : "listItem";
    }

    toggleComplete(index) {
        this.props.dispatch({
            type:'COMPLETE_ITEM',
            payload: index
        })
        document.querySelector('#listItem' + index).classList.toggle('complete');

    }

    showDetails() {
        // document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }

    handleDblClick(i) {
        this.props.dispatch({
            type: 'SHOW_EDIT_ITEM',
            payload: true
        })
        this.props.dispatch({
            type: 'SET_INDEX',
            payload: i
        })
        // this.showDetails();

    }

    removeItem(i) {
        this.props.dispatch({
            shouldConfirm: true,
            type: 'REMOVE_ITEM',
            payload: i
        })
    }

    render() {
        // console.log('props', this.props)
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
        // editItem: state.editItem,
        todoList: state.todoList,
        // index: state.index
    }
}

export default connect(mapStateToProps)(List);