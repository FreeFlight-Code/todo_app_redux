import { createStore } from "redux";

const initialState = {
    todoList: [{"id":0,"title":"Take out the trash.","description":"Take out the trash before mom kills me","completed":false},{"id":1,"title":"Complete English homework.","description":"Bleh.. I hate English.","completed":true},{"id":4,"title":"Hello World","description":"This is a test","completed":true},{"id":5,"title":"Kill the Demegorgon","description":"Save Hawkins","completed":false}
  ],
  focusedItem: {"id":1,"title":"Complete English homework.","description":"Bleh.. I hate English.","completed":true}
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_FOCUSEDITEM = 'UPDATE_FOCUSEDITEM';


function reducer(state, action) {
  switch(action.type){
    
    case UPDATE_FOCUSEDITEM:
      let newTodoList = [...state.todoList]
      let newFocusedItem = {...state.focusedItem};
    // let title = state.focusedItem.title;
    let id = state.focusedItem.id;
    console.log(newFocusedItem)
      return {
        focusedItem: newFocusedItem
      }
    
    case UPDATE_TITLE:
      let newTitle = state.todoList[id].title;

      return {
        title: newTitle
      }

    case UPDATE_DESCRIPTION:
      // const id = state.focusedItem;
      // const description = action.payload;
      // const newDescription = [...state.todoList[id].description, action.payload]
      return state;
      // return {
        // description: newDescription
        
      // }

    case ADD_ITEM:
    //   action.payload equals title of new Item
      let newItem = {
        title:action.payload,
        description:"",
        completed:false
      };
      newTodoList = [...state.todoList, newItem];
      // newTodoList = newTodoList.unshift(newItem);

      return {
        todoList: newTodoList
      }

//100% working
    case REMOVE_ITEM:
      i = action.payload;//index
      newTodoList = [...state.todoList];
      newTodoList.splice(i, 1);
      return {
        todoList: newTodoList
      }

//not sending to state but css works
      case COMPLETE_ITEM:
      let i = action.payload;
      let newlistItem = {...state.todoList[i], completed: !(state.todoList[i].completed)};// create a new item
      newTodoList = state.todoList.slice();//shallow copy array
      newTodoList[i] = newlistItem;// replace old item with new item

      return {
        
        todoList: newTodoList,
        // focusedItem: {...state.focusedItem}
      }

    default:
      return state;
      

  }
}

export default createStore( reducer, initialState );