import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Covid from './components/Covid';
import Insights from './components/Insights';
import Submit from './components/Submit';
import Applications from './components/Applications';

function App() {

  const[data, setData] = useState({
      token: "4ab71abb-226b-4cf2-865a-1c9738efed50",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",

      skills: [],

      work_preference: "",
      had_covid: false,
      had_covid_at: "2000-01-01",
      vaccinated: false,
      vaccinated_at: "2000-01-01",

      will_organize_devtalk: false,
      devtalk_topic: "",
      something_special: ""
  });

  return (
    <Router basename="/Reberry-app">
      <div className="App">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Personal" element={<PersonalInfo data={data} setData={setData} />} />
          <Route path="/Skills" element={<Skills data={data} setData={setData} />} />
          <Route path="/Covid" element={<Covid data={data} setData={setData} />} />
          <Route path="/Insights" element={<Insights data={data} setData={setData} />} />
          <Route path="/Submit" element={<Submit data={data} setData={setData} />} />
          <Route path="/Applications" element={<Applications />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;