import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import "./styles/tailwind.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" />
          <Route path="/project" element={<ProjectPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
