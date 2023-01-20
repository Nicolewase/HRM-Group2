import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import "./index.css"
const ProjectsReport = () => {

    return <div className="D-projects-page">
        
        <form action="" className="D-projects-form">
        <div className="D-projects-left">
        <RightSideDashboard/>
        </div>

        <div className="D-projects-right">
            <header className="P-header">
            <h1>Project</h1>
            </header>

            <form action="" className="Inner-form" >
           <div className="project-left">

            <div className="p-planning">
            <h1>PLANNING</h1>
            <p>Project Assessment </p>
            <p>Feasibility Check</p>
            </div>

            <div className="p-design">
            <h1>design</h1>
            <p>wireframe </p>
            <p>Mock-up + Review</p>
            </div>

           <div className="p-development">
            <h1>development</h1>
            <p>Technical Stack research </p>
            <p>Pages Development</p>
            <p>Login/signup feature</p>
            <p>combining pages & Login</p>
            </div>
  
            <div className="p-launch">
            <h1>launch</h1>
            <p>Review + Refine </p>
            <p>packaging Source File</p>
            <p>Launch App</p>
            </div>

           </div>

           <div className="project-right">
            
                <p>w1</p>
                <p>w2</p>
                <p>w3</p>
                <p>w4</p>
                <p>w5</p>
                <p>w6</p>
                <p>w7</p>
                <p>w8</p>
           <div className="p-assessment"></div>
           <div className="p-feasibility-check"></div>
           <div className="D-wireframe"></div>
           <div className="D-Review"></div>
           <div className="Dev-Technical"></div>
           <div className="Dev-Pages"></div>
           <div className="Dev-feature"></div>
           <div className="Dev-combining"></div>
           <div className="L-Refine"></div>
           <div className="L-packaging"></div>
           <div className="L-Launch"></div>

           </div>
            </form>
           
        </div>
        </form>
        </div>
}

export default  ProjectsReport