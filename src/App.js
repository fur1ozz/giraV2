import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" />
          <Route path="/Project" element={<ProjectPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
