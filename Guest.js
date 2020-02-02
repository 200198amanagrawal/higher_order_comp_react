import React, { Component } from 'react'
import army from "./witharms"
class Guest extends Component {
    state={
        gunshots:0
    }
    handleclick=()=>{
        this.setState({gunshots:this.state.gunshots+1});
    }
    render() {
        return (
            <div >
    <h3 onMouseOver={this.handleclick}> 
    Guest {this.props.hocgungame} Gunshots: {this.state.gunshots}
    </h3>
            </div>
        );
    }
}
export default army(Guest)