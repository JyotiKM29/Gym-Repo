import React,{useEffect ,useState} from "react";
import './App.css';
import Hero from '../src/components/Hero/Hero';


import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {auth} from "./firebase";



import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


function App() {
  
  const [userName ,setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) =>{
      if(user){
        setUserName(user.displayName);
      }else setUserName("");
       console.log(user);
    });
  },[]);

  return (
   
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Hero name = {userName} />} />
{/* 
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Reasons" element={<Reasons />} />
        <Route path="/Plans" element={<Plans/>} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Footer" element={<Footer />} /> */}

        

      </Routes>
    </Router>






    // <Router>
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">Registration Form</Link>
    //     </li>
    //     <li>
    //       <Link to="/Plans">Plans</Link>
    //     </li>
    //   </ul>

    //   <hr />
    //   <Switch>
    //       <Route exact path="/">
    //         <Hero />
    //       </Route>
    //       <Route path="/about">
    //         <RegistrationForm />
    //       </Route>
    //       <Route path="/Plans">
    //         <plans />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>









//     <div className="App">
//     {/* <Hero/> */}
//     <Programs />
//     <Reasons />
//     <Plans />
//     <Testimonials />
//     <Join />
//     <Footer />
//     {/* <RegistrationForm /> 
//    //  <Registration /> */}
//  </div> 
  );
}

export default App;
