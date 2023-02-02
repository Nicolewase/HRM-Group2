import { Link } from "react-router-dom"
import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import "./department.css"
import edit1 from "./image/edit1.png"
import delete1 from "./image/delete1.png"
import Create from "./image/Create.png"
import view1 from "./image/view1.png"
import user from "./image/user.png"

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
                    <div className="user">
                    <img src={user} alt="" className="user-icon"/>
                    <h2> Number of department</h2>
                    </div>
                     <div className="six">6</div>
                </div>
            </div>
            <div className="dept-table">
      <table>
        <tr>
          <th>Dept no</th>
          <th>Departnamet name</th>
          <th>Emp number </th>
          <th>Average cost  </th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Create</th>
          <th>View</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Accounting and finance</td>
          <td>5</td>
          <td>$ 1137.45</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>production</td>
          <td>6</td>
          <td>$2053.45</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Information technology</td>
          <td>8</td>
          <td>$2053.48</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Research and development</td>
          <td>16</td>
          <td>$2053.45</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
        <tr>
          <td>5</td>
          <td>cusomer service</td>
          <td>10</td>
          <td>$2053.45</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Administration/operation</td>
          <td>15</td>
          <td>$2053.45</td>
          <td><img src={edit1} alt="" className="dept-table-icon"/></td>
          <td><img src={delete1} alt="" className="dept-table-icon" /></td>
          <td><img src={Create} alt=""  className="dept-table-icon"/></td>
          <td><img src={view1} alt=""  className="dept-table-icon"/></td>
        </tr>
      </table>
    </div>
        </div>
       </div> 
    </div>
}
export default Department