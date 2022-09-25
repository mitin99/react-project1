import React from 'react'
import BookItem from './BookItem'

function BookCollection(props) {
  return (
        <ol className='books-grid'>
            {
                props.books &&
                props.books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookItem
                                book={book}
                                handleAdd={(id, shelf) => {
                                    props.handleAdd(id, shelf)
                                }}
                                handleMove={(id, shelf) => {
                                    props.handleMove(id, shelf)
                            }}>
                            </BookItem>
                        </li>
                    )
                })
            }
        </ol>
  )
}

export default BookCollection