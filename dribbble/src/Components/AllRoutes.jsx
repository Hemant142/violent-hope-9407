import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Dribbble from '../Pages/Dribbble';
// import Inspiration from '../Pages/Inspiration';
// import FindWork from '../Pages/FindWork';
// import GoPro from '../Pages/GoPro';
// import Hire from '../Pages/Hire';
// import LearnDesign from '../Pages/LearnDesign';
import Products from "../Pages/Products"
import Signin from '../Pages/Signin';
import SignUp from '../Pages/Signup';

function AllRoutes() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Dribbble/>}/>
      <Route path='/inspiration' element={<Products/>}/>
      <Route path='/findwork' element={<Products/>}/>
      <Route path='/learndesign' element={<Products/>}/>
      <Route path='/gopro' element={<Products/>}/>
      <Route path='/hire' element={<Products/>}/> 
      <Route path='/products' element={<Products/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
      </Routes>
      
   </div>
  );
}
  
export default AllRoutes;