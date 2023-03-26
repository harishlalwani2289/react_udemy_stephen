import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random * 9999), title: title },
    ];
    setBooks(updateBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook}></BookCreate>
    </div>
  );
}

export default App;