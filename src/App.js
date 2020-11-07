import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
// import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {logoutUser, setCurrentUser} from "./actions/authActions";
// 

import {Provider} from "react-redux";
//importing redux store
import store from "./store";


//importing stylesheet
import './sass/main.scss';

//importing private Route
import PrivateRoute from "./Components/common/PrivateRoute";

//importing components
import Login from "./Components/auth/Login";
import Dashboard from "./Components/layout/Dashboard";
import Test from "./Components/layout/Test";


//check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
//   //decode token an get user info and exp
//   const decoded = jwt_decode(localStorage.jwtToken);
  //set current user and isAuthenticated
  store.dispatch(setCurrentUser(localStorage.jwtToken));

//   //Check for expired token
  const currentTime = Date.now() / 1000;
  if(localStorage.exp < currentTime){
    //Logout user
    store.dispatch(logoutUser());
    //TODO: Clear current Profile
    
    // Redirect to login
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Switch>
                <PrivateRoute exact path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
