import React from 'react';

const Search = ({ searchTerm, onSearchChange}) => {

    return (
        <div className="filter">
        <input
            value={ searchTerm }
            onChange={(e) => onSearchChange(e.target.value) }
            id="search-bar"
            type="text"
            placeholder="Search Notes"
        />
        </div>
    );
}

export default Search;
