import React from 'react'
import BookCollection from './BookCollection'

function Shelf(props) {
  return (
    <div className='bookshelf'>
        <p className='bookshelf-title'>{props.header}</p>
        <div className='bookshelf-books'>
            <BookCollection 
              books={props.books}
              handleMove={(id, shelf) => props.handleMove(id, shelf)}>
            </BookCollection>
        </div>
    </div>
  )
}

export default Shelf