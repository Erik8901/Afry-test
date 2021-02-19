import React, { useState, useEffect } from 'react'


//CSS
import './styles/stylesCreatePerson.css'

function CreatePerson() {

    const [person, setPerson] = useState({
        name: "",
        lastName: "",
    });

    useEffect(() => {


    }, []) //useEffect

    const handleInput = (event) => {
        setPerson((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();

        var personList = JSON.parse(localStorage.getItem("activePersons"));
        if (personList == null) personList = [];
        localStorage.setItem("entry", JSON.stringify(person));
        personList.push(person);
        localStorage.setItem("activePersons", JSON.stringify(personList));

        let inputs = document.getElementsByTagName("input")
        inputs[0].value = ""
        inputs[1].value = ""

        
        // for (let i = 0; i < inputs.length; i++) {
        //     inputs[i].value = ""
        // }
    };

    return (
        <div className="create-person-container">
            <span className="title">Create A Person</span>
            <form id="test" onSubmit={handleSubmit}>
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
                        value={person.lastName}
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
