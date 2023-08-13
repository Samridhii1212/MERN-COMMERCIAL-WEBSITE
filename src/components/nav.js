import React from 'react';
import {Link,useNavigate} from "react-router-dom";

function Nav() {
  const auth = localStorage.getItem('cachedData');
  const navigate=useNavigate();
  const logout=()=>
  {
    localStorage.clear();
    navigate("/signup")
  }

  return (
    <div>
      {auth?
        <ul className='nav'>
             <li><Link to="/">Products</Link></li>
              <li><Link to="/add">Add item</Link></li>
               <li><Link to="/profile">profile</Link></li>
              <li><Link onClick={logout} to="/signup">logout</Link></li>
        </ul>:
        <ul className='nav nav-right'>
          <li><Link to="/signup">signup</Link></li>
          <li><Link to="/login">login</Link></li>
        </ul>
      
         }
       
              

        
     </div>
  )
}

export default Nav