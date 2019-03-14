//dependencies
import React from 'react';

import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const NoMatch = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12'>
                    <Jumbotron>
                        <h1 className='text-center'>
                            I don't think you are supposed to be here.
                        </h1>
                        <h2 className='text-center'>
                            Go back from whence you came.
                        </h2>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;