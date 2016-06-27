import React, { Component } from 'react';
import SimpleCategory from './simple_category';

import "./menu.scss";

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
			<div className="menu-container">
				<div>
					<ul>
						{this.displayList()}
					</ul>
				</div>
			</div>
		);
	}
}
