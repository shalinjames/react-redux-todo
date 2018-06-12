import * as actionTypes from "./actions";

const initialState = {
  list: []
};

export const todosReducer = (state = initialState, action) => {  
  switch(action.type){
    case actionTypes.ADD_TODO:     
        return {
          ...state,
          list: [...state.list, {title: action.title, completed: false}]
        };
    case actionTypes.REMOVE_TODO: 
        return {
          ...state,
          list: [
            ...state.list.slice(0, action.index),
            ...state.list.slice(action.index + 1)
          ]
        };
    case actionTypes.TOGGLE_TODO: 
    return {
      ...state,
      list: [
        ...state.list.slice(0, action.index),
        { 
          ...state.list[action.index], 
          completed: !state.list[action.index].completed
          },
      ...state.list.slice(action.index + 1)]      
    }
    default: return state;
  }
}

export default todosReducer;