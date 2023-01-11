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
<Textfield name="Names" type="text" variant="three" label="First name" helperText=""/>
  <Textfield name="Names" type="text" variant="three" label="Last name" helperText=""/>
  <Textfield name="Names" type="text" variant="three" label=" Email" helperText=""/>
  <Textfield name="Dept" type="text" variant="three" label=" Department" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="three" label="Password" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="three" label="Confirm Password" helperText=""/>
</form>
</div>
)
}
export default Components;
