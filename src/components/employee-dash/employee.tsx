import './employee.css'

export default function EmployeeDashboard() {
  return (
    <div className='containerfordash'>
        <div className="rightleft">
        <div className="leftside">
            <h1>HRMS</h1>
            <img src="./images/Vector 1.png" alt="" />
            <ul className="dashbrdlist">
                <a href=""><li className="listitems">Dashboard</li></a>
                <a href=""><li className="listitems">Employee</li></a>
                <a href=""><li className="listitems">Department</li></a>
                <a href=""><li className="listitems">Projects</li></a>
                <a href=""><li className="listitems">Messages</li></a>
                <a href=""><li className="listitems">Jobs</li></a>
                <a href=""><li className="listitems">Schedule</li></a>
                <a href=""><li className="listitems">Report</li></a>
                <a href=""><li className="listitems1">Sign out</li></a>
                <a href=""><li className="listitems2">Dark mode</li></a>
            </ul>

        </div>
        <div className="rights">
            <div className="rightcenter">
                <h4>Total employee</h4>
                <h2>27 Emplyoyees</h2>
            </div>

            <div className="right2">
                <div className="btn">
                     <button className='Emplobtn'>Add Employee</button>
                     <button className='Positionbtn'>Position</button>
                </div>

            </div>        

        <div className="employinf">
            <div className="employone">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employtwo">
                <img className='img01'  src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employ3">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employ4">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            {/* <div className="employ5">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employ6">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div> */}
            <div className="employ7">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employ8">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
            <div className="employ9">
                <img className='img01' src="http://127.0.0.1:5173/src/components/employee-dash/images/female-img.png" alt="" />
                <h2>Employee Name</h2>
                <h5>position of employee</h5>
            </div>
                    
        </div>
                
        </div>

        </div>
    </div>
    
  )
}
