import React,{ useState } from 'react'
import Login from './Components/Login.jsx'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'


function App() {

  return (
    <>  
      <Routes>
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/Dashboard" element={ <Dashboard/>}/>  
       
      </Routes>

    </>
  )
}

export default App
