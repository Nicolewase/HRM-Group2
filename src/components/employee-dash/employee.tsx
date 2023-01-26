import { Link } from 'react-router-dom'
import { RightSideDashboard } from '../Dashboard-left-side/Dashboard'
import './employee.css'
import Searchbar from "../../assets/icon-img/Searchbar.svg"
import femaleimg from "./images/female-img.png"

export default function EmployeeDashboard() {
  return (
    <div className='containerfordash'>
        
        <div className="leftside">
           <RightSideDashboard/>
        </div>
        <div className="rightleft">
        
                <header className="rightcenter">
                <h3>Total employee</h3>
                <h3>27 Emplyoyees</h3>
                <Link to="/employee" className='link-add'>Add Employee</Link>
                </header>
                <input type="text" className='position-search' name='position' placeholder='position'/>
         {/* <img src={Searchbar} alt=""  className='search-bar'/> */}

            
            <div className="employone">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
            
            <div className="employtwo">
                <img className='img01'  src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
            
            <div className="employ3">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
            
            <div className="employ4">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
           
            <div className="employ7">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
            <div className="employ8">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>
            
            <div className="employ9">
                <img className='img01' src={femaleimg} alt="" />
                <h4>Employee Name</h4>
                <h5>position of employee</h5>
            </div>      
         
        </div>
        </div>
    
    
  )
}
