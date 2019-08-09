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
    // giphy API Key: SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7
    const apiQuery = "https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q="
      + searchString + "=&limit=25&offset=0&rating=G&lang=en"
 
    try {
      const gifsResponse = await fetch(apiQuery);
      const gifsJson = await gifsResponse.json();
      await this.setState({
        gifs: gifsJson.data
      })
      console.log("\nthis.state.gifs", this.state.gifs);

    } catch(err) {
      console.error("Error on fetch/json:", err);
    }
  }

  render() {
    return (
      <div>
        <SearchForm findGifs={this.findGifs} />
        <DisplayGifs gifs={this.state.gifs} />
      </div>
    );
  }
} 


export default App;
