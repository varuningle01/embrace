import Login from "./Components/Login/Login";
import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import GrievanceForm from "./Components/Form/GrievanceForm";
import Card from "./Components/Card/Card";
import Admin from "./Components/Admin/Admin";
import StudentProfile from "./Components/StudentProfile/StudentProfile";
import { RouterProvider, createBrowserRouter,Navigate } from "react-router-dom";

function App() {
 
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to='/signin'/> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <Login /> },
    { path: "/home", element: <HomePage /> },
    { path: "/admin", element: <Admin /> },
   
    
  ]);
  return (
    <div>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      {/* <Card/> */}
      {/* <Admin/> */}
      {/* <StudentProfile/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
