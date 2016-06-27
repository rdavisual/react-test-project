import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import { getOneBook } from '../../actions/index';


class BookDetails extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount() {

        this.props.getOneBook(this.props.params.id);
        //console.log("props booksdetails:"+this.props.book);
    }

  render() {
    const { book } = this.props;
  //  console.log(book);

    if(!book){
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <div className="pull-xs-right">
          <p>The name is: {this.props.book.name}</p>
          <p>The context is: {this.props.book.context}</p>

          <Link to="/" className="btn btn-primary">Go to Index</Link>
        </div>

        {/*<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
      		<ol class="carousel-indicators">
      		    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      		    <li data-target="#myCarousel" data-slide-to="1"></li>
        		</ol>
        		<div class="carousel-inner" role="listbox">
      		    <div class="item active">
      		     	<img class="first-slide" src="../img/gray.jpg" alt="gray"></img>
      		     	<div class="container">
                  		<div class="carousel-caption">
                    			<img src="../img/libros.jpg" class="img-thumbnail" alt="libros" width="304" height="236"></img>
                  		</div>
               		</div>
      		    </div>

      		    <div class="item">
      		      	<img class="second-slide" src="./img/gray.jpg" alt="gray"></img>
      		      	<div class="container">
                  		<div class="carousel-caption">
                    			<img src="../img/image1.jpg" class="img-thumbnail" alt="im1" width="304" height="236"></img>
                  		</div>
               		</div>
      		    </div>
      		</div>
      		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      		    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      		    <span class="sr-only">Previous</span>
      		</a>
      		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      		    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      		    <span class="sr-only">Next</span>
        		</a>
      	</div>*/}
      </div>
    );

  }
}

function mapStateToProps(state) {
    return { book: state.reducerBooks.book };
}


export default connect(mapStateToProps, { getOneBook })(BookDetails);

/*<button
  className= "btn btn-danger pull-xs-right"
  onClick={this.onDeleteClick.bind(this)}>
  Delete post
</button>*/
