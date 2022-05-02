import React, { Component } from 'react';
import Card from './Card';
class Dashboard extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-2 d-none d-sm-block h-auto" style={{backgroundColor:"#2d2f36"}}>b</div>
                    <div className="col vh-100" style={{marginTop:"120px"}}>
                    <Card response={this.props.response}/>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Dashboard;