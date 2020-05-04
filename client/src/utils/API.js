import axios from "axios";
// const url=`https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDgLbf0Z6CSoEaZGFO2VjvmFuTKOUQAZBw&maxResults=5`;
export default {
    search: function(book){
        console.log("book == "+book);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key=AIzaSyDgLbf0Z6CSoEaZGFO2VjvmFuTKOUQAZBw&maxResults=5");
    }
}