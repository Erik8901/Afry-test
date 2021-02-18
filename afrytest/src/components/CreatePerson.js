import React, { useState, useEffect}  from 'react'


//CSS
import './styles/stylesCreatePerson.css'

function CreatePerson() {
    
    const [person, setPerson] = useState({
        name: "",
        lastName: "",
    });
    
        useEffect( () => {
                var existingEntries = JSON.parse(localStorage.getItem("activePersons"))
              //  console.log(existingEntries)

        },[]) //useEffect

        const handleInput = (event) => {
              setPerson((prevProps) => ({
                        ...prevProps,
                        [event.target.name]: event.target.value
                }));
        };
    
        const handleSubmit = (event) => {
                event.preventDefault();
            
                var personList = JSON.parse(localStorage.getItem("activePersons"));
                if(personList == null) personList = [];
                localStorage.setItem("entry", JSON.stringify(person));
                personList.push(person);
                localStorage.setItem("activePersons", JSON.stringify(personList));
                
               document.getElementsByTagName("input")[0].value = ""
               document.getElementsByTagName("input")[1].value = ""
            
};
    
return (
    <div className="create-person-container">
                <span className="title">Create A Person</span>
                <form id="myForm" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>First Name :</label>
                            <input
                                type="text"
                                name="name"
                                value={person.name}
                                placeholder="First Name"
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                        <label>Last Name :</label>
                            <input
                                type="text"
                                name="lastName"
                                value={person.LastName}
                                placeholder="Last Name"
                                onChange={handleInput}
                            />
                    </div>
                   <div className="form-btn">
                        <button className="btn-submit" type="submit">Create Person</button>
                </div>
            </form>
    </div>
);
}

export default CreatePerson;
