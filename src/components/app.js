import React, { Component } from 'react';


export default class App extends Component {

	render() {
		return (
			<div className="container">
        <div id="header" className="panel">
            <h2>LIBRARY</h2>
				</div>
				<div>
            {this.props.children}
        </div>
			</div>
		);
	}
}
