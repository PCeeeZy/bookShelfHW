//dependencies
import React from 'react';
import './style.css';

const Jumbotron = ({ children }) => {
    return (
        <div className='jumbotron'>
            {children}
        </div>
    );
}
export default Jumbotron;