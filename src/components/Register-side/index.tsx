import "./index1.css"
 import { Link } from "react-router-dom";
 
export const SideRegis = () =>{
    return(
        <div className="side">
        
            <h1>INFORMATION</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
             <Link to="/" className="link">Have an Account</Link> 

         
        </div>
    )
}