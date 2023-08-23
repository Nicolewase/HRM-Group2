import  { useState } from 'react';
import Calendar from 'react-calendar';
import "./index.css"
// import {render} from "react-dom";
import 'react-calendar/dist/Calendar.css';

// const DashCalendar = () => {
//     const [date,setDate] = useState(new Date());

//     const onChange = date  => {
//         setDate(date)
//     }

    function  DashCalendar() {
        const [value, onChange] = useState(new Date());
      
        return (
          <div className='D-calendar'>
            
          </div>
        );
      }

//     return <div>
//       <Calendar onChange={onChange} value={date} />
//     </div>
// } Calendar onChange={onChange} value={value} />
// render(<DashCalendar/>, document.querySelector('#root'))
export default DashCalendar