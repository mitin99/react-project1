import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import BookCollection from '../book/BookCollection'

function SearchPage(props) {
  return (
    <div>
        <div className='list-book-title'>
            <h1>Books Gallery</h1>
        </div>
        <div className='search-books'>
            <div className='search-books-bar'>
                <Link to="/" className="close-search">Close</Link>
                <SearchBar
                    filterBooks={(input) => props.filterBooks(input)}>
                </SearchBar>
            </div>
            <div className='search-books-results'>
                <BookCollection
                    books={props.books}
                    handleAdd={(book, newShelf) => props.handleAdd(book, newShelf)}
                    handleMove={(book, newShelf) => props.handleMove(book, newShelf)}>
                </BookCollection>
            </div>
        </div>
    </div>
  )
}

export default SearchPage