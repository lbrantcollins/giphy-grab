import React, { Component } from 'react';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			query: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.parseQuery(this.state.query);
		this.setState({
			query: ''
		})
	}

	handleChange = (event) => {
		this.setState( {
			query: event.currentTarget.value
		})
	}

	render() {


		return (
			
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="query"
					value={this.state.query}
					placeholder="simons cat"
					onChange={this.handleChange}
				/>
				<button> Search </button>
			</form>

		);

	}
}

export default SearchForm;