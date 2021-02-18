import React, { useState, useEffect } from 'react'


//styles
import './styles/StylesHandleCompany.css'


function HandleCompany() {
  const [showPersons, setShowPersons] = useState(false);
  const [showSelectedCompany, setShowSelectedCompany] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState({});

  var activePersons = JSON.parse(localStorage.getItem("activePersons"))
  var companyList = JSON.parse(localStorage.getItem("companyList"))

  useEffect(() => {

  }, []) //useEffect

  function handleCompany(company) {
    setSelectedCompany(company)
    localStorage.setItem('selectedCompany', JSON.stringify(company));
    setShowSelectedCompany(!showSelectedCompany)
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
      if (selCompany.companyName === comp.companyName) {
        localStorage.setItem("newentry", JSON.stringify(selCompany));
        comp.employees = selCompany.employees.slice(0)
        localStorage.setItem("companyList", JSON.stringify(companyList));
      }
    });

  }

  function removeEmployee(emp) {
    var selCompany = JSON.parse(localStorage.getItem("selectedCompany"))
    const newArr = selCompany.employees.filter(e => e.name !== emp.name)
    selCompany.employees = newArr

    companyList.forEach(comp => {
      if (selCompany.companyName === comp.companyName) {
        localStorage.setItem("newentry", JSON.stringify(selCompany));
        comp.employees = selCompany.employees.slice(0)
        localStorage.setItem("companyList", JSON.stringify(companyList));
      }
    });

    setSelectedCompany(selCompany)
  }

  return (
    <div className="handle-company-container">
      <div className="company-list-container">
        {companyList === null ? <span>no companies</span> :
          <ul>
            {companyList.map(function (company, index) {
              return <li className="companies-li" key={index} onClick={() => handleCompany(company)}>
                <span>{company.companyName}</span>
              </li>

            })}
          </ul>
        }
      </div>

      { showSelectedCompany ?
        <div className="company-info-container">
          <span className="company-name">{selectedCompany.companyName}</span>
          <span className="company-employees">Company Employees: </span>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              {selectedCompany.employees.map((emp, index) => {
                return <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.lastName}</td>
                  <td className="remove" onClick={() => removeEmployee(emp)}> X</td>
                </tr>
              })}
            </tbody>
            <button className="add-employee" onClick={() => addEmployees()}>Add Emplyees</button>
          </table>
        </div>
        : null}

      { showPersons ?
        <div className="person-list-container">
          <span className="close-persons-btn" onClick={() => addEmployees()}>X</span>
          <span>Persons</span>
          {activePersons === null ? <span>no persons</span> :

            <table>
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
              </thead>
              <tbody>
                {activePersons.map((person, index) => {
                  return <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.lastName}</td>
                    <button className="add-employee" onClick={() => addPersonToCompany(person)}>Add to Company</button>
                  </tr>
                })}
              </tbody>
            </table>
          }
        </div>
        : null}

    </div>
  );
}

export default HandleCompany;