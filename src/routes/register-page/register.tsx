import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import Components from "../../components/comps/comp"
import { SideRegis } from "../../components/Register-side"
import "./register.css"

 const Registration = () =>{
    
    const OutlinedButtonIsClicked=()=>{
        console.log("outlined")
      }
    return<div className="Register-page">
        <form action="" className="Register-form">
            <div className="Aside">
        <SideRegis/>
        </div>
      <div className="c-register">
        <h1>registration form</h1>
        <div className="R-inpt"><Components/></div>
        <Button type="submit"  variant='Outlined'onclick={OutlinedButtonIsClicked}>Register</Button>
        
        <div className="checkbox">
    <input type="checkbox"  className="check"/>
    <label htmlFor="checkbox">I agree to the  <Link to="terms and conditions" className="c-link" >terms and conditions</Link></label>
  
  
</div>
      </div>
   
      
      </form>
      </div>
    
 }
 export default Registration