import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
//import './App.css';

function CreateCompany() {
    const dispatch = useDispatch()
    const company = useSelector(state => state.companyName)
    const [userCompany1, setUserCompany1] = useState('');
    const [test, setTest] = useState("");
    
    //console.log(company)

    useEffect( () => {
        
       
        //var x = localStorage.getItem("companyName");
       
        //setTest(x)
       
        // dispatch({ 
        //     type: 'SET_COMPANY"',
        //     companyName: test
        // })
        
        
    },[test]) //useEffect

    function sendCompanyName(userCompany1) {
        
    
        //localStorage.setItem('companyName', userCompany1)
        
         dispatch({ 
            type: 'SET_COMPANY',
            companyName: userCompany1
        })
    }
  return (
    <div className="CreateCompany">
      <header className="create-company-container">
            CreateCompany
            <input type="text" onChange={e => setUserCompany1(e.target.value)}></input>
            <button onClick={() => sendCompanyName(userCompany1)}>Push</button>
            <span>{test}</span>
      </header>
    </div>
  );
}

export default CreateCompany;
