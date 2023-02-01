import { Link } from "react-router-dom"
import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import "./department.css"
import edit1 from "./image/edit1.png"
import delete1 from "./image/delete1.png"
import Create from "./image/Create.png"
import view1 from "./image/view1.png"

const Department = () => {
    return <div className="Department-page">
       <div className="dept-left">
        <RightSideDashboard />
       </div>
       <div className="dept-right">
        <h1>Department</h1>
        <div className="dept-inner-page">
            <div className="dept-on-top">
                <div className="dept-tit">

                    <div className="dept-ttle">
                <h2>Department announcement</h2>
                <Link to="View All" className="View-All">View All</Link>
                </div>
                <p>Monday, September 2021 <br />Nicole its an employee who won “supervisor& star of <br />the year” award <br />Monday, november 2021 <br />Joyce is an employee who won “supervisor& star of <br />the year” award</p>
                </div>

                <div className="dept-left-tit">

                    <h2> Number of department</h2>
                    {/* <div>6</div> */}
                </div>
            </div>
            <form action="" className="dept-form">
                <div className="form-tit">
                    <h2>Dept no</h2>
                    <h2>Departnamet name</h2>
                    <h2>Emp number </h2>
                    <h2>Average cost </h2>
                    <h2>Edit</h2>
                    <h2>Delete</h2>
                    <h2>Create</h2>
                    <h2>View</h2>
                </div>

                <div className="form-tit">
                    <h2>1</h2>
                    <h2>Accounting and finance</h2>
                    <h2>5 </h2>
                    <h2>$ 1137.45 </h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1"/></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt="" className="Create"/></h2>
                    <h2><img src={view1} alt="" className="view1"/></h2>
                    </div>
                </div>
                <div className="form-tit">
                    <h2>2</h2>
                    <h2>production</h2>
                    <h2>6</h2>
                    <h2>$2053.45 </h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1"/></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt="" className="Create"/></h2>
                    <h2><img src={view1} alt="" className="view1"/></h2>
                    </div>
                </div>
                <div className="form-tit">
                    <h2>3</h2>
                    <h2>Information technology</h2>
                    <h2>8</h2>
                    <h2>$2053.45 </h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1"/></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt="" className="Create"/></h2>
                    <h2><img src={view1} alt="" className="view1"/></h2>
                    </div>
                </div>
                <div className="form-tit">
                    <h2>4</h2>
                    <h2>Research and development </h2>
                    <h2>16</h2>
                    <h2>$2053.45 </h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1"/></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt="" className="Create"/></h2>
                    <h2><img src={view1} alt="" className="view1"/></h2>
                    </div>
                </div>
                <div className="form-tit">
                    <h2>5</h2>
                    <h2>cusomer service</h2>
                    <h2>10 </h2>
                    <h2>$2053.45 </h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1" /></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt="" className="Create"/></h2>
                    <h2><img src={view1} alt="" className="view1"/></h2>
                    </div>
                </div>
                <div className="form-tit">
                    <h2>6</h2>
                    <h2>Administration/operation</h2>
                    <h2>15 </h2>
                    <h2>$2053.45</h2>
                    <div className="images">
                    <h2><img src={edit1} alt="" className="edit1"/></h2>
                    <h2><img src={delete1} alt="" className="delete1" /></h2>
                    <h2><img src={Create} alt=""  className="Create"/></h2>
                    <h2><img src={view1} alt=""  className="view1"/></h2>
                    </div>
                </div>
            </form>
        </div>
       </div>
    </div>
}
export default Department