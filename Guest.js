import React, { Component } from 'react'
import army from "./witharms"
class Guest extends Component {
    
    render() {
        return (
            <div >
    <h3 onMouseOver={this.props.hochandleclick}> 
    Guest {this.props.hocgungame} Gunshots: {this.props.hocgunshots}
    </h3>
            </div>
        );
    }
}
export default army(Guest,20)