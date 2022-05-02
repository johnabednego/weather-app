import React, { Component } from "react";
import pressure from "./images/pressure.png"
import humidity from "./images/humidity.png"
import temperature from "./images/temperature.png"
import wind from "./images/wind.png"
import sunrise from "./images/sunrise.png"
import sunset from "./images/sunset.png"

class Card extends Component {
  render() {
    return (
      <div
        className="card d-sm-none container d-flex align-items-center justify-content-center">
        <img
          src={this.props.response.icon}
          className="card-img-top"
          alt="weather icon"
          width={100}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">
            {`${this.props.response.country}, ${this.props.response.city} weather`}
          </h5>
          <p className="card-text">{this.props.response.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><img style={{ marginRight: "20px" }} src={temperature} />
            temperature - {this.props.response.temperature}°C
          </li>{" "}
          <li className="list-group-item"> <img style={{ marginRight: "20px" }} src={pressure} />
            pressure - {this.props.response.pressure}mb
          </li>{" "}
          <li className="list-group-item"><img style={{ marginRight: "20px" }} src={humidity} />
            humidity - {this.props.response.humidity}g.m-3
          </li>
          <li className="list-group-item"><img style={{ marginRight: "20px" }} src={wind} />
            wind speed - {this.props.response.windSpeed}m/s
          </li>{" "}
          <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sunrise} />
            sunrise - {this.props.response.sunrise}
          </li>{" "}
          <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sunset} />
            sunset - {this.props.response.sunset}
          </li>{" "}
        </ul>
      </div>
    );
  }
}

export default Card;
