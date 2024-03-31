import React from 'react';
import useInputState from '../../hooks/inputUseStat';

const HookForm = () => {
    // const[name, handelNameChange] = useInputState('rajani');
    const emailState = useInputState('AbdurrazzakJim@gmail.com');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('form Data', emailState.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <button> Submit </button>
            </form>
        </div>
    );
};

export default HookForm;