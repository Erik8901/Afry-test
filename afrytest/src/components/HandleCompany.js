import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//styles
import './styles/StylesHandleCompany.css'


function HandleCompany() {
  const dispatch = useDispatch()
  const [companyEmployees, setCompanyEmployees] = useState([]);
  const [showPersons, setShowPersons] = useState(false);
  const [showSelectedCompany, setShowSelectedCompany] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState({});
  var activePersons = JSON.parse(localStorage.getItem("activePersons"))
 // console.log(activePersons)

  var companyList = JSON.parse(localStorage.getItem("companyList"))
   // console.log(companyList)
    
  useEffect( () => {
    
  
},[]) //useEffect

function handlePerson(person) {
   // console.log(person)
}

function handleCompany(company) {
  setSelectedCompany(company)
  localStorage.setItem('selectedCompany',JSON.stringify(company));
  setShowSelectedCompany(!showSelectedCompany)
  console.log(company)
}


function addEmployees() {
   setShowPersons(!showPersons)
}

function addPersonToCompany(person) {
  var selectedCompanyEmpList = selectedCompany.employees
  selectedCompanyEmpList.push(person)
 
  var selCompany = JSON.parse(localStorage.getItem("selectedCompany"))
  selCompany.employees = selectedCompanyEmpList
   
  var companyList = JSON.parse(localStorage.getItem("companyList"))
    
  companyList.forEach(comp => {
        if(selCompany.companyName === comp.companyName) {
            localStorage.setItem("newentry", JSON.stringify(selCompany));
            comp.employees = selCompany.employees.slice(0)
            localStorage.setItem("companyList", JSON.stringify(companyList));
        }
    });
  setCompanyEmployees(selCompany.employees)
}

return (
    <div className="handle-company-container">
     <span>EDIT COMPANY</span>
        <div className="company-list-container">
            { companyList === null ? <span>no companies</span> : 
                <ul>
                    { companyList.map(function (company, index) {
                        return (<div className="li-container" key={index}>
                                <li onClick={() => handleCompany(company)}>
                                  <span>Company-Name: {company.companyName}</span>
                                    { showSelectedCompany ?
                                    <div className="selected-company-info" >
                                      <ul>
                                        { companyEmployees.map((emp,idx) => 
                                        <li key={idx}>{emp.name}</li>)}
                                      </ul>
                                      <button onClick={() => addEmployees()}>Add Emplyees</button>
                                    </div>
                                    : null }
                                    
                               </li> 
                               
                               </div>)
                      })}
                </ul>
            }
        </div>
            { showPersons ?
        <div className="person-list-container">
          
            { activePersons === null ? <span>no persons</span> : 
                <ul>
                    { activePersons.map((person, index) =>{
                        return <li key={index} onClick={() => handlePerson(person)}>
                                  <span>Name: {person.name}</span>
                                  <span>Lastname: {person.lastName}</span>
                                  <button onClick={() => addPersonToCompany(person)}>Add to Company</button>
                                </li>
                    })}
                </ul>
            }
           </div>  
          : null } 

    </div>
  );
}

export default HandleCompany;