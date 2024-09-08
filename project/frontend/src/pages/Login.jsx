import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);

  const [email,setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async(e) =>{
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:4000/api/v1/user/login",
      {email , password , confirmPassword , role:"Patient"},
      {withCredentials:true,headers:{"Content-Type":"application/json"}}
    );
    toast.success(response.data.message);
    setIsAuthenticated(true);
     navigateTo("/");
  } catch (error) {
    toast.error(error.response.data.message);
  }
  };
  if(isAuthenticated){
    return <Navigate to={"/"}/>
  }


  return (
    <div className='container form-component login-form'>
      <h3> Sign In</h3>
      <p>Please Login To Continue</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi inventore dolorum amet ex adipisci!</p>
      <form onSubmit={handleLogin}>
          <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
          <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
          <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='ConfirmPassword'/>
          <div style={{gap:"10px", justifyContent:"flex-end",flexDirection:"row"}}>
            <p>Not Register</p>
            <Link to={"/register"} style={{textDecoration:"none"}}>Register Now </Link>
          </div>
          <div style={{justifyContent:"center", alignItems:"center"}}>
            <button type='submit'>Login</button>
          </div>
      </form>

    </div>
  )
}

export default Login