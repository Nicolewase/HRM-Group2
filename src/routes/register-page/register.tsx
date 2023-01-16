import Button from "../../components/button/button"
import Components from "../../components/comps/comp"
import { SideRegis } from "../../components/Register-side"
import "./register.css"

 const Registration = () =>{
    
    const OutlinedButtonIsClicked=()=>{
        console.log("outlined")
      }
    return(
        <form action="" className="form">
            <div className="Aside">
        <SideRegis/>
        </div>
      <div className="register">
        <Components/>
        <Button type="submit"  variant='Outlined'onclick={OutlinedButtonIsClicked}>Register</Button>
        
        <div className="checkbox">
    <input type="checkbox"  className="check"/>
    <label htmlFor="checkbox">I agree to the</label>
  
  <a href="">terms and conditions</a>
</div>
      </div>
   
      
      </form>
    )
 }
 export default Registration