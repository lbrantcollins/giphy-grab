import React, { Component } from 'react';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			searchString: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.findGifs(this.state.searchString);
		this.setState({
			searchString: ''
		})
	}

	handleChange = (event) => {
		this.setState( {
			searchString: event.currentTarget.value
		})
	}

	render() {

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div class="ui icon input">
					<input
						type="text"
						name="searchString"
						value={this.state.searchString}
						placeholder="simons cat"
						onChange={this.handleChange}
					/>
					<i class="search icon"></i>
					</div>
				</form>
				<br/>
			</div>
		);

	}
}

export default SearchForm;