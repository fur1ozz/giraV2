import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import CertainProjectCalendarPage from "./pages/CertainProjectCalendarPage";  // Make sure the correct import path is used
import ProjectCalendarPickerPage from "./pages/ProjectCalendarPickerPage";

import "./styles/tailwind.css";
// import {useEffect, useState} from "react";
import Register from "./components/Register";
function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-[#1d2125]">
        <Routes>
          <Route exact path="/" />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/CertainProjectCalendar/:projectId" element={<CertainProjectCalendarPage />} />  {/* This route should match your URL structure */}
          <Route path="/ProjectCalendarPicker" element={<ProjectCalendarPickerPage />} />
          <Route path="/Register" element = {<Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
