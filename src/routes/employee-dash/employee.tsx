import { Form, Link } from 'react-router-dom'
import { RightSideDashboard } from '../../components/Dashboard-left-side/Dashboard'
import './employee.css'
import Editimg from "../../assets/Action-icon/edit.png"
import viewimg from "../../assets/Action-icon/view.png"
import deleteimg from "../../assets/Action-icon/delete.png"
import Button from '../../components/button/button'

export default function EmployeeDashboard() {
    const filledButtonIsClicked=()=>{
        console.log("filled")
    }
  return (
    <div className='containerfordash'>
        
        <div className="leftside">
           <RightSideDashboard/>
        </div>
        <div className="rightside">
            <div className='emp-header'>
                <h1>Total Employees</h1>
                 <div className='emp-nbr'>
                 <span id='emp-spnbr'>27</span>
                 <h2 id='emp-sp'>Employees</h2></div>
                 <Link className='emp-header-link' to="/Employee" >Add employees</Link>
                  {/* <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >Add employees</Button> */}
                 
            </div>
            <form action="" className='emplo-form'>
                <div className='emplo-title'>
                    <h2>#</h2>
                    <h2>Phonenumber</h2>
                    <h2>Gender</h2>
                    <h2>employmentStatus</h2>
                    <h2>matialStatus</h2>
                    <h2>Startdate</h2>
                    <h2>Qualificationlevel</h2>
                    <h2>dateOfBirth</h2>
                    <h2>Country_id</h2>
                    <h2>User_id</h2>
                    <h2>Dep_id</h2>
                    <h2>Actions</h2>
                </div>

                <div className='enter-data1'>
                    <div className='first-span'>
                    <span>1</span>
                    <span>+250-786-550-141</span>
                    <span>Female</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className='second-span'>
                    <span className='img-span'><img src={Editimg} alt=""  className='edit-img'/></span>
                    <span className='img-span'><img src={viewimg} alt="" className='view-img'/></span>
                    <span className='img-span'><img src={deleteimg} alt="" className='delete-img'/></span>
                    </div>
                </div>
                <div className='enter-data1'>
                <div className='first-span'>
                    <span>2</span>
                    <span>+250-786-550-141</span>
                    <span>Female</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className='second-span'>
                    <span className='img-span'><img src={Editimg} alt=""  className='edit-img'/></span>
                    <span className='img-span'><img src={viewimg} alt="" className='view-img'/></span>
                    <span className='img-span'><img src={deleteimg} alt="" className='delete-img'/></span>
                    </div>
                </div>
                <div className='enter-data1'>
                <div className='first-span'>
                    <span>3</span>
                    <span>+250-786-550-141</span>
                    <span>Female</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className='second-span'>
                    <span className='img-span'><img src={Editimg} alt=""  className='edit-img'/></span>
                    <span className='img-span'><img src={viewimg} alt="" className='view-img'/></span>
                    <span className='img-span'><img src={deleteimg} alt="" className='delete-img'/></span>
                    </div>
                </div>
                <div className='enter-data1'>
                <div className='first-span'>
                    <span>4</span>
                    <span>+250-786-550-141</span>
                    <span>Female</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className='second-span'>
                    <span className='img-span'><img src={Editimg} alt=""  className='edit-img'/></span>
                    <span className='img-span'><img src={viewimg} alt="" className='view-img'/></span>
                    <span className='img-span'><img src={deleteimg} alt="" className='delete-img'/></span>
                    </div>
                </div>
                <div className='enter-data1'>
                <div className='first-span'>
                    <span>5</span>
                    <span>+250-786-550-141</span>
                    <span>Female</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className='second-span'>
                    <span className='img-span'><img src={Editimg} alt=""  className='edit-img'/></span>
                    <span className='img-span'><img src={viewimg} alt="" className='view-img'/></span>
                    <span className='img-span'><img src={deleteimg} alt="" className='delete-img'/></span>
                    </div>
                </div>
            </form>
        
        </div>
        </div>
    
    
  )
}
