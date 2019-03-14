//dependencies
import React from 'react';
import { Row, Col } from '../Grid';
import { ListItem } from '../List';
import './style.css';

const Book = ({
    title,
    authors,
    link,
    synopsis,
    image,
    Button
}) => {
    return (
        <ListItem>
            <Row classname='flex-wrap-reverse'>
                <Col size='md-8'>
                    <h3 className='font-italic'>
                        {title}
                    </h3>
                </Col>
                <Col size='md-4'>
                    <div className='btn-container'>
                        <a className='btn btn-light' href={link}>
                            Check it
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size='md-6'>
                    <p className='font-italic small'>
                        Written by {authors}
                    </p>
                </Col>
                <Col size='12 sm-4 md-2'>
                    <img className='img-thumbnail img fluid w-100' src={image} alt={title} />
                </Col>
                <Col size='12 sm-8 md-10'>
                    <p>
                        {synopsis}
                    </p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Book;