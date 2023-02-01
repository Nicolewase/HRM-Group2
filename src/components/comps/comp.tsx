import { ChangeEventHandler, useState } from "react";
import { Textfield } from "../Inputs";



const Components =() =>{
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
<Textfield name="Names" type="text" variant="two" label="Full name" helperText=""/>
  <Textfield name="Names" type="text" variant="two" label="UserName" helperText=""/>
  <Textfield name="Names" type="text" variant="two" label=" Email" helperText=""/>
  <Textfield name="Dept" type="text" variant="two" label=" Department" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Password" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Password_Confirmation" helperText=""/>
</form>
</div>
)
}
export default Components;
