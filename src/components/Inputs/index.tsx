import { ChangeEventHandler, useState } from "react";
import "./index.css"

type Props = {
    name: string,
    type?:"email"|"password"|"text"|"number"|"date",
    variant:"one"|"two"|"three",
    value?:string,
    label:string,
    helperText?:string,
    errorText?:string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    required?: boolean
}
export const Textfield =({
    name,
    type = "text",
    variant = "one", 
    label,
    helperText,
    onChange,
    errorText,
    required = false
}:Props) =>{
    const [inputValue, setInputValue] = useState("");
    const inputId= name;
    const emptyInput = inputValue !=="" ? "not-empty": "";

    return  <div className={`text-field ${variant} ${emptyInput}`} >

              <input required id={inputId} name={name} type={type} onChange={V=>{
                setInputValue(V.target.value);
                if(onChange){
                    
                }
              }}/>
               <label htmlFor={inputId}>{label}</label>
               {
            !helperText ? null :
               <span className="helper-text">{helperText}</span>
            }
            {
                !errorText ? null:
                <span className="error-text">{errorText}</span>
            }
             </div>
}
