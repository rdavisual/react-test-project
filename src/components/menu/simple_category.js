import React, { Component } from 'react';
import { Link } from 'react-router';

// import MainCategory from './main_category';

export default class SimpleCategory extends Component {

		constructor(props){
			super(props);
			console.log(this.props);
		}

		// componentWillMount() {
	  //       this.props.displayList();
	  //   }

	render() {
		return (

				<li><Link to={this.props.category.link}>{this.props.category.name}</Link></li>


		);
	}
}
