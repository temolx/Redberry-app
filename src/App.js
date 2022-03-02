import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Covid from './components/Covid';
import Insights from './components/Insights';
import Submit from './components/Submit';

function App() {
  return (
    <Router>
      <div className="App">


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Personal" element={<PersonalInfo />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/Submit" element={<Submit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;