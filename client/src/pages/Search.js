import React from 'react'
import Container from "../components/Container"
import Col from "../components/Col"
import Row from "../components/Row"
import SearchForm from '../components/SearchForm'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'


function Search() {
    return (
        <Container fluid="fluid">
           <SearchHeader />
            <SearchForm />
            <SearchResults />
        </Container>
    )
}

export default Search
