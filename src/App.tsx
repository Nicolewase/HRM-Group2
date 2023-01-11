import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Buttons from './components/Output-btn/Btn-index';
import { SignIn } from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "test/buttons",
    element: <Buttons/>
  },
  {
    path: "/signin",
    element: <SignIn />
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
