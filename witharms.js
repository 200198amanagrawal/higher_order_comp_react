import React, { Component } from 'react'
const army=(Men)=>{
class Newmen extends Component {
    state={
        gunshots:0
    };
    handleclick=()=>{
        this.setState({gunshots:this.state.gunshots+1});
    }
    render() {
        return <Men 
        hocgungame="AK47" 
        hocgunshots={this.state.gunshots} 
        hochandleclick={this.handleclick}>
        </Men>
    }
}
    return Newmen;
};
export default army;