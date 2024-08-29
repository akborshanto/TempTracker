import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Login from './login/Login.jsx';
import Regester from './regester/Regester.jsx';
import AuthProvider from './hook/AuthProvider.jsx';
import Home from './home/Home.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Order from './orderss/Order.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
{
path:'/',
element:<Home></Home>


},




{path:'/login',
element:<Login></Login>},
{path:'/regester',
element:<Regester></Regester>
},
{
  path:'/order',
  element:<Order></Order>
}

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>

<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  

  </React.StrictMode>,
)
