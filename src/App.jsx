import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import PasswordReset from './components/PasswordReset'
import YogaBenefits from './components/YogaBenefits'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgetPassword from './components/ForgetPassword'
import About from './components/About'
import NewHome from './components/NewHome'

const App = () => {
 
  const router = createBrowserRouter([
    {
      
      element: <NewHome/>,
      children:[
        {
          path:'/yogabenefits',
          element:<YogaBenefits/>
        },
        {
          path:'/',
          element:<About/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/passwordreset',
          element:<PasswordReset/>
        },
        {
          path:'/forgetpassword',
          element:<ForgetPassword/>
        }
    
      ]
    },
   
  ])
  return (
    <div>
     <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
