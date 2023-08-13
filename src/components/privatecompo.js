import React from 'react';
import {Navigate,Outlet}from "react-router-dom";

function Privatecompo() {
    const auth = localStorage.getItem('cachedData');
  return auth?<Outlet/>:<Navigate to="/signup"/>
}

export default Privatecompo;