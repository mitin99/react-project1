import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./api/BooksAPI";
import MainPage from './component/book/MainPage';
import SearchPage from './component/search/SearchPage';

function App() {
  const [userBook, setUserBook] = useState([])
  const [collection, setCollection] = useState([])
  const [shelf, setShelf] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  })

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      let shelfType = {
        currentlyReading: [],
        wantToRead: [],
        read: []
      }
      for (let book of books) {
        shelfType[book.shelf].push(book.id)
      }
      setShelf(shelfType)
      setUserBook(books)
    })
  }

  const handleAdd = (book, shelf) => {
    book.shelf = shelf
    setUserBook((userBook) => [...userBook, book])
    BooksAPI.update(book, shelf).then((data) => {
      setShelf(data)
    })
  }
  const handleMove = (book, newShelf) => {
    if(book.shelf !== newShelf) {
      BooksAPI.update(book, newShelf).then((data) => {
        book.shelf = newShelf
        setUserBook((userBook) => [
          ...userBook.filter((newBook) => newBook.id !== book.id), 
          book,
        ])
        setShelf(data)
      })
    }
  }
  
  const filterCollection = (i) => {
    if(i) {
      BooksAPI.search(i).then((books) => {
        if(!books.error) {
          for(const book of books) {
            const foundBook = userBook.find(userBook => userBook.id === book.id)
            if(foundBook) {
              book.shelf = foundBook.shelf
            }
        }
        setCollection(books)
      }
    })
    }
    setCollection([])
  }
  
  return (
    <div className="App">
      <Routes>
        <Route
          path='/search'
          element={
            <SearchPage
              books={collection}
              filterBooks={(i) => filterCollection(i)}
              handleAdd={(id, shelf) => handleAdd(id, shelf)}
              handleMove={(book, newShelf) => handleMove(book, newShelf)}></SearchPage>
          }>
          </Route>
        <Route
          path='/'
          exact
          element={
            <MainPage
              books={userBook}
              handleMove={(book, newShelf) => handleMove(book, newShelf)}></MainPage>
          }>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
