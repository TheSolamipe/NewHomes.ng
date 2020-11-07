import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './../../actions/authActions';
import { withRouter } from "react-router-dom";
import TextFieldGroup from "./../common/TextFieldGroup";

import "./../../sass/main.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    if(props.auth.isAuthenticated){
      props.history.push("/dashboard")
    }
  }, [props.history, props.auth.isAuthenticated]);

  useEffect(()=>{
    if(props.errors){
      setErrors(props.errors)
    }
  }, [props.errors]);

  const Login =(e)=>{
    e.preventDefault();

    const user = {email, password}
    props.loginUser(user)
  }


  return (
    <div className="login">
        <div className="login__left">
          <h3 className="login__left--header">Finance</h3>
          <p className="login__left--text">Sign in to continue</p>
          <form onSubmit={Login} className="login__left--form">
            <TextFieldGroup 
              name="email"
              type="email" 
              placeholder="Email Address"
              error={errors.email}  
              value={email} 
              onChange={(e)=> setEmail(e.target.value)} 
            />
            <TextFieldGroup 
              name="password"
              type="password" 
              placeholder="Password"
              error={errors.password}  
              value={password} 
              onChange={(e)=> setPassword(e.target.value)} 
            />
            <div className="login__left--check">
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                        Keep me logged in
                        </label>
                    </div>
                </div>
                <p>Forget Password?</p>
            </div>
            <p className="login__left--note1">By logging in you agree to Newhomes's <span>Privacy Policy</span> and <span>Terms of Use</span></p>
            <input type="submit" className="btn btn-info btn-block mt-4" />
            <p className="login__left--note2">Not a member? <span>Join Now.</span></p>
          </form>
        </div>
        <div className="login__right">
            <div className="login__right--text">
                <h1>Welcome Back :</h1>
                <p>To Keep connected with us, please Login with your registered email address and password.</p>
            </div>
            <p className="login__right--footer">&copy;2019 Newhomes Nigeria</p>
        </div>
  </div>
  )
}

Login.propTypes ={
  loginUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state)=>({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser})(withRouter(Login));