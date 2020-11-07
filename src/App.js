import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; 
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import {logoutUser, setCurrentUser} from "./actions/authActions";

import {Provider} from "react-redux";
//importing redux store
import store from "./store";


//importing stylesheet
import './sass/main.scss';

//importing components
import Login from "./Components/auth/Login";
import Dashboard from "./Components/layout/Dashboard";


// //check for token
// if(localStorage.jwtToken){
//   //set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   //decode token an get user info and exp
//   const decoded = jwt_decode(localStorage.jwtToken);
//   //set current user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   //Check for expired token
//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime){
//     //Logout user
//     store.dispatch(logoutUser());
//     //TODO: Clear current Profile
    
//     // Redirect to login
//     window.location.href = "/login";
//   }
// }
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
