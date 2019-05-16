import React, { Component } from 'react'
import './Profile.css'

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="bg">
                <h1 style={{ paddingTop: 15, paddingLeft: 30 }}>Profile</h1>
                <div className="detail">
                    <h1 style={{ textAlign: 'center' }}>My Profile</h1>
                    <h1>Name : Kittinan Chanpreecha</h1>
                    <h1>DOB : 07/28/39</h1>
                    <h1>Address : <small>Bearing 34/2 Sukhumvit 107 Road, Samrong Nua Subdistrict, Muang Samut prakarn, Samut Prakan 10270</small></h1>
                    <button onClick={this.goBack} className="btn-back">Back</button>
                </div>
            </div>

        );
    }
}
