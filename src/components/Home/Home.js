import React, { Component } from 'react';
import Popup from '../Popup/Popup';
import './Home.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
        <div className="bg">
          <h1 style={{ paddingTop: 15, paddingLeft: 30 }}>Home Page</h1>
          <h1 className="center">Welcome, Kittinan Chanpreecha</h1>
          <div className="row marginTop">
            <Link to="/profile"><button className="btn-profile">Profile</button></Link>
            <button onClick={this.togglePopup.bind(this)} className="btn-do">Do</button></div>

          {this.state.showPopup ?
            <Popup
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
    );
  }
}
