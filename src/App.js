import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import CertainProjectCalendarPage from "./pages/CertainProjectCalendarPage";
import ProjectCalendarPickerPage from "./pages/ProjectCalendarPickerPage";
import CreateTask from "./components/CreateTask";
import "./styles/tailwind.css";
import Projects from "./components/Projects";
import {useEffect, useState} from "react";
import Register from "./components/Register";

import ForgotPassword from "./components/ForgotPassword";
import NewPassword from "./components/NewPassword";
import ProfilePage from "./pages/ProfilePage";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewProject from "./components/NewProject";


function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-[#1d2125]">
        <Routes>
          <Route exact path="/Home" element = {<Home />}/>
          <Route path="/project/task" element={<ProjectPage />}/>
          <Route path="/project" element={<Projects />}/>
          <Route path="/newProject" element={<NewProject />}/>
          <Route path="/CertainProjectCalendar/:projectId" element={<CertainProjectCalendarPage />} />  {/* This route should match your URL structure */}
          <Route path="/ProjectCalendarPicker" element={<ProjectCalendarPickerPage />} />
          <Route path="/" element = {<Register />}/>
          <Route path="/CreateTask" element = {<CreateTask  />}/>
          <Route path = "/ForgotPassword" element = {<ForgotPassword />}/>
          <Route path = "/new-password/:token" element = {<NewPassword />}/>
          <Route path = "/profile" element = {<ProfilePage />}/>
          <Route path="/ContactInfo" element = {<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
