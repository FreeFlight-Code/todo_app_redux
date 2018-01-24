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
            payload:""
        })
        document.querySelector('#listItem' + index).classList.toggle('complete');

    }

    showDetails() {
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
    }

    handleDblClick(i) {
        let id = document.querySelector('#listItem' + i);
        console.log(id)
        this.showDetails()
    }

    removeItem(i) {
        this.props.dispatch({
            type: 'REMOVE_ITEM',
            payload: i
        })
    }

    render() {
        console.log(this.state, 'state')
        console.log(this.props, 'props')
        let todoList = this.props.todoList;
        const myList = () => {
            if (!this.props.todoList) {
                return <h1>None</h1>
            } else {
                return todoList.map((e, i) => {
                    console.log(e.title);
                    return (
                        <div onDoubleClick={() => { this.handleDblClick(i) }} key={i} id={"listItem" + i} className="listItem">{e.title}
                            <input checked={e.complete} onChange={()=>{this.toggleComplete(i)}} type='checkbox'></input>
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