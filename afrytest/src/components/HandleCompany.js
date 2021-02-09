import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//styles



function HandleCompany() {
  const dispatch = useDispatch()
  const userCompany = useSelector(state => state.companyName)
  const [comp, setComop] = useState()
  const [name, setName] = useState()
 
  console.log(userCompany)
   //.types[0].type.name)

   
  
  useEffect( () => {
   
   console.log(userCompany)
  
    localStorage.setItem('companyName', userCompany)
    var x = localStorage.getItem("companyName");
    setName(x)
},[]) //useEffect

function testObj() {
    console.log("teswqw")
    console.log(userCompany)
}

 
return (
    <div className="handle-company-container">
     EDIT COMPANY
     <span> + {userCompany}</span>
     <button onClick={() => testObj()}>push</button>
    </div>
  );
}

export default HandleCompany;