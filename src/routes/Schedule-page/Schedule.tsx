import Calendar from "../../components/calendar/calendar"
import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import "./Schedule.css"
import scheduleimg from "../../assets/icon-img/schedule-img.png"
import sun from "../../assets/Other-icon/sun.png"
import video from "../../assets/Other-icon/video.png"

const Schedule = () => {
    return <div className="Schedule-page">
       <form action="" className="Schedule-form">
       <div className="Schedule-left">
        <RightSideDashboard/>
        </div>

        <div className="Schedule-right">
        <header className="Schdl-header" >
            <h1>Schedule</h1>
           </header>

           <form action="" className="schedule-innerform">
            <img src={scheduleimg} alt="" className="scheduleimg" />
           </form>
        </div>
       </form>
    </div>
}
export default Schedule