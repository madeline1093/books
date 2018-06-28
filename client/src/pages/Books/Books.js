import React, { Component } from "react";
import API from './../../utils/API';

class Books extends Component {
    state ={
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        //set books array to some books from Mongo
        API.getBooks()
            .then(res =>
                this.setState( {books: res.data})
            )
            .catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                <p>hi</p>
                <p>{this.state.books.map(book =>(<div>{book.title}</div>))}</p>
            </div>
        )
    }
}

export default Books;