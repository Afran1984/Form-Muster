import React, { useEffect, useRef } from 'react';

const ReactForm = () => {
    const nameRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handelSubmite = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmite}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input type="email" defaultValue={'afranrazzak1984@gmail.com'} name="email" />
                <br />
                <button> Submit </button>
            </form>
        </div>
    );
};

export default ReactForm;