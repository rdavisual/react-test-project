import React from 'react';
import ReactDOM from 'react-dom';

import { Route, IndexRoute, browserHistory } from 'react-router';
import { Link } from 'react-router';


import App from './components/app';
import BooksList from './components/books/books_list';
import BooksNew from './components/books/book_new';
import BookDetails from './components/books/book_details';


const Greeting = () => { return(<div></div>);};

export default (
    <Route path="/" components={App} >
        {/*<IndexRoute component={Greeting} />*/}
        <Route path="books" >
          <div>
            <Route path="add" component={BooksNew} />
            <Route path="list" component={BooksList} />
            <Route path=":id" component={BookDetails} />
          </div>
        </Route>
    </Route>
);
