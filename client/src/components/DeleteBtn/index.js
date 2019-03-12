//dependencies
import React from 'react';
import './style.css';

const DeleteBtn = (props) => {
    return (
        <span className='delete-btn' {...props} role='button' tabIndex='0'>
            ✗
        </span>
    );
};

export default DeleteBtn;