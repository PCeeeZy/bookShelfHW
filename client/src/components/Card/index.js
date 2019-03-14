//dependencies
import React from 'react';
import './style.css';

const Card = ({
    icon, title, children
}) => {
    return (
        <div className='card mt-4'>
            <div className='card-header'>
                <h3>
                    <strong>
                        {/* WHAT IS THIS PART??? */}
                        <i className={`fa fa-${icon}`} aria-hidden='true' />
                        {title}
                    </strong>
                </h3>
            </div>
            <div className='card-body'>
                {children}
            </div>
        </div>
    )
}

export default Card;