import { createStore, applyMiddleware } from "redux";
import { loggerMiddleware, confirmationMiddleware, promiseMiddleware } from './middleware';

const initialState = {
  todoList: [{ "id": 0, "title": "Take out the trash.", "description": "Take out the trash before mom kills me", "completed": false }, { "id": 1, "title": "Complete English homework.", "description": "Bleh.. I hate English.", "completed": true }, { "id": 4, "title": "Hello World", "description": "This is a test", "completed": true }, { "id": 5, "title": "Kill the Demegorgon", "description": "Save Hawkins", "completed": false }
  ],
  editItem: false
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SET_INDEX = 'SET_INDEX';
const SHOW_EDIT_ITEM = 'SHOW_EDIT_ITEM';
const FETCH_TODO = 'FETCH_TODO';


function reducer(state, action) {
  let newState = Object.assign({}, ...state);
  let newTodoList = [...state.todoList]

  switch (action.type) {
    case UPDATE_ITEM: {
      //send index, title, description
      console.log(action)
      let index = action.index;
      let newTitle = action.title;
      let newDescription = action.description;
      let newCompleted = action.completed;
      let newItem = {...newTodoList[index], title: newTitle, description: newDescription, completed: newCompleted };
      newTodoList[index] = newItem;

  
      return{
        todoList: newTodoList,
        index: state.index,
        editItem: state.editItem
      }
    }
 
    case ADD_ITEM: {
      //   action.payload equals new Object
      let newItem = {
        id: action.id,
        description: action.description,
        title: action.title,
        completed: action.completed
      };
      newTodoList.unshift(newItem);

      return {
        todoList: newTodoList,
        index: state.index,
        editItem: state.editItem
      }
    }

    //100% working
    case REMOVE_ITEM: {
      let i = action.payload;//index
      newTodoList = [...state.todoList];
      newTodoList.splice(i, 1);
      return {
        todoList: newTodoList,
        index: state.index,
        editItem: state.editItem
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
        index: state.index,
        editItem: state.editItem
      }
    }

    case FETCH_TODO: {
      newTodoList = action.payload;
      return {
        todoList: newTodoList
      };
    }

    case SHOW_EDIT_ITEM: {

      return {
        todoList: newTodoList,
        editItem: action.payload,
        index: state.index
      }
    }

    case SET_INDEX: {
      let index = action.payload;
      return {
        todoList: newTodoList,
        index: index,
        editItem: state.editItem
      }
    }
    default: return state;
  }
}

function aaaa (){
  console.log(initialState, 'initialstate')
  return initialState;

}

export default createStore(
  reducer, 
  aaaa(), 
  applyMiddleware(
    loggerMiddleware,
    confirmationMiddleware,
    promiseMiddleware
  ));