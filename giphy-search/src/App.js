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

  parseQuery = (query) => {
    const queryString = "https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q="
      + query + "=&limit=6&offset=0&rating=G&lang=en"
    console.log("queryString BEFORE replacing spaces");
    console.log(queryString);
    queryString.replace(/ /g, "%20");
    console.log("queryString AFTER replacing spaces");
    console.log(queryString);
    this.setState({
      query: queryString
    })
    
  }

  getGiphs = async () => {
    
  // giphy API Key: SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7
  // request URL: https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q=&limit=25&offset=0&rating=G&lang=en

    try {
      
      const giphsResponse = await fetch();

      // const giphsResponse = await fetch("https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q=Simons%20cat=&limit=6&offset=0&rating=G&lang=en");

      const giphsJson = await giphsResponse.json();


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
