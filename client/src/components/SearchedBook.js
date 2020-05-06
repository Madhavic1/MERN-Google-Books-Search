import React from 'react'
import API from "../utils/API"

const descStyle = {
    font_size: {
        fontSize: "smaller"
    }
}

function SearchedBook({ title,author, link, image, description, buttonTitle, id, loadSavedBooks }) {

    const handle_Save_Delete = () => {
        // console.log(`title = ${title},author= ${author}, previewLink= ${link}, image= ${image}, description= ${description}`);
        console.log("buttonTitle --- "+buttonTitle);
        if(buttonTitle === "Save"){
            API.saveBook({
                title,
                authors:author,
                description,
                image,
                link
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
        }else {
            API.deleteBook(id)
                .then(res => loadSavedBooks())
                .catch(err => console.log(err));
        }
     
    }
    return (
        <div className="mb-1 border-bottom">
            <div className="d-flex">
                <div>
                    <p>Title: {title}</p>
                    <p>Written By: {author}</p>
                </div>
                <div className="ml-auto">
                    <button onClick={() => window.location.href=link}>View</button>
                    <button onClick={handle_Save_Delete}>{buttonTitle}</button>
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
