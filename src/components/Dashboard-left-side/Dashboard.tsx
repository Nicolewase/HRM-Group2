import { Link } from "react-router-dom"
import { DarkMode } from "../Dark-mode/Dark-mode"
import "./Dashboard.css"
export const RightSideDashboard =() => {
    return <div className="dashboard-comp">
        <header className="header-Dash">
        <h1>HRMS</h1>
        </header>

        <div className="dashboard-links">
            <Link className="D-link" to="/Dashboard-page" >Dashboard</Link>
            <Link className="D-link" to="/employee-dash" >Employee</Link>
            <Link className="D-link" to="/Department" >Department</Link>
            <Link className="D-link" to="/Project" >Projects</Link>
            <Link className="D-link" to="/Messages" >Messages</Link>
            <Link className="D-link" to="/Schedule" >Schedule</Link>
            <Link className="D-link" to="/Report" >Report</Link>
            <Link className="D-link" id="Dsign" to="/home" >Sign out</Link>
            <p>Dark mode</p>
            <DarkMode/>
        </div>
        
        
    </div>
}