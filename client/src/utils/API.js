import axios from "axios";
const url=`https://www.googleapis.com/books/v1/volumes?q=harry potter&key=AIzaSyDgLbf0Z6CSoEaZGFO2VjvmFuTKOUQAZBw&maxResults=8`;
export default {
    search: function(book){
        console.log(url);
        return axios.get(url);
    }
}