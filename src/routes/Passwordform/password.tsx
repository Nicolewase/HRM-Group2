import { Form } from "react-router-dom"
import Button from "../../components/button/button"
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler, useState } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import "./password.css";
import { Header } from "../../components/header";


export const Password = () => {

  const FilledButtonIsClicked = () => {
    console.log("outlined")
  }
  const loginAction = (evt: any) => {
    evt.preventDefault();

    // console.log(cred);
  }
  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (V) =>{
  //  const  email = V.target.value;
  }
  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (V) => {
    // const Password = V.target.value;
}


return <div className="pwsd-page">
  <Header/>
  
<form action="" className="pswd-form1" onSubmit={loginAction} >

  <h1>RESET-PASSWORD</h1>
  <div className="inptall">
  <Textfield name="Names" type="text" variant="two" label=" Email" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="New Password*" helperText="" /> 
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Confirm Password*" helperText=""/>
  </div>

  <Button type="submit" variant='filled' onclick={FilledButtonIsClicked}  >Submit</Button>

  <img src={vector1} alt=""  className="line1-img"/>

</form>
</div>





}