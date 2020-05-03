import React,{ useState, useEffect } from 'react'
import API from "../utils/API"

function SearchForm() {
    const [book, setBook ] = useState("");
    const [results, setResults ] = useState([]);

    const handleInputChange = (e) => {
        setBook(e.target.value);
        console.log(book);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("book entered is "+book);
        API.search(book)
        .then(res => {
            console.log(res.data.items)
        })
        .catch(err => console.log(err));
    }


    return (
        <div className="border mt-3 p-2">
            <h5>Book Search </h5>
            <form className="form-group p-1" onSubmit={handleSubmit}>
               
                    <label>Book Name:</label><br />
                    <input
                     type="text"
                     value={book}
                     className="form-control" 
                     placeholder="Harry Potter"
                     onChange={handleInputChange}
                     ></input>
               <button 
               type="submit" 
               className="btn mt-2 btn-primary" 
               >Search</button>
            </form>
        </div>
    )
}

export default SearchForm
