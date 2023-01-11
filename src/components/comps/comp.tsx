import { ChangeEventHandler, useState } from "react";
import { Textfield } from "../Inputs";



const components =() =>{
  let email ="";
  let password ="";
const onEmailChange: ChangeEventHandler<HTMLInputElement> = (V) =>{
  email = V.target.value;
}
const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (V) =>{
  password = V.target.value;
}
const loginAction = (evt: any) =>{
  evt.preventDefault();
  const cred = {email, password};
  console.log(cred);
}
return (
  <div className="create">{/*
<TextInp type="text" name="fullNames" label="fullName" helperText="SupportingText"/>
<span>SupportingText</span>
<TextInp type="email" name="email label="Email"/>*/}


<form action="" onSubmit={loginAction}>
  <Textfield onChange={onEmailChange} name= "Email" type="email" variant="one"label="Email"errorText="Invalid email"helperText="Email must contain @ sign"/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Password" helperText="Only numbers"/>
  <Textfield name="Names" type="text" variant="three" label="Fullnames" helperText="Fill your Names"/>
</form>
</div>
)
}
export default components;
