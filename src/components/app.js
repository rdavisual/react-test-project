import React, { Component } from 'react';

import MainCategory from './menu/main_category';

export default class App extends Component {

	render() {

		const category = [{
								name: "List of Books",
								link: "/books/list"

							},{
								 name: "Add one Book",
								 link: "/books/add"
							 }];

		return (
			<div className="container">
				<div id="header" className="panel">
					<h2>LIBRARY</h2>
				</div>
				<div>
					<MainCategory category={category} />
					{this.props.children}
				</div>
			</div>
		);
	}
}
