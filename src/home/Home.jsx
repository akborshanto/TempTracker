import React, { useEffect, useRef } from 'react'

const Home = () => {
let inputRef=useRef()

useEffect(()=>{
  inputRef.current.focus()
},[])
  return (
    <div>
<input type='text' ref={inputRef}></input>
    </div>
  )
}

export default Home
