import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import "./styles/tailwind.css";
// import {useEffect, useState} from "react";
import Register from "./components/Register";
function App() {
    return (
        <Router>
          <div className="min-h-screen dark:bg-[#1d2125]">
            <Routes>
              <Route exact path="/" />
              <Route path="/project" element={<ProjectPage />}/>
              <Route path="/Register" element = {<Register />}/>
            </Routes>
          </div>
        </Router>
    );
}

export default App;
