import React from 'react'
import SearchedBook from './SearchedBook';

function SearchResults({ searchResults }) {
    console.log(searchResults);
    return (
        <div className="border mt-2">
            <strong >Results </strong>
            <div className="border-bottom-0 p-2">
                {searchResults.map(book => (
                    <SearchedBook key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        link={book.volumeInfo.previewLink}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description} 
                        buttonTitle="Save"
                        />
                ))}
            </div>
        </div>
    )
}

export default SearchResults
