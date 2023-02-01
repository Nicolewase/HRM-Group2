import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Button from "../../components/button/button"
import './login.css'
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import { Header } from "../../components/header";


export const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://ems-production-81f8.up.railway.app/api/loginuser', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(res => {
      return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))

    // if (response.ok) {
    //   const data = await response.json();
    //   console.log('successfull')
    //   Handle successful login
    // } else {
    //   Handle unsuccessful login
    //   console.log('not successfull')
    // }
  };


  const OutlinedButtonIsClicked = () => {
    // console.log(data)
  }
  const loginAction = (evt: any) => {
    evt.preventDefault();

    // console.log(cred);
  }
  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (V) => {
    // const password = V.target.value;
  }

  return <div className="login-page">
     <Header/>

     
  <form action="GET"  onSubmit={handleSubmit} className="log-form"  >
      <h1> SIGN IN</h1>
    
     <div className="inp1"><Textfield name="Names" type="email" value={email}
          onChange={(event) => setEmail(event.target.value)} variant="two" label="Email*" helperText="" />
     
    <Textfield onChange={(event) => setPassword(event.target.value)} name="number" type="password" value={password} variant="two" label="Password*" helperText="" /></div>
   
    
    <h3>Click here if you <Link className="pswd-link" to="/Reset-password-page">forgot password?</Link></h3>

    <Button type="submit" variant='Outlined' onclick={OutlinedButtonIsClicked}  >Log in</Button>
    

    <img src={vector1} alt=""  className="line-img"/>
   <p>if you don't have an account <Link to="/Register" >Create an Account</Link> </p>  
  </form>
  </div>
  






}