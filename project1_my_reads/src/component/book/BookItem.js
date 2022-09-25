import React from 'react'
import BookOption from './BookOption'

function BookItem(props) {
  return (
    <div className='book'>
        <div className='book-top'>
            <div className='book-cover'
                style={{width: 150, height: 200, backgroundImage:props.book.imageLinks ? `url(${props.book.imageLinks.thumbnail})` : ""}}
                >
            </div>
            <div className='book-shelf-changer'>
              <BookOption
                shelf={props.book.shelf ? props.book.shelf : "none"}
                handleAdd={(newShelf) => props.handleAdd(props.book, newShelf)}
                handleMove={(newShelf) => props.handleMove(props.book, newShelf)}>
                </BookOption>
            </div>
        </div>
        <div className='book-title'>{props.book.title}</div>
        {props.book.authors && Object.values(props.book.authors).map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  )
}

export default BookItem