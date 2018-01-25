import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles/List.css';



class List extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    toggleComplete(index) {
        this.props.dispatch({
            type:'COMPLETE_ITEM',
            payload: index
        })
        document.querySelector('#listItem' + index).classList.toggle('complete');

    }

    showDetails() {
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }

    handleDblClick(i) {
        let id = document.querySelector('#listItem' + i);
        console.log(id);
        console.log(this.props)
        this.props.dispatch({
            type: 'UPDATE_FOCUSEDITEM',
            payload: i
        })
        this.showDetails();
    }

    removeItem(i) {
        this.props.dispatch({
            type: 'REMOVE_ITEM',
            payload: i
        })
    }

//checks if item is completed and adds completed class for css styling *** possible bug, class does not move with item it stays in original array position when items are deleted above it...
    componentDidMount() {
        let list = document.querySelectorAll('.listItem')
        // console.log(list);
        list.forEach((e)=>{
            if(e.children[0].checked){
                e.classList.toggle('complete');
            }
        })
    };

    render() {
        
        

        // console.log("props", this.props)
        // console.log("todoList", this.props.todoList)
        let todoList = this.props.todoList;
        const myList = () => {
            if (!this.props.todoList) {
                return <h1>No Tasks</h1>
            } else {
                return todoList.map((e, i) => {
                    // console.log(e.title);
                    return (
                        <div onDoubleClick={() => { this.handleDblClick(i) }} key={i} id={"listItem" + i} className="listItem">{e.title}
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
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(List);