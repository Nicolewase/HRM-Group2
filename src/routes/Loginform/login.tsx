import { Form, Link } from "react-router-dom"
import Button from "../../components/button/button"
import './login.css'
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler, useState } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import Home from "../home";
import { Header } from "../../components/header";


export const Login = () => {

  const OutlinedButtonIsClicked = () => {
    console.log("outlined")
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

     <div className="log-form" >
  <form action="" className="form"  >
      <h1> SIGN IN</h1>
    
     <div className="inp1"><Textfield name="Names" type="text" variant="three" label="Username*" helperText="" />
    <Textfield onChange={onPasswordChange} name="number" type="password" variant="three" label="Password*" helperText="" /></div>

    
    <h3>Click here if you <Link className="pswd-link" to="/password">forgot password?</Link></h3>

    <Button type="submit" variant='Outlined' onclick={OutlinedButtonIsClicked}  >Log in</Button>

    <img src={vector1} alt=""  className="line-img"/>
   <p>if you don't have an account <Link to="/Register" >Create an Account</Link> </p>  
  </form>
  </div>
  </div>






}