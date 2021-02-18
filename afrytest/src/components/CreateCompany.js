import React, { useState, useEffect}  from 'react'


//CSS
import './styles/stylesCreateCompany.css'

function CreateCompany() {
  const [company, setCompany] = useState({
      companyName: '',
      employees: []
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

       
        
        document.getElementsByTagName("input")[2].value = ""
};

return (
    <div className="create-company-container">
            <span className="title">Create a Company</span>
            <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Company-Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={company.name}
                                placeholder="Company Name"
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-btn">
                        <button className="btn-submit" type="submit">Create Company</button>
                    </div>
              </form>
      </div>
    
  );
}

export default CreateCompany;
