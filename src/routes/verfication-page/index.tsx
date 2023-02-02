import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button"
import { Loading } from "../../components/loading/loading";
import { getFormData } from "../../utils/form-utils";
import "./index.css"
export const VerficationCode = () => {
    
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
      goto("/passwordform");
      return;
    }
    const responseData = await resp.json();
    setIsLoading(false);

    const message = responseData.message;
    setErrorMessage(message);


  };
  const [isLoading,  setIsLoading] = useState(false);
  

    const filledButtonIsClicked=()=>{
        console.log("filled")
    }

    return <div className="verfication-page">
        <form action="" className="verfication-form">
            <h1>Verfication</h1>
            <div className="spans">
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
            
            </div>
            <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >{
          !isLoading ? "Submit" :
          <Loading />
         }</Button>
        </form>
    </div>
    
}