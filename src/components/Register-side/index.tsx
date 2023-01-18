import "./index1.css"
 import { Link } from "react-router-dom";
import { Logo } from "../logo";
 
export const SideRegis = () =>{
    return(
        <div className="side">
            <div className="logo"><Logo/></div>
            <h1>INFORMATION</h1>
            <p> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis <br /> nostrud</p>
             <Link to="/Login" className="link">Have an Account</Link> 

         
        </div>
    )
}