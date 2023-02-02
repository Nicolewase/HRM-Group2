import { Form, useNavigate } from "react-router-dom"
import Button from "../../components/button/button"
import { Textfield } from "../../components/Inputs"
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import vector1 from "../../assets/icon-img/Vector1.png"
import "./password.css";
import { Header } from "../../components/header";
import { getFormData } from "../../utils/form-utils";
import { Loading } from "../../components/loading/loading";


export const Password = () => {

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
  
<form action="https://ems-production-81f8.up.railway.app/api/resetpswd" className="pswd-form1" onSubmit={loginAction} >

  <h1>RESET-PASSWORD</h1>
  <div className="inptall">
  <Textfield name="Names" type="text" variant="two" label=" email" helperText=""/>
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Password*" helperText="" /> 
  <Textfield onChange={onPasswordChange} name="number" type="password" variant="two" label="Password_confirmation*" helperText=""/>
  </div>

  <Button type="submit" variant='filled' onclick={FilledButtonIsClicked}>
    {
    !isLoading ? "Submit" :
          <Loading />
         }</Button>

  <img src={vector1} alt=""  className="line1-img"/>

</form>
</div>





}