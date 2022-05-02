import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <header>
            <nav className="p-3 text-white navbar navbar-expand-sm navbar-dark bg-dark fixed-top d-flex" style={{flexDirection:"column"}} >
                <div className="container">
                    <a class="navbar-brand text-white" href="/">ARAM-WeatherApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav ms-auto text-white">
                            <li class="nav-item"><a class="nav-link" href="https://github.com/genus-corde/aram-weather-app">Github</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://openweathermap.org/"> Open-Weather-Map</a></li>
                        </ul>
                    </div>
                    </div>
                      
                        <form
                            className="d-flex col-12 col-sm-auto mb-3 mb-lg-0 me-lg-3"
                            onSubmit={this.props.onSubmit}
                            onClick={this.props.onClick}>
                            <input
                                type="search"
                                className="form-control form-control-dark me-2"
                                placeholder="Search city..."
                                aria-label="Search"
                                onChange={this.props.onChange}
                                value={this.props.city}
                            />
                            
                            <div className="text-end">
                                <input
                                    type="submit"
                                    className="btn btn-warning"
                                    value="Search"
                                />
                            </div>                       
                        </form> 
            </nav>
            </header>
        );
    }
}

export default NavBar;