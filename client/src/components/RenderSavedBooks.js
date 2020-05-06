import React from 'react'
import SearchedBook from "../components/SearchedBook";

function RenderSavedBooks({ savedBooks, loadSavedBooks }) {
    console.log(savedBooks);
    let length = savedBooks.length;
    return (
        // { savedBooks.length}
        <div className="border mt-2">
            <strong >Saved Books </strong>
            <div className="border-bottom-0 p-2">
                {savedBooks.map(book => (
                    <SearchedBook key={book._id}
                        title={book.title}
                        author={book.authors}
                        link={book.link}
                        image={book.image}
                        description={book.description}
                        buttonTitle="Delete"
                        id={book._id}
                        loadSavedBooks={loadSavedBooks}
                    />
                ))}
            </div>
            {length===0 && 
            <div >
               <strong> No Saved Books to display</strong>
            </div> }
        </div>
    );
}

export default RenderSavedBooks
