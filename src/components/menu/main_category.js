import React, { Component } from 'react';

import SimpleCategory from './simple_category';

export default class MainCategory extends Component {

	constructor(props){
		super(props);
		// console.log(this.props.category);

	}


	displayList(){

				let cat =this.props.category;
				let array = [];
				console.log("hi");
				console.log(cat);

				for (var i = 0; i < cat.length; i++) {
					array.push(<SimpleCategory category={cat[i]} />);
				}
				return array;
			}


	render() {
		return (

			<div className="container">
        <div>
            <ul>
								{this.displayList()}
            </ul>
        </div>
			</div>
		);
	}
}
