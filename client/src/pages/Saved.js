import React, { useEffect, useState } from 'react'
import API from "../utils/API"
import Container from "../components/Container"
import RenderSavedBooks from '../components/RenderSavedBooks';

function Saved() {
    const [results, setResults] = useState([]);

    function loadSavedBooks() {
        API.getAllSavedBooks()
            .then(res => {
                console.log(res.data);
                setResults(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        console.log("Entered useEffect Hook")
        loadSavedBooks();

    }, []);

    return (
        <Container fluid="fluid">
            <RenderSavedBooks savedBooks={results} loadSavedBooks={loadSavedBooks}/>
        </Container>
    )
}

export default Saved
