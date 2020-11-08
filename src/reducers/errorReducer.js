import {GET_ERRORS , SET_LOADING} from "../actions/types";
const initialState ={}

export default function(state= initialState, action){
  switch(action.type){
    case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      }
        ; 
    default:
      return state;
  }
}