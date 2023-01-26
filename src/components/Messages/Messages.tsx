import  shape  from "../../assets/icon-img/Shape.png"
import menuicon from "../../assets/icon-img/menu.png"
import profile1 from "../../assets/profile-img/profile1.png"
import profile2 from "../../assets/profile-img/profile2.png"
import profile3 from "../../assets/profile-img/profile3.png"
import profile4 from "../../assets/profile-img/profile4.png"
import profile5 from "../../assets/profile-img/profile5.png"
import "./index.css"


const Messages = () => {
    return <form action="" className="Message-form">
        <header className="Nofication-messages">
            <img src={shape} alt="" className="shape-img"/>
            <h1>Notification</h1>
            <div  className="Menu-icon">
            <img src={menuicon} alt="" className="menu-img"/>
            </div>
        </header>

         <header className="second-title">
            <p id="General">General</p>
                <p id="Recomanded">Recomanded</p>
                <p id="number">12</p>
            </header>
            <div className="chat-message">
                 <img src={profile1} alt="" className="profile1" />
                 <p id="chat-nbr">2</p>
                 <p id="Sale">SALE IS LIVE</p>
                 <p id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                     dolor sit amet, consectetur adipiscing elit.  </p>
                     <p id="time">1m ago.</p>
            </div>
            <div className="chat-message1">
                 <img src={profile2} alt="" className="profile1" />
                 <p id="chat-nbr">22</p>
                 <p id="Sale">SALE IS LIVE</p>
                 <p id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                     dolor sit amet, consectetur adipiscing elit.  </p>
                     <p id="time">1m ago.</p>
            </div>
             <div className="chat-message2">
                 <img src={profile3} alt="" className="profile1" />
                 <p id="chat-nbr">14</p>
                 <p id="Sale">SALE IS LIVE</p>
                 <p id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                     dolor sit amet, consectetur adipiscing elit.  </p>
                     <p id="time">1m ago.</p>
            </div>
           
            <div className="chat-message3">
                 <img src={profile4} alt="" className="profile1" />
                 <p id="chat-nbr">8</p>
                 <p id="Sale">SALE IS LIVE</p>
                 <p id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                     dolor sit amet, consectetur adipiscing elit.  </p>
                     <p id="time">10 Hrs ago.</p>
            </div>
             
            <div className="chat-message4">
                 <img src={profile5} alt="" className="profile1" />
                 <p id="chat-nbr">26</p>
                 <p id="Sale">SALE IS LIVE</p>
                 <p id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                     dolor sit amet, consectetur adipiscing elit.  </p>
                     <p id="time">15 Hrs ago.</p>
            </div>
    </form>
    

}
export default Messages