import { Form } from "react-router-dom"
import Button from "../../components/button/button"
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler, useState } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import "./password.css";


export const Password = () => {

  const OutlinedButtonIsClicked = () => {
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


return <form action="" onSubmit={loginAction} >

  <h1>PASSWORD</h1>
  <div className="inptall">
  <div ><Textfield name="Names" type="text" variant="three" label=" Email" helperText=""/></div>
  <div ><Textfield onChange={onPasswordChange} name="number" type="password" variant="three" label="New Password*" helperText="" /></div> 

  <div ><Textfield onChange={onPasswordChange} name="number" type="password" variant="three" label="Confirm Password*" helperText=""/></div> 
  </div>

  <Button type="submit" variant='Outlined' onclick={OutlinedButtonIsClicked}  >Submit</Button>

  <img src={vector1} alt=""  className="line-img"/>
  

</form>






}