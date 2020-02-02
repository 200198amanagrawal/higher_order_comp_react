import React, { Component } from 'react'
import {MyContext} from "./App"
export default class Guest extends Component {
    render() {
        return (
            <div>
                Guest Component
                <MyContext.Consumer>
                    {data=><h4>{data}</h4>}
                </MyContext.Consumer>
            </div>
        )
    }
}
