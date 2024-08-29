import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const[loading,setLoading]=useState(true)
/* user create */

const createUser=(email,password)=>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)

}
/* signIn with email password */

const signInEMailPass=(email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)

}

/* Logout */
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}



/* uesEffect */
useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,curentUser=>{
    console.log('current valueof the current uers',curentUser)
    setUser(curentUser)
})


 return ()=>{
    unSubscribe();
 }

},[])


const authInfo={user,createUser,signInEMailPass,logOut,loading}
  return (
    <div>
<AuthContext.Provider value={authInfo}>

{children}
</AuthContext.Provider>
    



    </div>
  )
}

export default AuthProvider
AuthProvider.PropsTypes={
    children:PropTypes.node
}