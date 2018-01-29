import { createStore } from "redux";

const initialState = {
  todoList: [{ "id": 0, "title": "Take out the trash.", "description": "Take out the trash before mom kills me", "completed": false }, { "id": 1, "title": "Complete English homework.", "description": "Bleh.. I hate English.", "completed": true }, { "id": 4, "title": "Hello World", "description": "This is a test", "completed": true }, { "id": 5, "title": "Kill the Demegorgon", "description": "Save Hawkins", "completed": false }
  ]
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SET_INDEX = 'SET_INDEX';
// const UPDATE_TITLE = 'UPDATE_TITLE';
// const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
// const UPDATE_FOCUSEDITEM = 'UPDATE_FOCUSEDITEM';


function reducer(state, action) {
  let newTodoList = [...state.todoList]
  // let newFocusedItem = {...state.focusedItem};
  switch (action.type) {
    case SET_INDEX: {
      let index = action.payload;
      return {
        todoList: newTodoList,
        index: index
      }
    }

    case UPDATE_ITEM: {
      //send index, title, description
      let index = action.index;
      let newTitle = action.title;
      let newDescription = action.description;
      let newItem = {...newTodoList[index], title: newTitle, description: newDescription };
      newTodoList[index] = newItem;

      return{
        todoList: newTodoList
      }
    }
 
    case ADD_ITEM: {
      //   action.payload equals title of new Item
      let newItem = {
        title: action.payload,
        description: "",
        completed: false
      };
      newTodoList = [...state.todoList, newItem];
      // newTodoList = newTodoList.unshift(newItem);

      return {
        todoList: newTodoList,
        // focusedItem: {1:1}
      }
    }

    //100% working
    case REMOVE_ITEM: {
      let i = action.payload;//index
      newTodoList = [...state.todoList];
      newTodoList.splice(i, 1);
      return {
        todoList: newTodoList,
        // focusedItem: {2:2}
      }
    }
    //not sending to state but css works
    case COMPLETE_ITEM: {
      let i = action.payload;
      let newlistItem = { ...state.todoList[i], completed: !(state.todoList[i].completed) };// create a new item
      newTodoList = state.todoList.slice();//shallow copy array
      newTodoList[i] = newlistItem;// replace old item with new item

      return {
        todoList: newTodoList,
        // focusedItem: {3:3}
      }
    }
    default:
      return state;


  }
}

export default createStore(reducer, initialState);