import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksNew extends Component {

    randomBook() {
        let newBook = {'name' : Math.floor(Math.random() * 101), 'context': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"};
        createBook(newBook);
    }

    render() {

        return (
          <div>
            <button className="btn btn-danger"  onClick={this.randomBook.bind(this)}>Add One</button>
            <Link to="/" className="btn btn-primary">
              Go to Index
            </Link>
          </div>
        );
    }
}


export default connect(null, { createBook })(BooksNew);
