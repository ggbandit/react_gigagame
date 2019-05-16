import React from 'react';  
import './Popup.css';  

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <i className="fa fa-close close"/>
            <h1  className="title">ERROR</h1>
            <h2 className="desctiption">Can't do anything</h2>
          <button className="button" onClick={this.props.closePopup}>OK</button>
          </div>
        </div>
      );
    }
  }

  export default Popup