import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import User from './Component/User/User'

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Layout/>, 
//       children:[
//         {
//           path:"",
//           element:<Home/> 
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//       ]
//     }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
