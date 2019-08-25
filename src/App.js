import React, { Component } from 'react';
import SearchForm from './SearchForm';
import DisplayGifs from './DisplayGifs';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  findGifs = async (searchString) => {

    // set up the API query string to include the user's search string
    const apiQuery = "https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q="
      + searchString + "=&limit=25&offset=0&rating=G&lang=en"
 
    try {

      // query the API
      const gifsResponse = await fetch(apiQuery);

      // convert query response to JSON
      const gifsJson = await gifsResponse.json();

      // set state to hold the query results
      await this.setState({
        gifs: gifsJson.data
      })

    } catch(err) {
      console.error("Error on fetch/json:", err);
    }
  }

  render() {

    return (

      <div>

        {/* Display the search form to the user*/}
        <SearchForm findGifs={this.findGifs} />

        {/* Display GIFs returned from Giphy API query using user's search string*/}
        <DisplayGifs gifs={this.state.gifs} />

      </div>

    );
  }
} 


export default App;
