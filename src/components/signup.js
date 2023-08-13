import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name,setname]=useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate=useNavigate();
     const auth = localStorage.getItem('cachedData');
    useEffect(()=>
    {
      if(auth){
        navigate("/")
      }
     
    })
    
    let senddata=async()=>
      {
      const data = {name:name,email:email,password:password};
      const key = "cachedData";
      const value = JSON.stringify(data);
      localStorage.setItem(key, value);
        try{
          await axios.post('http://localhost:8020/',
          {
            name,email,password
          } 
          )
        }
        catch(e)
        {
          console.log(e);
        }
        
    }
 


return (

    <div className='signup'>
        <h1>REGISTER YOURSELF</h1>
        <form action='post' >
        <input type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
          <input type="email" placeholder='enter email' onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder='enter password' onChange={(e) => setpassword(e.target.value)} />
        <button onClick={senddata}>signup</button>
    </form>
   </div>
  )
}

export default Signup;



 