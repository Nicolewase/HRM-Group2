import { Link } from "react-router-dom"
import { Header } from "../../components/header"
import { Logo } from "../../components/logo"

import "./style.css"
const Home = () => {
    return<div className="home">
      
          <Header/>
          <h2>Starting from your <br /> Dream Job</h2>
          <div>
          <Link className="learn" to="/Learn more">Learn more</Link>
          </div>
        </div>
    
}
export default Home