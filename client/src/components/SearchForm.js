import React,{ useRef } from 'react'

function SearchForm(props) {
    const inputRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("book entered is "+inputRef.current.value);
        props.handleSubmitevent(inputRef.current.value)
    }
    return (
        <div className="border mt-3 p-2">
            <h5>Book Search </h5>
            <form className="form-group p-1 border" onSubmit={handleSubmit}>
                    <label>Book Name:</label><br />
                    <input
                     type="text"
                     ref={inputRef}
                     className="form-control" 
                     placeholder="Harry Potter"
                     ></input>
               <button 
               type="submit" 
               className="btn mt-2 btn-primary flow-right" 
               >Search</button>
            </form>
        </div>
    )
}

export default SearchForm
