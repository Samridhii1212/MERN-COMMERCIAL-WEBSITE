import React, { useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email,setemail]=useState("");
    const [password, setpassword] = useState("");
    let navigate=useNavigate();
    const auth = localStorage.getItem('cachedData');

    useEffect(() => {
        if (auth) {
            navigate("/")
        }})
    
    let login=async()=>
    {
         axios.post('http://localhost:8020/login',
                {
                email, password
                }
             ).then((response) => {
                 console.log(response.data.re);
               
                 if (response.data.re==false)
                {
                    alert("something wrong")
                }
              else{
                const key = "cachedData";
                localStorage.setItem(key, JSON.stringify(response));
                navigate("/");
                  }
            })
        
    }


  return (
       <div className='login'>
          <h1>login</h1>
          
             <input type="email" placeholder='enter email' onChange={(e) => setemail(e.target.value)} />
              <input type="password" placeholder='enter password' onChange={(e) => setpassword(e.target.value)} />
              <button onClick={login}>login</button>
        
      </div>
  )
}

export default Login;