import React, { useState } from 'react';

const ControlForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handelControlForm = e =>{
         e.preventDefault();
         if(password.length < 6){
            setError('password Must be 6 Charecter');
           
         }
         else{
            setError('');
            console.log(email);
            console.log(password);
         }
        
    }
    const handelEmail = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handelPassword = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handelControlForm}>
                <input type="text" name="name" />
                <br />
                <input onChange={handelEmail} type="email" name="email" />
                <br />
                <input onChange={handelPassword} type="password" name="password" required id="" />
                <br />
                <button> Submit </button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default ControlForm;;