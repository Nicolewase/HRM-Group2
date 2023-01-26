import Calendar from "../../components/calendar/calendar"
import { RightSideDashboard } from "../../components/Dashboard-left-side/Dashboard"
import "./Schedule.css"
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
            <div className="left-schdl">

                
                <div className="schdl-calendar">
                {/* <Calendar/> */}
                calendar
                    </div>
                    <div className="today-event">
                        <p id="today-date">TODAY 2/02/2023</p>
                        <p id="cloud1">25/40</p>
                        <img src={sun} alt="" className="sun"/>
                        <p id="Meeting">Employees Meeting</p>
                        <p id="dot"></p>
                        <p id="time1">8:30 -9:00 AM</p>
                        <div className="video" ><img src={video} alt="" className="video1" /></div>
                        <p id="month">Monthly catch-up</p>
                        <p id="dot1"></p>
                        <p id="time2">8:30 -9:00 AM</p>
                        <div className="video2" ><img src={video} alt="" className="video3" /></div>
                        <p id="month1">Quarterly review</p>
                        <p id="zoom">https://zoom.us</p>
                    </div>

                    <div className="tommorow">
                        <p id="today-date">TOMMOROW 12/20/2023</p>
                        <p id="cloud1">27/40</p>
                        <img src={sun} alt="" className="sun"/>
                        <p id="dot"></p>
                        <p id="time1">8:30 -9:00 AM</p>
                        <div className="video" ><img src={video} alt="" className="video1" /></div>
                        <p id="month">Visit to discuss improvements</p> <br/>
                        <p id="zoom">https://zoom.us/i/1983475281</p>
                        <p id="dot1"></p>
                        <p id="time2">8:30 -9:00 AM</p>
                        <div className="video2" ><img src={video} alt="" className="video3" /></div>
                        <p id="month1">Presentation of new system and implimate it</p>
                        
                    </div>

            </div>
           </form>
        </div>
       </form>
    </div>
}
export default Schedule