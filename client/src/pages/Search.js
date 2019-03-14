//dependencies
import React, { Component } from 'react';

import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Form from '../components/Form';
import Book from '../components/Book';

import API from '../services/API';

import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';

class Search extends Component {
    state = {
        books: [],
        query: '',
        message: 'Search something to see some book results'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getGoogleBooksQuery(this.state.query)
            .then(res => {
                this.setState({
                    books: res.data.items
                })
            })
            .catch(() => {
                this.setState({
                    books: [],
                    message: 'No books found with that title!  Try Again.'
                })
            });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleSaveBook = (id) => {
        const book = this.state.books.find(
            book => book.id===id
        );

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            synopsis: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
        .then(() => this.getBooks());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1 className='text-center'>
                                <strong>
                                    Search for books with Google and React!
                                </strong>
                            </h1>
                            <h2 className='text-center'>
                                Search for Books and Save the Interesting Ones
                            </h2>
                        </Jumbotron>
                    </Col>
                    <Col size='md-12'>
                        <Card title='Book Search'>
                            <Form 
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                query={this.state.query}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <Card title='Search Results'>
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book 
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            link={book.volumeInfo.infoLink}
                                            authors={book.volumeInfo.authors.join(', ')}
                                            synopsis={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            Button={() => (
                                                <button onClick={() => this.handleSaveBook(book.id)} className='btn btn-primary ml-2'
                                            >
                                            Save this Book
                                            </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className='text-center'>
                                    {this.state.message}
                                </h2>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Search