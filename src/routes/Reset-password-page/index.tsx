import { ChangeEventHandler } from "react"
import Button from "../../components/button/button"
import { Textfield } from "../../components/Inputs"
import "./index.css"
export const ResetPswd = () => {


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
        <form action="" className="reset-form">
            <h1>Reset Password</h1>
           
            <Textfield name="Names" type="text" variant="two" label=" Email" helperText=""/>
           
           
            <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >Submit</Button>
            <Button type="submit"  variant='Outlined'onclick={OutlinedButtonIsClicked} >Cancel</Button>
            
        </form>
    </div>
}