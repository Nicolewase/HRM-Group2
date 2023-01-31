import "./index1.css"
 import { Link } from "react-router-dom";
import { Logo } from "../logo";
 
export const SideRegis = () =>{
    return(
        <div className="side">
            <div className="logo"><Logo/></div>
            <h1>INFORMATION</h1>
            <p> Please make sure you provided a valid <br />email address, because your login credentials <br />will be sent to the email. If you fail to provide <br />a valid email, you will not get your credentials.</p>
             <Link to="/Login" className="link">Have an Account</Link> 

         
        </div>
    )
}