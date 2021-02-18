import React, { useState, useEffect } from 'react'


//CSS
import './styles/stylesPersons.css'

function Persons() {
  const [PersonList, setPersonList] = useState([]);
  var activepersons = JSON.parse(localStorage.getItem("activePersons"))


  useEffect(() => {
    setPersonList(activepersons)
  }, []) //useEffect





  return (
    <div className="persons-container">
      { PersonList === null ? <span>No Persons</span> :
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {PersonList.map((emp, index) => {
              return <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.lastName}</td>
              </tr>
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Persons;
