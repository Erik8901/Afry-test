import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
import './styles/stylesCreateCompany.css'

function CreateCompany() {
  const [company, setCompany] = useState({
      companyName: '',
      employees: [{name:"testPerson1", age: "33"}, {name:"testPerson2", age: "34"}]
    });
   
    useEffect( () => {
        
  },[]) //useEffect

  const handleInput = (event) => {
    setCompany((prevProps) => ({
              ...prevProps,
              [event.target.name]: event.target.value
      }));
};


  const handleSubmit = (event) => {
    event.preventDefault();
   
    var companyList = JSON.parse(localStorage.getItem("companyList"));
        if(companyList == null) companyList = [];
        localStorage.setItem("newCompany", JSON.stringify(company));
        companyList.push(company);
        localStorage.setItem("companyList", JSON.stringify(companyList));
};

return (
    <div className="create-company-container">
            <span>Create a Company</span>
            <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Company-Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={company.name}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                            <button type="submit">Create Company</button>
                    </div>
              </form>
      </div>
    
  );
}

export default CreateCompany;
