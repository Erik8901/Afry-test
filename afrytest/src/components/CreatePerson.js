import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
import './styles/stylesCreatePerson.css'

function CreatePerson() {
    const dispatch = useDispatch()
    const [person, setPerson] = useState({
        name: "",
        lastName: "",
        company: ""
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


                var activePersons = JSON.parse(localStorage.getItem("activePersons"))
                console.log(activePersons)

                //  dispatch({ 
                //     type: 'SET_COMPANY"',
                //     allPersons: activeUsers
                // })

           
                // // setter
                // localStorage.setItem('myData', data);
                // // getter
                // localStorage.getItem('myData');
                // // remove
                // localStorage.removeItem('myData');
                // // remove all
                 //localStorage.clear();
};
    
return (
    <div className="createPerson">
            <div className="create-person-container">
                <span>Create A Person</span>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={person.name}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                        <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={person.LastName}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                        <label>Company</label>
                            <input
                                type="text"
                                name="company"
                                value={person.company}
                                onChange={handleInput}
                            />
                    </div>
                        <div className="form-control">
                            <button type="submit">Create Person</button>
                        </div>
            </form>
        </div>
    </div>
  );
}

export default CreatePerson;
