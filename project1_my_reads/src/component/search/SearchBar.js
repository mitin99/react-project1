import React, { useState } from 'react'

function SearchBar(props) {
    const [input, setIntput] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        const input = e.target.value
        setIntput(input)
        props.filterBooks(input)
    }
  return (
        <input 
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="Search for books">
        </input>
  )
}

export default SearchBar