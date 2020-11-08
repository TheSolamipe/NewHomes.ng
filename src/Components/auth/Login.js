import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './../../actions/authActions';
import { withRouter } from "react-router-dom";
import TextFieldGroup from "./../common/TextFieldGroup";
import Loading from "./../common/Loading";

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
    if(props.errors.errors){
      if(props.errors.errors.message === "failed"){
          console.log(props.errors.errors)
          setErrors(props.errors.errors)
      }else if(props.errors.errors.message === "Validation Error"){
          props.errors.errors.data.map(data => (
            setErrors(data)
          )) 
      }
    }
  }, [props.errors]);

  const Login =(e)=>{
    e.preventDefault();

    const user = {email, password, usertype:"Agent"}
    props.loginUser(user)
  }
  //Unable to complete loading functionality for when a user clicks on login button
  const {loading} = props.errors;

  let loginbar;
  if (loading ) {
    loginbar = <Loading />;
  } else {
    loginbar = <input type="submit" className="btn btn-info btn-block mt-4" />
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
              error={errors.message === "failed" ? errors.data : errors.email }  
              value={email} 
              onChange={(e)=> setEmail(e.target.value)} 
            />
            <TextFieldGroup 
              name="password"
              type="password" 
              placeholder="Password"
              error={errors.message === "failed" ? errors.data : errors.password }  
              value={password} 
              onChange={(e)=> setPassword(e.target.value)} 
            />
            <div className="login__left--check">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                        Keep me logged in
                        </label>
                    </div>
                </div>
                <p>Forget Password?</p>
            </div>
            <p className="login__left--note1">By logging in you agree to Newhomes's <span>Privacy Policy</span> and <span>Terms of Use</span></p>
            {loginbar}
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