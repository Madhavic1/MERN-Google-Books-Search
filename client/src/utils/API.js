import axios from "axios";
export default {
    search: function(book){
        console.log("book == "+book);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key=AIzaSyDgLbf0Z6CSoEaZGFO2VjvmFuTKOUQAZBw&maxResults=10");
    },
    // Gets the book with the given id
    getBook: function(title) {
        console.log("title passed "+ title)
        return axios.get("/api/books/" + title);
    },
    saveBook: function(bookData){
        console.log(bookData)
        return axios.post("/api/books",bookData);
    },
    getAllSavedBooks: function(){
        return axios.get("api/books");
    },
    deleteBook: function(id){
        console.log(id)
        return axios.delete("/api/books/"+id);
    }
}