import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';



import Gopro from '../Page/GoPro';
import Dribbble from '../Page/Dribble';
import Inspiration from '../Page/Inspections';
import Find from '../Page/FindWork';
import Learn from '../Page/LearnDesign';
import Hire from '../Page/Hire';
import SignUp from '../Page/Signup';
function AllRoutes() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Dribbble/>}/>
      <Route path='/inspiration' element={<Inspiration/>}/>
      <Route path='/findwork' element={<Find/>}/>
      <Route path='/learndesign' element={<Learn/>}/>
      <Route path='/gopro' element={<Gopro/>}/>
      <Route path='/hire' element={<Hire/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
   </div>
  );
}
  
export default AllRoutes;