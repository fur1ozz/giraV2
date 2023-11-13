import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import "./styles/tailwind.css";
// import {useEffect, useState} from "react";
function App() {


    return (
        <Router>
          <div className="min-h-screen dark:bg-[#1d2125]">
            <Routes>
              <Route exact path="/" />
              <Route path="/project" element={<ProjectPage />}/>
            </Routes>
          </div>
        </Router>
    );
}

export default App;
