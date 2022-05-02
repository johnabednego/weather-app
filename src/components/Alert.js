import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div
        className="Card alert fixed-top alert-warning alert-dismissible fade show" role="alert" style={{marginTop:"100px"}}>
        {this.props.message}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    );
  }
}

export default Alert;
