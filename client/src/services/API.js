import axios from 'axios';

export default {
  // Gets all books with title
  getGoogleBooksQuery: function(query) {
    const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
      //should do a google api call
    return axios.get(`${BASEURL}${query}`);
  },
  // Gets the saved books in our DB
  getSavedBooks: function() {
    return axios.get('/api/books/saved');
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
