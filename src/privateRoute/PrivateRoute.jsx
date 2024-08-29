import React, {  useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../hook/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return alert('loading..')
    }
    if(user){
        return children
    }
  return <Navigate to='/login'></Navigate>
 
  
}

export default PrivateRoute
