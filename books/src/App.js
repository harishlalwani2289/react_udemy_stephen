import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with tile  :", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook}></BookCreate>
    </div>
  );
}

export default App;
