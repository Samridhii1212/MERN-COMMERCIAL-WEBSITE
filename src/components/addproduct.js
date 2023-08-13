import React, { useState } from 'react'
import axios from 'axios';

function Addproduct() {
    const [name,setname]=useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const [error,seterror]=useState(false);


    let Addproduct=async()=>
    {
        if(!name||!price||!category||!company)
        {
            seterror(true)
            return false;
        }
        const auth = localStorage.getItem('cachedData');
        const obj=JSON.parse(auth);

        const userid=obj.data._id;
        
        const data = { name: name,price:price,category:category,company:company,userid:userid};

        try {
            await axios.post('http://localhost:8020/add-product',
                {
                    name,price,category,company,userid
                }
            )
        }
        catch (e) {
            console.log(e);
        }
    }



  return (
    <div class="product">
        <h1>product</h1>
        <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
         {error&&!name&&<span class="valid">enter name</span>}


          <input type="text" placeholder='price' onChange={(e) => setprice(e.target.value) }/>
          {error && !price && <span class="valid">enter price</span>}


           <input type="text" placeholder='category' onChange={(e) => setcategory(e.target.value) }/>
          {error && !category && <span class="valid">enter category</span>}


        <input type="text" placeholder='company' onChange={(e) => setcompany(e.target.value) }/>
          {error && !company && <span class="valid">enter company</span>}


        <button onClick={Addproduct}>Add product</button>
    </div>
  )
}

export default Addproduct;