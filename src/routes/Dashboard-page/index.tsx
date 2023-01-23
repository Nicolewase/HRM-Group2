import DashCalendar from "../../components/calendar/calendar"
import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import Messages from "../../components/Messages/Messages"
import "./index2.css"
const Dashboard = () => {

    return <div className="Dashboard-page">
        <form action="" className="Dashboard-form">
        <div className="Dashboard-left">
        <RightSideDashboard/>
        </div>

        <div className="Dashboard-right">
           <header className="D-header" >
            <h1>Dashboard</h1>
           </header>

           <div className="total">
           <div className="box1">
            <h1>27</h1> 
            <p>total employee</p>
           </div>
           <div className="box6">
            <h1>7</h1> 
            <p>total Departments</p>
           </div>
           </div>

           <div className="j-employees">
           <div className="box2">
            <h1>50</h1> 
            <p>job applicants</p>
           </div>
           <div className="box7">
            <h1>7</h1> 
            <p>New employees</p>
           </div>
           </div>

           <div className="R-employees">
           <div className="box4">
            <h1>3</h1> 
            <p>Resigned Employees</p>
           </div>
           <div className="box9">
            <h1>0</h1> 
            <p>Recruitment</p>
           </div>
           </div>

           <div className="project-status">
           <div className="box3">
            <h1>78</h1> 
            <p>project in progress</p>
           </div>
           <div className="box8">
            <h1>67</h1> 
            <p>Completed Project</p>
           </div>
           </div>

           

           <div className="total-p">
           <div className="box5">
            <h1>201</h1> 
            <p>Total projects</p>
           </div>
           </div>
           
           <DashCalendar/>
           {/* <Messages/> */}

        </div>
        </form>
    </div>
}

export default Dashboard