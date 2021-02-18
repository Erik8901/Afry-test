import React, { useState, useEffect}  from 'react'

//CSS
import './App.css';

//Components
import CreateCompany from './components/CreateCompany'
import HandleCompany from './components/HandleCompany'
import CreatePerson from './components/CreatePerson'
import Persons from './components/Persons'


function App() {
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [showAllPersons, setShowAllPersons] = useState(false);
  
  function showCompanies() {
    setShowAllCompanies(!showAllCompanies)
  }

  function showPersons() {
    setShowAllPersons(!showAllPersons)
  }

  return (
    <div className="App">
        <div className="div-create-container">
            <CreatePerson />
            <CreateCompany />
        </div>

        <div className="show-container">
            <h3 onClick={() => showCompanies()}>Show Companies:</h3>
            { showAllCompanies ? <HandleCompany /> : null }

            <h3 className="show-persons" onClick={() => showPersons()}>Show Persons:</h3>
            { showAllPersons ? <Persons/> : null }
        </div>
    </div>
  );
}

export default App;
