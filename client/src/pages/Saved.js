//dependencies
import React, { Component } from 'react';

import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Book from '../components/Book';

import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';

import API from '../services/API';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                console.log(res)
                this.setState({
                    books: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleDelete = (id) => {
        API.deleteBook(id)
            .then(res => {
                this.getSavedBooks()
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1 className='text-center'>React Book Search with Google API</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <Card title='Saved Books'>
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                            key={book._id}
                                            title={book.title}
                                            link={book.link}
                                            authors={book.authors.join(', ')}
                                            synopsis={book.synopsis}
                                            image={book.image}
                                            Button={() => (
                                                <button
                                                    onClick={() => this.handleDelete(book._id)}
                                                    className='btn btn-danger ml-2'
                                                >
                                                Delete book
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className='text-center'>No books have been saved.</h2>
                            )}
                        </Card>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Saved;