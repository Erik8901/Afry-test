import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
import './App.css';

//Components
import CreateCompany from './components/CreateCompany'
import HandleCompany from './components/HandleCompany'
import CreatePerson from './components/CreatePerson'
import Companies from './components/Companies'

function App() {
  //const companyName = useSelector(state => state.companyName)
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  function showCompanies() {
    setShowAllCompanies(!showAllCompanies)
  }
  return (
    <div className="App">
      <div className="div-create-container">
          <CreatePerson />
          <CreateCompany />
      </div>
          <h3 onClick={() => showCompanies()}>Show Companies:</h3>
          { showAllCompanies ? <HandleCompany /> : null }
      
    </div>
  );
}

export default App;
