import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect, FormEventHandler } from 'react'
import Button from "../../components/button/button"
import './login.css'
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import { Header } from "../../components/header";
import { getFormData } from "../../utils/form-utils"
import { Loading } from "../../components/loading/loading"


export const Login = () => {
const [errorMessage, setErrorMessage] = useState("");

  const goto = useNavigate();



  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    
    const form = evt.target as HTMLFormElement;
    const apiEnpoint = form.action;
    const formData = getFormData(form);
    setIsLoading(true);
    const resp = await fetch(apiEnpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData
    });
    if(resp.ok){
      goto("/Dashboard-page");
      return;
    }
    const responseData = await resp.json();
    setIsLoading(false);

    const message = responseData.message;
    setErrorMessage(message);


  };
  const [isLoading,  setIsLoading] = useState(false);
  


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

     
  <form action="https://ems-production-81f8.up.railway.app/api/loginuser" method="GET"  onSubmit={handleSubmit} className="log-form"  >
      <h1> SIGN IN</h1>
    
      <div className="inp1">
        <Textfield name="Email" type="email" variant="two" label="Email*" helperText="" />
     
    <Textfield name="Password" type="password" variant="two" label="Password*" helperText="" /></div>
    <div className="error-message">{errorMessage}</div>
   
    
    <h3>Click here if you <Link className="pswd-link" to="/Reset-password-page">forgot password?</Link></h3>

      <Button type="submit" variant='Outlined'  >
        {
          !isLoading ? "Log in" :
            <Loading />
        }</Button>
    

    <img src={vector1} alt=""  className="line-img"/>
   <p>if you don't have an account <Link to="/Register" >Create an Account</Link> </p>  
  </form>
  </div>
  






}