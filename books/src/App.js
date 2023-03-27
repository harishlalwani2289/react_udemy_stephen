import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook}></BookCreate>
      <BookList
        books={books}
        onDelete={deleteBookByID}
        onEdit={editBookById}
      ></BookList>
    </div>
  );
}

export default App;
