import React, { Component } from 'react';
import SimpleCategory from './simple_category';

import "../app.scss";

export default class MainCategory extends Component {

	constructor(props){
		super(props);
	}


	displayList(){
		let cat =this.props.category;
		let array = [];
		for (var i = 0; i < cat.length; i++) {
			array.push(<SimpleCategory key={cat[i].name} category={cat[i]} />);
		}
		return array;
	}


	render() {
		return (
			<div className="container ">
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						{this.displayList()}
					</ul>
				</div>
			</div>
		);
	}
}
