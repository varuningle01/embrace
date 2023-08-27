import Login from "./Components/Login/Login";
import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import HomePage from "./Components/HomePage/HomePage";
import Admin from "./Components/Admin/Admin";
import StudentProfile from "./Components/StudentProfile/StudentProfile";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import StudentCommunity from "./Components/StudentCommunity/StudentCommunity";
import "./App.css";
import MentalHealthSupport from "./Components/MentalHealthSupport/MentalHealthSupport";
import FeeRelatedIssues from "./Components/FeeRelatedIssues/FeeRelatedIssues";
import TransportationIssues from "./Components/TransportationIssues/TransportationIssues";
import LostAndFound from "./Components/LostAndFound/LostAndFound";
import AntiRagging from "./Components/AntiRagging/AntiRagging";
import LabIssues from "./Components/LabIssues/LabIssues";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/signup" /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <Login /> },
    { path: "/home", element: <HomePage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/profile", element: <StudentProfile /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/community", element: <StudentCommunity /> },
    { path: "/mentalhealthsupport", element: <MentalHealthSupport /> },
    { path: "/feerelatedissues", element: <FeeRelatedIssues /> },
    { path: "/transportationissues", element: <TransportationIssues /> },
    { path: "/lostandfound", element: <LostAndFound /> },
    { path: "/antiragging", element: <AntiRagging /> },
    { path: "/labissues", element: <LabIssues /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
