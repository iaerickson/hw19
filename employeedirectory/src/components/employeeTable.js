import React from "react";

class EmployeeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
		};
	}

	componentDidMount() {
		fetch("https://randomuser.me/api/?results=200&nat=us")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.items,
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
		console.log(this.state);
		console.log(this.state.items);
	}

	render() {
		return (
			<div className='table'>
				<h1>EmployeeTable</h1>
			</div>
		);
	}
}
export default EmployeeTable;
