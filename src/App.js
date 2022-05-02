import Alert from "./components/Alert";
import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import {
  deconstructErrorResponse,
  deconstructResponse,
  makeRequest,
} from "./utils";
import Dashboard from "./components/Dashboard";

const appid = "faeceb16f3490b78593e40638784cb0a"
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Accra",
      response: {},
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleRequest = (url) => {
    makeRequest(url)
      .then((result) => {
        if (result.cod === 200) {
          this.setState({
            response: deconstructResponse(result),
            error: "",
            city: "",
          });
        } else {
          this.setState({
            response: {},
            error: deconstructErrorResponse(result),
            city: "",
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "error occurred",
        });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    this.handleRequest(url);
  };

  handleClick = () => {
    this.setState({ error: "" });
  };

  // request weather data on a default city when the page loads
  // for the first time
  componentDidMount() {
    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    this.handleRequest(url);
  }

  render() {
    return (
      <>
        <NavBar
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onClick={this.handleClick}
          city={this.state.city}
        />

        {this.state.error.length > 0 && <Alert message={this.state.error} />}

        <Dashboard response={this.state.response} />
      </>
    );
  }
}

export default App;
