import React, { Component } from 'react';

class SearchForm extends Component {
	constructor() {
		super();

		// hold the search string in state so that only
		// the search string needs to re-render, not the full page
		this.state = {
			searchString: ''
		}
	}

	// actions taken upon form submittion
	handleSubmit = (event) => {
		// prevent default screen refresh upon form submission
		event.preventDefault();
		// Send user's search string to JS app to to "findGifs" via Giphy API
		this.props.findGifs(this.state.searchString);
		// reset state to an empty search string
		this.setState({
			searchString: ''
		})
	}

	handleChange = (event) => {
		// set state with each keystroke in the search bar so that only
		// the search string needs to re-render, not the full page
		this.setState( {
			searchString: event.currentTarget.value
		})
	}

	render() {

		return (

			<div>

				<h3> Enter a search term to find some Giphy GIFs</h3>

				<form onSubmit={this.handleSubmit}>

					<div className="ui icon input">

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
		)
	}
}

export default SearchForm;