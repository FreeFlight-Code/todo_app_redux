// const initialState = {
//     todoList: ['Dishes', 'Painting', 'Cook Dinner', 'Get wasted']
// };
// const ADD_ITEM = 'ADD_ITEM';
// const REMOVE_ITEM = 'REMOVE_ITEM';
// const COMPLETE_ITEM = 'COMPLETE_ITEM';

// export default function reducer(state, action) {
//   switch(action.type){
//     case ADD_ITEM:
//       var newState = {};
//       var newItem = action.payload;
//       var newTodoList = [...state.todoList, newItem]

//       return {
//         todoList: newTodoList
//       }

//     case REMOVE_ITEM:
//       let targetItem = action.payload;
//       var newState = {};
//       const newTodoList = [...state.todoList];

//       newTodoList.splice(newTodoList.indexOf(targetItem), 1);

//       return {
//         todoList: newTodoList
//       }

//       case COMPLETE_ITEM:
//       var newState = {};
//       var completedItem = action.payload;
//       var newCompletedList = [...state.completedList, completedItem]

//       return {
//         completedList: newCompletedList
//       }

//     default:
//       return state;
      

//   }
// }

// export default function todo( state = initialState, action ) {
//   return state;
// }