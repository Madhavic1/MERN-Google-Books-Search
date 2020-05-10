import React, {useEffect,useState} from 'react'
import API from "../utils/API"

const descStyle = {
    font_size: {
        fontSize: "smaller"
    }
}

function SearchedBook({ title,author, link, image, description, buttonTitle, id, loadSavedBooks }) {

    const [ bookStatus, setBookStatus ] = useState("");

    useEffect(() => {
        API.getBook(title)
        .then(res => {
            if(res.data.length && buttonTitle=== "Save"){
                setBookStatus("Saved");
            }
           
        })
        .catch(err => console.log(err));
    },[]);

    const handle_Save_Delete = () => {
        if(buttonTitle === "Save"){
            setBookStatus("Saved");
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
                    <button disabled={bookStatus==="Saved"} onClick={handle_Save_Delete}>{bookStatus==="Saved" ? bookStatus : buttonTitle}</button>
                    {/* <button disabled={buttonTitle==="Save" || bookStatus==="Save"} onClick={handle_Save_Delete}>{bookStatus === "Save" || bookStatus==="Saved" ? bookStatus : buttonTitle}</button> */}
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
