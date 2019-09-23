import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/api/5day`).then(results => {
      this.setState({ weather: results.data });
    });
  }
  render() {
    const { weather } = this.state;
    console.log(weather);
    return (
      <div>
        <h2>Welcome to React!</h2>
      </div>
    );
  }
}

export default App;
