import React, { Component } from 'react';
import SearchForm from './SearchForm'


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  // componentDidMount() {
  //   // code in here will be executed AFTER component is 
  //   // 
  //   this.getGiphs()
  // }

  parseQuery = async (query) => {
    const queryString = "https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q="
      + query + "=&limit=6&offset=0&rating=G&lang=en"
    await this.setState({
      query: queryString
    })
    this.getGiphs();
    
  }

  getGiphs = async () => {
    
  // giphy API Key: SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7
  // request URL: 
  // https://api.giphy.com/v1/gifs/
  // search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q=SEARCH%20TERM
  // =&limit=25&offset=0&rating=G&lang=en

    try {
      const giphsResponse = await fetch(this.state.query);
      const giphsJson = await giphsResponse.json();
      console.log(giphsJson);
    } catch(err) {
      console.error("Error on fetch:", err);
    }
  }

  render() {

    // <iframe src="https://giphy.com/embed/3o6Yg1m7hNNvQm7SKs" width="40" height="30" frameBorder="0" alt = "Giphy Logo"></iframe>

    return (
      <div>
       
        <SearchForm parseQuery={this.parseQuery}/>

        <iframe src="https://giphy.com/embed/1URlthYDD9ZfNe68JT" alt="simons cat" frameBorder="0"></iframe>


      </div>
    );
  }
} 

export default App;
