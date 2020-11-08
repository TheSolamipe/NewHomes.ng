import axios from "axios";
import  setAuthToken  from "./../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

import {  GET_ERRORS, SET_CURRENT_USER, SET_LOADING }  from "./types";


//Login User
export const loginUser = (userData) => dispatch => {
 
  axios
    .post("https://staging.newhomes.ng/api/auth/login", userData)
    .then(res => {
        //Save to local storage
        console.log(res.data)
        const {user} = res.data.data;
        const {token} = res.data.data;
        // Set token to local storage
        localStorage.setItem("jwtToken" , token);
        //Set Token to  Auth Header
        setAuthToken(token);
        // //Decode token to get user data
        // const decoded = jwt_decode(token);
        //set Current User
        dispatch(setCurrentUser(user));
    })
    .catch(err => {
      dispatch(setErrorLoading());
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

///Error loading
export const setErrorLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//Set logged in user
export const setCurrentUser = (user)=>{
  return {
    type: SET_CURRENT_USER,
    payload: user
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