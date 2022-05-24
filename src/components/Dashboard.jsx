import React, { Component } from 'react';
import Card from './Card';
import temperature from "./images/temperature.png"
import pressure from "./images/pressure.png"
import humidity from "./images/humidity.png"
import sunrise from "./images/sunrise.png"
import sunset from "./images/sunset.png"
import wind from "./images/wind.png"
import feeling from "./images/feeling.png"
import ground_level from "./images/ground-level.png"
import sea_level from "./images/sea-level.png"
import degree from "./images/degree.png"
import gust from "./images/gust.png"
import latitude from "./images/latitude.png"
import longitude from "./images/longitude.png"
import high_temperature from "./images/high-temperature.png"
import low_temperature from "./images/low-temperature.png"


class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col vh-100" style={{ marginTop: "120px" }}>
                                <Card response={this.props.response} />
                                <div className="container1 container d-none d-sm-flex" style={{ flexDirection: "column" }}>
                                    <img
                                        src={this.props.response.icon}
                                        className="card-img-top"
                                        alt="weather icon"
                                        width={100}
                                        height={200}
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title text-white" style={{ textAlign: "center" }}>
                                            {`${this.props.response.country}, ${this.props.response.city} weather`}
                                        </h3>
                                        <h6 className="card-text text-white" style={{ textAlign: "center" }}>{this.props.response.description}</h6>
                                    </div>

                                </div>

                                <div className="row card-container w-100 d-none d-md-flex" style={{ marginLeft: "6%" }}>
                                    <div className="col-3">
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Main</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={temperature} />
                                                temperature - {this.props.response.temperature}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={low_temperature} />
                                                temperature_min - {this.props.response.temperature_min}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={high_temperature} />
                                                temperature_max - {this.props.response.temperature_max}°C
                                            </li>
                                            <li className="list-group-item"> <img style={{ marginRight: "20px" }} src={pressure} />
                                                pressure - {this.props.response.pressure}mb
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={humidity} />
                                                humidity - {this.props.response.humidity}g.m-3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-3 offset-1">
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Wind</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={wind} />
                                            wind speed  - {this.props.response.windSpeed}m/s
                                            </li> 
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={longitude} />
                                                longitude - [{this.props.response.longitude}°C]
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={latitude} />
                                                latitude - [{this.props.response.latitude}°C]
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={degree} />
                                                degree - {this.props.response.degree}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={gust} />
                                                gust - {this.props.response.gust}m/s
                                            </li>
                            
                                        </ul>

                                    </div>
                                    <div className="col-3 offset-1">
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Synoptic</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sunrise} />
                                            sunrise - {this.props.response.sunrise}
                                            </li>
                                            <li className="list-group-item"> <img style={{ marginRight: "20px" }} src={sunset} />
                                            sunset - {this.props.response.sunset}
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={feeling} />
                                                feeling - {this.props.response.feeling}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sea_level} />
                                                sea_level - {this.props.response.sea_level}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={ground_level} />
                                                ground_level - {this.props.response.ground_level}°C
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            {/* Medium screen*/}
                            <div className="row container-fluid d-none d-sm-flex d-md-none" style={{ marginLeft: "6%" }}>
                                    <div className="col-3 " style={{width:"40%"}}>
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Main</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={temperature} />
                                                temperature - {this.props.response.temperature}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={low_temperature} />
                                                temperature_min - {this.props.response.temperature_min}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={high_temperature} />
                                                temperature_max - {this.props.response.temperature_max}°C
                                            </li>
                                            <li className="list-group-item"> <img style={{ marginRight: "20px" }} src={pressure} />
                                                pressure - {this.props.response.pressure}mb
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={humidity} />
                                                humidity - {this.props.response.humidity}g.m-3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-3 offset-1 " style={{width:"40%"}}>
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Wind</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={wind} />
                                            wind speed  - {this.props.response.windSpeed}m/s
                                            </li> 
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={longitude} />
                                                longitude - [{this.props.response.longitude}°C]
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={latitude} />
                                                latitude - [{this.props.response.latitude}°C]
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={degree} />
                                                degree - {this.props.response.degree}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={gust} />
                                                gust - {this.props.response.gust}m/s
                                            </li>
                            
                                        </ul>
                                    </div>
                                    <div className="col-3 offset-1" style={{width:"300px", marginLeft:"25%"}}>
                                        <h5 className="card-title text-white" style={{ textAlign: "center" }}>Synoptic</h5>
                                        <ul className="list-group list-group-flush" style={{ borderRadius: "5px" }}>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sunrise} />
                                            sunrise - {this.props.response.sunrise}
                                            </li>
                                            <li className="list-group-item"> <img style={{ marginRight: "20px" }} src={sunset} />
                                            sunset - {this.props.response.sunset}
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={feeling} />
                                                feeling - {this.props.response.feeling}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={sea_level} />
                                                sea_level - {this.props.response.sea_level}°C
                                            </li>
                                            <li className="list-group-item"><img style={{ marginRight: "20px" }} src={ground_level} />
                                                ground_level - {this.props.response.ground_level}°C
                                            </li>
                                        </ul>

                                    </div>
                                   
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;