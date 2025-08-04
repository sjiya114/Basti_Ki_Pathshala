import React from 'react'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
function App() {
  return (
    <div>
       <Toaster/>
       <Routes>
       <Route path='/' element={<Home/>} >
       </Route>
          <Route path='/register' element={<Form/>} ></Route>
     
       </Routes>
    </div>
  )
}

export default App
