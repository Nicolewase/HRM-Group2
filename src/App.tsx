import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Buttons from './components/Output-btn/Btn-index';
import Home from './routes/home';
import { Login } from './routes/Loginform/login';
import { Password } from './routes/Passwordform/password';

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
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
