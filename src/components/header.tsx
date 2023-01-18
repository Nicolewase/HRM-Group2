import { Link } from "react-router-dom"
import { Logo } from "./logo"
import "./header.css"

export const Header = () => {
    return <header >
            <Logo/>
       

            <div className="links">
          <Link className="link-home" to="/Home">Home</Link>
          <Link className="link-home" to="/Login">Log in</Link>
          <Link className="link-home" to="/Register">Register</Link>
          </div>
          </header>
        }