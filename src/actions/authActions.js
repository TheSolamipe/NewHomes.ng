import axios from "axios";
import  setAuthToken  from "./../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {  GET_ERRORS, SET_CURRENT_USER }  from "./types";


//Login User
export const loginUser = (userData) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/users/login`, userData)
    .then(res => {
        //Save to local storage
        const {token} = res.data;
        //Set token to local storage
        localStorage.setItem("jwtToken" , token);
        //Set Token to  Auth Header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //set Current User
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      )
}

//Set logged in user
export const setCurrentUser = (decoded)=>{
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

//Logout User
export const logoutUser = () => dispatch => {
        //Remove token from local storage
        localStorage.removeItem("jwtToken");
        //Remove auth header for future requests
        setAuthToken(false);
        //set Current User to {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
    
}