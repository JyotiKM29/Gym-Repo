import React ,{useState} from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import {Link} from "react-scroll";

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened , setMenuOpened] = useState(false);

  return (
    <div className='header' >
     
      <img src={Logo} alt = "#" className="logo" />
      {(menuOpened === false && mobile === true) ? (
         <div
           style={{
             BackgroundColor: "var(--appColor)",
             padding:"0.5rem",
             borderRadius: "5px"
           }}
           onClick={()=> setMenuOpened(true)}
         >
            <img src={Bars} 
            alt="" 
            style={{
                    width:"1.5rem",
                    height:"1.5rem"
                    }}
            />
         </div> 

     ) : (
        <ul className="header-menu">
         <li>
          <Link 
           onClick={()=>setMenuOpened(false)}
           activeClass="active"
           to="home"
           spy={true}
           smoth={true}
           >Home
          </Link>
          </li>
          <li>
          <Link 
           onClick={()=>setMenuOpened(false)}
           to="programs"
           spy={true}
           smoth={true}
           >Programs
          </Link>
          </li>

          <li>
          <Link 
           onClick={()=>setMenuOpened(false)}
           to="reasons"
           spy={true}
           smoth={true}
           >Why us
          </Link>
          </li>

          <li>
          <Link 
           onClick={()=>setMenuOpened(false)}
           to="plans"
           spy={true}
           smoth={true}
           >Plans
          </Link>
          </li>

          <li>
          <Link 
           onClick={()=>setMenuOpened(false)}
           to="testimonials"
           spy={true}
           smoth={true}
           >Testimonials
          </Link>
          </li>
       </ul>
      )}
         
    </div>
  )
}

export default Header