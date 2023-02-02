import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData, getFormDataJSON } from "../../utils/form-utils";
import { Textfield } from "../Inputs";
import { Loading } from "../loading/loading";
import "./style.css";

type registerUserDataType = {
  fullname: string,
  userName: string,
  Email: string,
  Password: string,
  Password_confirmation: string
}



const Components = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading,  setIsLoading] = useState(false);
  const goto = useNavigate();

  const loginAction: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const data = getFormDataJSON(form) as registerUserDataType;
    

    if(data.Password !== data.Password_confirmation){
      setErrorMessage("Password doesn't match");
      return;
    }
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
      goto("/login");
      return;
    }
    const responseData = await resp.json();
    setIsLoading(false);

    const message = responseData.message;
    setErrorMessage(message);

    
  }
  return (
    <div className="create">

      <form action="https://ems-production-81f8.up.railway.app/api/Registration" onSubmit={loginAction}>
        <Textfield required name="fullname" type="text" variant="two" label="Full name" helperText="" />
        <Textfield required name="userName" type="text" variant="two" label="UserName" helperText="" />
        <Textfield required name="Email" type="text" variant="two" label=" Email" helperText="" />
        <Textfield required name="Password" type="password" variant="two" label="Password" helperText="" />
        <Textfield required name="Password_confirmation" type="password" variant="two" label="Password_Confirmation" helperText="" />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
         <button disabled={isLoading} className="Outlined register-button">{
          !isLoading ? "Register" :
          <Loading />
         }</button>
      </form>
    </div>
  )
}
export default Components;
