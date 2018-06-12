import * as actionTypes from "./actions";
import * as filters from "../../../commons/filters";

export const controlsReducer = (state, action) => {
  switch(action.type){
    case actionTypes.UPDATE_FILTER: 
    return {
      ...state,
      filter: action.filter
    }
    default: return { ...state, filter: filters.SHOW_ALL}; 
  }
}

export default controlsReducer;