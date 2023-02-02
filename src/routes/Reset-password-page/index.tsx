import { ChangeEventHandler, FormEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/button/button"
import { Textfield } from "../../components/Inputs"
import { Loading } from "../../components/loading/loading"
import { getFormData } from "../../utils/form-utils"
import "./index.css"
export const ResetPswd = () => {

    const [isLoading,  setIsLoading] = useState(false);
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
      goto("/verfication-page");
      return;
    }
    const responseData = await resp.json();
    setIsLoading(false);

    const message = responseData.message;
    setErrorMessage(message);


  };


const onEmailChange: ChangeEventHandler<HTMLInputElement> = (V) =>{
//  const  email = V.target.value;
}
const filledButtonIsClicked=()=>{
    console.log("filled")
}

const OutlinedButtonIsClicked=()=>{
    console.log("outlined")
  }
    return <div className="reset-page">
        <form action="https://ems-production-81f8.up.railway.app/api/forgotpassword" method="POST" onSubmit={handleSubmit} className="reset-form">
            <h1>Reset Password</h1>
           
            <Textfield name="email" type="text" variant="two" label=" Email" helperText=""/>
           {/* <div className="error-message">{errorMessage}</div> */}
           
            <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >{
          !isLoading ? "Submit" :
          <Loading />
         }</Button>
            <Button type="submit"  variant='Outlined'onclick={OutlinedButtonIsClicked} >Cancel</Button>
            
        </form>
    </div>
}