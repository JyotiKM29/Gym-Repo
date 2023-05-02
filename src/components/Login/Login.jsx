import React,{useState} from 'react';
import './Login.css';
import {Link , useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"


function Login() {

  //to naviagte to user on other page
  const navigate = useNavigate();

  //set default value
  const[values , setValues] = useState({
    email:"",
    pass:""
  });

  //error message
  const [errorMsg, setErrorMsg] = useState("");

   //disable submit button once it is clicked 
   const [submitButtonDisabled , setSubmitButtonDisabled ] = useState(false);

  //what will after submission
  const handleSubmission = () =>{
    
    //if user leave empty any of these value then this show error
    if( !values.email || !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    // if no Error (all values are filled)
    setErrorMsg("");

   
    setSubmitButtonDisabled(true);

    //email and passward login authentication on firebase 
    signInWithEmailAndPassword(auth , values.email, values.pass)
    .then((res) => {
        setSubmitButtonDisabled(false);
        

        //navigate to home 
       navigate('/program');


        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error-" , err );
      });
    
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(event) =>
              setValues((prev) => ({...prev, email: event.target.value}))
            }
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          onChange={(event) =>
              setValues((prev) => ({...prev, pass: event.target.value}))
            }
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <b className={StyleSheet.error}>{errorMsg}</b>
        <button 
        onClick={handleSubmission}
        disabled={submitButtonDisabled}
        type="submit" className="btn btn-primary">
          Login
        </button>

        <h2>Don't have an account? <Link to='/Signup'>Sign Up</Link></h2>
      </form>
    </div>
  );
}

export default Login;
