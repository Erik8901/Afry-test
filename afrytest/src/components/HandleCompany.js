import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//styles
import './styles/StylesHandleCompany.css'


function HandleCompany() {
  const dispatch = useDispatch()
  const [companyEmployees, setCompanyEmployees] = useState([]);
  var activePersons = JSON.parse(localStorage.getItem("activePersons"))
  console.log(activePersons)

  var companyList = JSON.parse(localStorage.getItem("companyList"))
    console.log(companyList)
    

 
  useEffect( () => {
    
  
},[]) //useEffect

function handlePerson(person) {
   // console.log(person)
}

function handleCompany(company) {
   console.log(company.employees)
   // setCompanyEmployees(company.employees)
    // console.log(companyEmployees)

    // for(let i=0; i < company.employees.length ; i++) {
    //     console.log(company.employees[i])
    // }
}


function addEmployee() {
    console.log("test")
    
    console.log(activePersons)
}



 
return (
    <div className="handle-company-container">
     <span>EDIT COMPANY</span>
        <div className="person-list-container">
            { activePersons === null ? <span>no persons</span> : 
                <ul>
                    { activePersons.map((person, index) =>{
                        return <li key={index} onClick={() => handlePerson(person)}>
                                  <span>Name: {person.name}</span>
                                  <span>Lastname: {person.lastName}</span>
                                </li>
                    })}
                </ul>
            }
           </div>
           <div className="company-list-container">
            { companyList === null ? <span>no companies</span> : 
                <ul>
                    { companyList.map(function (company, index) {
                        return (<div className="li-container" key={index}>
                                <li  onClick={() => handleCompany(company)}>
                                  <span>Company-Name:{company.companyName}</span>
                                    {/* <ul>
                                        { companyEmployees.map((emp,idx) => 
                                        <li key={idx}>{emp.name}</li>)}
                                    </ul> */}
                               
                                    
                               </li> 
                               <button onClick={() => addEmployee()}>Add Emplyee</button>
                               </div>)
                               
                    })}
                </ul>
            }
           </div>
    </div>
  );
}

export default HandleCompany;