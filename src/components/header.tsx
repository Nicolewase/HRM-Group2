import { Link } from "react-router-dom"
import { Logo } from "./logo"
import "./header.css"

export const Header = () => {
    return <header >
            <Logo/>
       

            <div className="links">
          <Link className="link" to="/Home">Home</Link>
          <Link className="link" to="/Login">Log in</Link>
          <Link className="link" to="/Register">Register</Link>
          </div>
          </header>
        }