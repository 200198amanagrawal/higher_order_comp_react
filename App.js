import React, { Component } from 'react'
import User from "./User"
import Guest from "./Guest"
export default class App extends Component {
    render() {
        return (
            <div>
               <User/>
               <Guest/> 
            </div>
        )
    }
}
