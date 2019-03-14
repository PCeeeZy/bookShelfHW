//dependencies
import React from 'react';
import './style.css';

//Exports Input, TextArea, and FormBtn components
export const Input = (props) => {
    return (
        <div className='form-group'>
            <input className='form-control'
            {...props} />
        </div>
    );
};

export const TextArea = (props) => {
    return (
        <div className='form-group'>
            <textarea className='form-control' rows='20' {...props} />
        </div>
    );
};

export const FormBtn = (props) => {
    return (
        <button {...props} 
            style={{ 
                float: 'right',
                marginBotton: 10
            }}
            className='btn btn-success'>
            {props.children}    
        </button>
    );
};

//djdkfdkjflajfldjda
const Form = ({
    query, handleInputChange, handleFormSubmit
}) => {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor='Query'>
                    <strong>
                        Book
                    </strong>
                </label>
                <input
                    className='form-control'
                    id='Title'
                    value={query}
                    type='text'
                    name='query'
                    onChange={handleInputChange}
                    placeholder='Enter a Book to Search Here'
                />
            </div>
            <div className='pull-right'>
                <button
                    className='btn btn-lg btn-danger float-right'
                    type='submit'
                    onClick={handleFormSubmit}
                >
                Search Book by Title
                </button>
            </div>
        </form>
        
    )
}

export default Form;