import * as actionTypes from "./actions";

export const addTodo = title => ({ type: actionTypes.ADD_TODO, title });
export const removeTodo = index => ({ type: actionTypes.REMOVE_TODO, index });
export const toggleTodo = index => ({type: actionTypes.TOGGLE_TODO, index});