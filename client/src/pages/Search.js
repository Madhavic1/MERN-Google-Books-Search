import React,{useState} from 'react'
import Container from "../components/Container"
import SearchForm from '../components/SearchForm'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/RenderSearchedBooks'
import API from "../utils/API"


function Search() {
    const [results,setResults] = useState([]);
    const handleSubmit = (bookval) => {
        API.search(bookval)
        .then(res => {
            console.log(res.data.items)
            setResults(res.data.items);
        })
        .catch(err => console.log(err));
    }    
    return (
        <Container fluid="fluid">
            <SearchHeader />
            <SearchForm  handleSubmitevent={handleSubmit}/>
            <SearchResults searchResults={results}/>
            {!results && 
            <div className="container">
                <h2>No Results Found!!</h2>    
            </div>}
        </Container>
    )
}

export default Search
