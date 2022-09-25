import React from 'react'
import Shelf from './Shelf'
import { Link } from "react-router-dom"

function MainPage(props) {
  return (
    <div className='list-books'>
        <div className='list-books-title'>
            <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
            <Shelf
            header="Currently Reading"
            books={props.books.filter((book) => 
                book.shelf === "currentlyReading"
            )}
            handleMove={(id, shelf) => props.handleMove(id, shelf)}></Shelf>
        </div>
        <div className='list-books-content'>
            <Shelf
            header="Want to read"
            books={props.books.filter((book) => 
                book.shelf === "wantToRead"
            )}
            handleMove={(id, shelf) => props.handleMove(id, shelf)}></Shelf>
        </div>
        <div className='list-books-content'>
            <Shelf
            header="Read"
            books={props.books.filter((book) => 
                book.shelf === "read"
            )}
            handleMove={(id, shelf) => props.handleMove(id, shelf)}></Shelf>
        </div>
        <div className='open-search'>
            <Link to="/search">
                <button></button>
            </Link>
        </div>
    </div>
  )
}

export default MainPage