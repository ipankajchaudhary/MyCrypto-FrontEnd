import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center" style={{marginTop:"50%",marginLeft:"10%"}}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}