import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Buttons from './components/Output-btn/Btn-index';
import Home from './routes/home';
import { Login } from './routes/Loginform/login';
import { Password } from './routes/Passwordform/password';
import Registration from './routes/register-page/register';
import ProjectsReport from './routes/D-Project-page/Project';
import AddEmployees from './routes/Add-employee-page/employee';
import Dashboard from './routes/Dashboard-page';
import DashCalendar from './components/calendar/calendar';
import Messages from './components/Messages/Messages';
import Schedule from './routes/Schedule-page/Schedule';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/home",
    element: <Home/>,
  },

  {
    path: "test/buttons",
    element: <Buttons/>
  },
{
  path:"/password",
  element: <Password/>
},
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Registration/>
  },
  {
    path:"/Dashboard-page",
    element:<Dashboard/>
  },
  {
    path:"/Project",
    element:<ProjectsReport/>
  },
  {
    path:"/calendar",
    element: <DashCalendar/>
  },
  {
    path:"/Employee",
    element:<AddEmployees/>
  },
  {
    path:"/Messages",
    element:<Messages/>
  },
  {
    path:"/schedule",
    element:<Schedule/>
  }

]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
