import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import CertainProjectCalendarPage from "./pages/CertainProjectCalendarPage";
import ProjectCalendarPickerPage from "./pages/ProjectCalendarPickerPage";
import "./styles/tailwind.css";
import Projects from "./components/Projects";
// import {useEffect, useState} from "react";
import Register from "./components/Register";

import Contact from "./components/Contact";
import Home from "./components/Home";

import NewProject from "./components/NewProject";


function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-[#1d2125]">
        <Routes>
          <Route exact path="/" />
          <Route path="/project/task" element={<ProjectPage />}/>
          <Route path="/project" element={<Projects />}/>
          <Route path="/newProject" element={<NewProject />}/>
          <Route path="/CertainProjectCalendar/:projectId" element={<CertainProjectCalendarPage />} />  {/* This route should match your URL structure */}
          <Route path="/ProjectCalendarPicker" element={<ProjectCalendarPickerPage />} />
          <Route path="/Register" element = {<Register />}/>
          <Route path="/Contact" element = {<Contact />}/>
          <Route path="/Home" element = {<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
