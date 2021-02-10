import React, { useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux';

//CSS
//import './App.css';

function CreateUser() {
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        password: ""
      });
    
        useEffect( () => {
                var existingEntries = JSON.parse(localStorage.getItem("activeUsers"))
                console.log(existingEntries)
        },[]) //useEffect

        const handleInput = (event) => {
                setUser((prevProps) => ({
                        ...prevProps,
                        [event.target.name]: event.target.value
                }));
        };
    
        const handleSubmit = (event) => {
                event.preventDefault();
            
                var userList = JSON.parse(localStorage.getItem("activeUsers"));
                if(userList == null) userList = [];
                localStorage.setItem("entry", JSON.stringify(user));
                userList.push(user);
                localStorage.setItem("activeUsers", JSON.stringify(userList));

           
                // // setter
                // localStorage.setItem('myData', data);
                // // getter
                // localStorage.getItem('myData');
                // // remove
                // localStorage.removeItem('myData');
                // // remove all
                // localStorage.clear();
};
    
return (
    <div className="CreateUser">
            <div className="create-user-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                        <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={user.LastName}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                            />
                    </div>
                        <div className="form-control">
                            <button type="submit">Create User</button>
                        </div>
            </form>
        </div>
    </div>
  );
}

export default CreateUser;
