import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Signup from './components/signup';
import Privatecompo from './components/privatecompo';
import Login from './components/login';
import Addproduct from './components/addproduct';
import Productlist from './components/productlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          {/* we can access to product update only after sign up */}
          <Route element={<Privatecompo/>}>
          <Route path="/" element={<Productlist/>}></Route>
          <Route path="/add" element={<Addproduct/>}></Route>
          <Route path="/logout" element={<h1>logout</h1>}></Route>
          <Route path="/profile" element={<h1>logout</h1>}></Route>
          </Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
