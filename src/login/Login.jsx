import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../hook/AuthProvider'

const Login = () => {

const {signInEMailPass}=useContext(AuthContext)
const navigate=useNavigate()
const handleLogin=(e)=>{
  e.preventDefault()

const name=e.target.name.value;
const email=e.target.email.value;
const password=e.target.password.value;

console.log(name,email,password)

signInEMailPass(email,password)
.then(result=>{
  console.log(result.user)
  e.target.reset();
  navigate('/')
})
.catch(error=>{
  console.log('error ')
})
}

  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" required name='name' />
              <span className="label-text">email</span>

            <input type="email" placeholder="email" className="input input-bordered" required name='email' />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required  name='password'/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
        new heare ? Please
<Link to={'/regester'}>

<button className="btn btn-outline btn-secondary">Register</button>
</Link>


        </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login
