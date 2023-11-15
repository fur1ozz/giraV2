import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./pages/ProjectPage";
import "./styles/tailwind.css";
import Register from "./components/Register";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" />
          <Route path="/Project" element={<ProjectPage />}/>
          <Route path="/Register" element = {<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
