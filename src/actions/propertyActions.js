import axios from "axios";
// import  setAuthToken  from "./../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

import {  GET_PROPERTIES, SET_LOADING }  from "./types";


//Get All Properties
export const getProperties = () => (dispatch) => {
  dispatch(setDashboardLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}properties`)
    .then((res) =>
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data.data.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROPERTIES,
        payload: null,
      })
    );
};

///Profile loading
export const setDashboardLoading = () => {
  return {
    type: SET_LOADING,
  };
};
