import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
      //should do a google api call
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
      //should do a google api call
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
      //should do a google api call?
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      //is this right?
    return axios.post("/api/books", bookData);
  }
};
