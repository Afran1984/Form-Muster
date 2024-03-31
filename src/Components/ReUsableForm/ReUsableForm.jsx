

// const ReUsableForm = ({formTitle, handelSubmit submitText='Submit'}) => {
//     const handelLocalSubmit = e =>{
//         e.preventDefault();
//         const ShowData = {
//             name: e.target.name.value,
//             email: e.target.email.value
//         }
//         handelSubmit(ShowData);
//     }

//     return (
//         <div>
//             <h1>{formTitle}</h1>
//         <form onSubmit={handelLocalSubmit}>
//                 <input type="text" name="name" />
//                 <br />
//                 <input type="email" name="email" />
//                 <br />
//                 <br />
//                 <input type="submit" value={submitText} />
//             </form>
//         </div>
//     );
// };

// export default ReUsableForm;

const ReUsableForm = ({formTitle, handelSubmit, submitText='Submit', children}) => { // Added a comma after handelSubmit
    const handelLocalSubmit = e =>{
        e.preventDefault();
        const ShowData = {
            name: e.target.name.value,
            email: e.target.email.value
        }
        handelSubmit(ShowData);
    }

    return (
        <div>
            <h1>{children}</h1>
            <form onSubmit={handelLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="submit" value={submitText} />
            </form>
        </div>
    );
};

export default ReUsableForm;
