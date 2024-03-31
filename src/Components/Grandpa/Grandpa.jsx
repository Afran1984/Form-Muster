import React from 'react';
import Dad from '../Dad/Dad';
import Mon from '../Mom/Mon';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
           <section className='flex'>
           <Dad></Dad>
            <Mon></Mon>
           </section>
        </div>
    );
};

export default Grandpa;