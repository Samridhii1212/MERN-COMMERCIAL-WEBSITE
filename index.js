const express = require('express');
const app = express();
const cors=require('cors');
const Product=require("./database/product");

const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/myproject1").then(() => { console.log("connected") })


const userschema = new mongoose.Schema(
  {
    name:String,
    email:String,
    password:String,

  }
)
//create collection
const collection = mongoose.model('users', userschema);




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get("/", (req, res) => {
  res.json({ "user": ["userOne", "userTwo", "userThree"] })
})

app.post("/", async(req, res) => {
  const {name,email,password}=req.body;
  const data=
  {
    name:name,
    email:email,
    password:password
  }
   console.log(req.body)
  await collection.insertMany([data]);
 
})

app.get("/add-product", (req, res) => {
  res.json({ "user": ["userOne", "userTwo", "userThree"] })
})

app.post("/add-product", async (req, res) => {
  const {name,price,category,company,userid} = req.body;
  const data =
  {
    name: name,
    price:price,
    category: category,
    company:company,
    userid:userid
  }
  console.log(req.body)
  await Product.insertMany([data]);

})

//fetch data from database
app.get("/products",async(req,res)=>
{
  let pro=await Product.find();
 // console.log(pro);
  if(pro.length>0)
  {
    res.send(pro)
  }
  else{
   res.send({re:false})
  }
})




app.get("/login", (req, res) => {
  res.json({ "user": ["userOne", "userTwo", "userThree"] })
})

app.post("/login", async(req, res) => {
  const {email, password } = req.body;
  const data =
  {
    email: email,
    password: password
  }
  if(email && password)
  {
    let user = await collection.findOne({email:email,password:password});
    //res.send(user)
    console.log(user);
    if (user) res.send(user);
    else res.send({re:false});
  }
  else
  {
    res.send({result:"not found"});
  }
  

})

app.get("/products/:id",async(req,res)=>
{
  const re=await Product.findByIdAndDelete(req.params.id);
   res.send(re);
})






app.listen(8020, () => {console.log('Server started on port 8100...') })






















