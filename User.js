import React, { Component } from 'react'
import army from "./witharms"
class User extends Component {
    
    render() {
        return (
            <div >
    <h3 onMouseOver={this.props.hochandleclick}> 
    User {this.props.hocgungame} Gunshots: {this.props.hocgunshots}
    </h3>
            </div>
        );
    }
}
export default army(User)