import React,{useState} from 'react';
import './Signup.css';
import {Link , useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "../../firebase"


function Signup() {
  
  //to naviagte to user on other page
  const navigate = useNavigate();

  //set default value
  const[values , setValues] = useState({
    name:"",
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
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    // if no Error (all values are filled)
    setErrorMsg("");

   
    setSubmitButtonDisabled(true);

    //email and passward login authentication on firebase 
    createUserWithEmailAndPassword(auth , values.email, values.pass)
    .then((res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
         updateProfile(user,{
          displayName: values.name,
        });

        //navigate to home 
       navigate('/');


        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error-" , err );
      });
    
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="form-title">Sign Up</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          onChange={(event)=>
          setValues((prev)=>({...prev,name:event.target.value}))
          }
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
          onChange={(event)=>
          setValues((prev)=>({...prev,email:event.target.value}))
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
          onChange={(event)=>
          setValues((prev)=>({...prev,pass:event.target.value}))
          }
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Confirm Password"
          />
        </div>

        {/* Error Message */}
        <b className={StyleSheet.error}>{errorMsg}</b>


        <button 
        onClick = {handleSubmission}
        disabled = {submitButtonDisabled}
        type="submit" className="btn btn-primary">
          Sign Up
        </button>

        <h2>Already have an account? <Link to='/Login'>Login</Link></h2>

      </form>
    </div>
  );
}

export default Signup;
