import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import "./styles/tailwind.css";
import Projects from "./components/Projects";
// import {useEffect, useState} from "react";
function App() {


    return (
        <Router>
          <div className="min-h-screen dark:bg-[#1d2125]">
            <Routes>
              <Route exact path="/" />
              <Route path="/project/task" element={<ProjectPage />}/>
              <Route path="/project" element={<Projects />}/>
            </Routes>
          </div>
        </Router>
    );
}

export default App;
