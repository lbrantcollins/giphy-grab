import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount in App");
    // code in here will be executed AFTER component is 
    // 
    this.getGiphs()
  }

  getGiphs = async () => {
    
  // giphy API Key: SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7
  // request URL: https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q=&limit=25&offset=0&rating=G&lang=en

    try {
  
      const giphsResponse = await fetch("https://api.giphy.com/v1/gifs/search?api_key=SCKcemhFZO6iLxvHCMyDvaQGX8Z5l0V7&q=Simons%20cat=&limit=6&offset=0&rating=G&lang=en");
      console.log(giphsResponse);
      const giphsJson = await giphsResponse.json();
      console.log(giphsJson);


    } catch(err) {
      console.error("Error on fetch:", err);
    }
  }

  render() {

    return (
      <div>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' React Bootstrap'}
          </Navbar.Brand>
        </Navbar>

        <h2>This is App() talking</h2>

        <iframe src="https://giphy.com/embed/3o6Yg1m7hNNvQm7SKs" width="40" height="30" frameBorder="0"></iframe>

       
        <iframe src="https://giphy.com/embed/1URlthYDD9ZfNe68JT" alt="simons cat" frameBorder="0"></iframe>

      </div>
    );
  }
} 

export default App;
