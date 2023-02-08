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
import AddEmployees from './routes/Add-employee-page/employee';
import Dashboard from './routes/Dashboard-page';
import Messages from './components/Messages/Messages';
import Schedule from './routes/Schedule-page/Schedule';
import EmployeeDashboard from './routes/employee-dash/employee';
import ProjectsReport from './routes/D-project-page/Project';
import Department from './routes/department-page/department';
import DashCalendar from './components/calendar/calendar';
import { ResetPswd } from './routes/Reset-password-page';
import { VerficationCode } from './routes/verfication-page';




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
    path: "/Reset-password-page",
    element: <ResetPswd/>
  },
{
  path:"/password",
  element: <Password/>
},
{
  path:"/verfication-page",
  element: <VerficationCode/>
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
  },
  {
    path:"/employee-dash",
    element:<EmployeeDashboard/>
  },
  {
    path:"/department-page",
    element:<Department/>
  }


]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
