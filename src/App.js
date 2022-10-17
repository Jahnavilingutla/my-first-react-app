import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './components/Functional';
import ClassComp from './components/ClassComponent';
import PageNotFound from './components/PageNotFound';
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div >
       <NavBar/>
       <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
