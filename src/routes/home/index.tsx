import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import "./style.css"
const Home = () => {
    return<div className="home">
      
          <header >
            
            <Logo/>
       
           
            <div className="links">
          <Link className="link" to="/Home">Home</Link>
          <Link className="link" to="/Login">Log in</Link>
          <Link className="link" to="/Register">Register</Link>
          </div>
          </header>
          <h2>Starting from your <br /> Dream Job</h2>
          <div>
          <Link className="learn" to="/Learn more">Learn more</Link>
          </div>
        </div>
    
}
export default Home