import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
import './styles/stylesCreateCompany.css'

import handleCompany from './HandleCompany';

function Companies() {
    const dispatch = useDispatch()
    const [selectedCompany, setSelectedCompany] = useState({});
    var companyList = JSON.parse(localStorage.getItem("companyList"))
   // console.log(companyList)

   
    useEffect( () => {
        //console.log(companyList)
  },[]) //useEffect

    function selectCompany(company) {
        setSelectedCompany(company)

        dispatch({ 
            type: 'SET_SELECTED-COMPANY',
            selectedCompany: selectedCompany
        })
    
    }
 


  

return (
    <div className="companies-container">
           ALLLLLLLL COMPANIES
           { companyList === null ? <span>no companies</span> : 
                <ul>
                    { companyList.map((company, index) => {
                        return <li key={index} onClick={() => selectCompany(company)}>{company.companyName}</li>
                    })}
                </ul>
            }     
            <span>{selectedCompany.companyName}</span>  
           
      </div>
    
  );
}

export default Companies;
