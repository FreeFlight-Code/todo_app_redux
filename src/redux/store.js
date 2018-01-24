import { createStore } from "redux";

const initialState = {
    todoList: [{
      title: "sample Dishes",
      complete: false,
      details: "asdf sdaf  sadf sd ffd h gf hasdf sadg"    
    },
    {
      title: "sample Mow Lawn",
      complete: true,
      details: "test text"    
    },
    {
      title: "sample Take Out Trash",
      complete: false,
      details: "123"    
    },
    {
      title: "sample Teach Coding",
      complete: true,
      details: ""    
    }
  ]
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const CHANGE_NAME = 'CHANGE_NAME';

function reducer(state, action) {
  switch(action.type){
    case CHANGE_NAME:
    //   var newState = {};
      var name = [...state.name, action.payload]

      return {
        name: name
      }

    case ADD_ITEM:
    //   var newState = {};
      let newItem = action.payload;
      let newTodoList = [...state.todoList, newItem]

      return {
        todoList: newTodoList
      }

//100% working
    case REMOVE_ITEM:
      let targetItem = action.payload;
      let newTodoList2 = [...state.todoList];
      newTodoList2.splice(targetItem, 1);
      return {
        todoList: newTodoList2
      }
//not sending to state but css works
      case COMPLETE_ITEM:
    //   let newState = {};
      let completedItemIndex = action.payload;
      let newCompletedList = [...state.todoList]

      return {
        
        completedList: newCompletedList
      }

    default:
      return state;
      

  }
}

export default createStore( reducer, initialState );