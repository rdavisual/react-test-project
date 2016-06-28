import React, { Component } from 'react';

import MainCategory from './menu/main_category';
import "./app.scss";

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

				<div>
					<nav className="navbar navbar-default color-navbar">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href="#" ></a>
							</div>
						</div>
					</nav>
					<div id="sidebar-wrapper">
						<ul className="sidebar-nav">
							<li className="sidebar-brand">
								<a href="#">
									MENU
								</a>
							</li>
						</ul>
					</div>
					<div className="container move">
						<div id="header" className="panel">
							<h2>LIBRARY</h2>
						</div>
						<div>
							<MainCategory category={category} />
							{this.props.children}
						</div>
					</div>
				</div>

		);
	}
}
