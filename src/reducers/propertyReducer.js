import {
    SET_LOADING,
    GET_PROPERTIES,
  } from "../actions/types";
  const initialState = {
    properties: null,
    loading: false,
  };

  export default function(state = initialState, action){
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_PROPERTIES:
        return {
          ...state,
          properties: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }