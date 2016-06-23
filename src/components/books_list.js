import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { listBooks } from '../actions/index';

class BooksList extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
        this.props.listBooks();
    }

  /*  static contextTypes = {
    router: PropTypes.object
  }

  /onDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(() => {
      //blog post has been deleted, navagate the user to index
      //we navegate by this.context.router.push with the path
      this.context.router.push('/');
    });
  }*/


  renderBooks(){
    return this.props.books.map((book) => {
            return (
                <li key={book.id} className="list-group-item">
                  <Link to={"/books/"+book.id}>
                    <strong>{book.name}</strong>
                  </Link>
                </li>
            );
        });
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">
            Go to index
          </Link>
        </div>
        <h3>Books </h3>
        <ul className="list-group">
         {this.renderBooks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { books: state.reducerBooks.all };
}


export default connect(mapStateToProps, { listBooks })(BooksList);
