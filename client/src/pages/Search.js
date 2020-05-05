import React,{useState} from 'react'
import Container from "../components/Container"
// import Col from "../components/Col"
// import Row from "../components/Row"
import SearchForm from '../components/SearchForm'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
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
        </Container>
    )
}

export default Search
