import React from 'react'

const descStyle={
    font_size:{
        fontSize:"smaller"
    }
}

function SearchResults({ searchResults }) {
    console.log(searchResults);
    return (
        <div className="border mt-2">
            <strong >Results </strong>
            <div className="border-bottom-0 p-2">
            {searchResults.map(book => (
                <div key={book.id} className="mb-1 border-bottom">
                    <div className="d-flex">
                        <div>
                        <p>Title: {book.volumeInfo.title}</p>
                        <p>Written By: {book.volumeInfo.authors}</p>
                        </div>
                        <div className="ml-auto">
                            <a href={book.volumeInfo.previewLink}>View</a>
                            <a>Save</a>
                        </div>
                    </div>
                    <div className="d-flex">
                         <img src={book.volumeInfo.imageLinks.thumbnail} className="mr-3" />
                         <p className="ml-auto" style={descStyle.font_size}>{book.volumeInfo.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default SearchResults
