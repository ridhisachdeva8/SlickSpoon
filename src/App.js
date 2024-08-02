//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './components/Main';
import Menu from './components/Menu';

import React from 'react'
import Verify from './components/Verify';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Business from './components/Business';
import AddNewItems from './components/AddNewItems';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
<Routes>
<Route exact path="/" element={<Main/>}></Route>
<Route exact path="/main" element={<Main/>}></Route>
  <Route exact path="/signup" element={<Signup/>}></Route>
  <Route exact path="/signin" element={<Signin/>}></Route>
  <Route exact path="/verify" element={<Verify/>}></Route>
  <Route exact path="/menu" element={<Menu/>}></Route>
  <Route exact path="/business" element={<Business/>}></Route>
  <Route exact path="/newitems" element={<AddNewItems/>}></Route>
</Routes>
      </BrowserRouter>
    </>
   
  );
}
export default App;