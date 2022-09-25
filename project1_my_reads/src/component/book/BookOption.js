import React from 'react'

function BookOption(props) {
    const handleOption = (e) => {
         props.shelf === "none" ? props.handleAdd(e.target.value) : props.handleMove(e.target.value)
    }
  return (
    <div>
        <select defaultValue={""} onChange={handleOption}>
            <option key="move" value="" hidden>
            </option>
            <option 
              key="currentlyReading"
              value="currentlyReading"
              disabled={props.shelf === "currentlyReading"}
            >
              Currently Reading
            </option>
            <option
              key="wantToRead"
              value="wantToRead"
              disabled={props.shelf === "wantToRead"}
            >
              Want to read
            </option>
            <option
              key="read"
              value="read"
              disabled={props.shelf === "read"}
            >
              Read
            </option> 
            <option
              key="none"
              value="none"
              disabled={props.shelf === "none"}
            >
              None
            </option>
        </select>
    </div>
  )
}

export default BookOption