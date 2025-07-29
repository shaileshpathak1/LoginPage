import { useState } from 'react'
import './App.css'
import Signup from './signup/signup'
import Login from './login/login'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

function App() {
  
const router=createBrowserRouter([

  {
    path:"/",
    element:<Login />,
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])

  return (
    <>
      
      
      <RouterProvider router={router}  />
      <p className="read-the-docs">  </p>
    
    </>
  )
}

export default App
