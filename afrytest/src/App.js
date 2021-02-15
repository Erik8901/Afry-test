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
      <header className="App-header">
          <CreatePerson />
          <CreateCompany />
          
          <h3 onClick={() => showCompanies()}>Handle Companies:</h3>
          { showAllCompanies ? <HandleCompany /> : null }
      </header>
    </div>
  );
}

export default App;
