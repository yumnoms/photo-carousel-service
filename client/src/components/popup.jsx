import React from 'react';
import style from './popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className={style.popup}>
        <div className={style.popup_inner}>
          <h1>This is going have a main image and image grid</h1>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;