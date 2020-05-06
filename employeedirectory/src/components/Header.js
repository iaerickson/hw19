import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1>Employee Directory</h1>
				<p>Use the search box or sort buttons to find your Employee!</p>
			</div>
		);
	}
}
