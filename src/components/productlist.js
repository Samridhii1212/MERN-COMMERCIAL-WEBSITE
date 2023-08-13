import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

function Productlist() {
    
    let [name,setname]=useState([])
    let [price, setprice] = useState([])
    let [category, setcategory] = useState([])
    let [id, setid] = useState([])
    let [show,setshow]=useState(false)

   
    let getPostsData = async() => {
        setshow(true)
        axios.get("http://localhost:8020/products")
            .then(data => 
                {
                  
                  {
                 data.data.map((e,ind) =>{
                   setname(oldArray => [...oldArray,e.name]);
                   setprice(oldArray => [...oldArray, e.price]);
                   setcategory(oldArray => [...oldArray, e.category]);
                   setid(oldArray => [...oldArray, e._id]);
                })}
                   
                })
            .catch(error => console.log(error));
    };

    let deleteproduct=(id)=>
    {
        console.log(id)
        console.log("clicked")
        axios.get(`http://localhost:8020/products/${id}`)
            .then(data => {
                
            })
    }

return (
    <div className='listing'>
    <button onClick={getPostsData}>VIEW PRODUCTS</button>
        {show &&

        <ul>
            <li><h2>name</h2>{name.map((e) => <h1>{e}</h1>)}</li>
            <li><h2>price</h2>{price.map((e) => <h1>{e}</h1>)}</li>
            <li><h2>category</h2>{category.map((e) => <h1>{e}</h1>)}</li>
            <li><span className="del">{id.map((e) => <button className="pp" onClick={() =>{deleteproduct(e)}}>DELETE</button>)}</span></li>
                
           
           
        </ul>
        }
          
       
    
    
</div>

  )
}

export default Productlist