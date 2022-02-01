import React from 'react'
import './SearchBox.styles.css'

export default function SearchBox({ placeholder, handleChange }) {
    return (
        <input
            className="searchBar"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}