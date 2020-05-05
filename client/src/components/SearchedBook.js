import React from 'react'

function SearchedBook({ title,author, previewLink, image, description, descStyle }) {
    return (
        <div className="mb-1 border-bottom">
            <div className="d-flex">
                <div>
                    <p>Title: {title}</p>
                    <p>Written By: {author}</p>
                </div>
                <div className="ml-auto">
                    <a href={previewLink}>View</a>
                    <a>Save</a>
                </div>
            </div>
            <div className="d-flex">
                <img src={image} className="mr-3" />
                <p className="ml-auto" style={descStyle}>{description}</p>
            </div>
        </div>
    )
}

export default SearchedBook
