import { createStore } from "redux";

const initialState = {
    todoList: [{"id":0,"title":"Take out the trash.","description":"Take out the trash before mom kills me","completed":false},{"id":1,"title":"Complete English homework.","description":"Bleh.. I hate English.","completed":true},{"id":4,"title":"Hello World","description":"This is a test","completed":true},{"id":5,"title":"Kill the Demegorgon","description":"Save Hawkins","completed":false},{"id":"11","title":"","description":"testing","completed":true},{"id":13,"title":"","description":"","completed":true},{"id":14,"title":"","description":"","completed":true},{"id":15,"title":"","description":"","completed":true},{"id":16,"title":"","description":"","completed":false}
  ]
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';


function reducer(state, action) {
  switch(action.type){
    case UPDATE_TITLE:
      const id = action.id;
      const title = action.payload;
      const newTitle = [...state.todoList[id].title, title]

      return {
        title: newTitle
      }

    case UPDATE_DESCRIPTION:
      // const id = action.id;
      // const description = action.payload;
      const newDescription = [...state.todoList[id].description, action.payload]

      return {
        description: newDescription
      }

    case ADD_ITEM:
    //   var newState = {};
      let newItem = action.payload;
      let newTodoList = [...state.todoList];
      newTodoList = newTodoList.unshift(newItem);

      return {
        todoList: newTodoList
      }

//100% working
    case REMOVE_ITEM:
      let targetItem = action.payload;
      newTodoList = [...state.todoList];
      newTodoList.splice(targetItem, 1);
      return {
        todoList: newTodoList
      }

//not sending to state but css works
      case COMPLETE_ITEM:
      let i = action.payload;
      let newlistItem = {...state.todoList[i], completed: !(state.todoList[i].completed)};
      newTodoList = state.todoList.slice();
      newTodoList[i] = newlistItem;

      return {
        
        todoList: newTodoList
      }

    default:
      return state;
      

  }
}

export default createStore( reducer, initialState );