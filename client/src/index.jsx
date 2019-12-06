import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList.jsx';
import Popup from './components/Popup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      images: [
        {
         id : 1,
         url : "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        },
        {
          id : 2,
          url : "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        },
        {
          id : 3,
          url :  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        },
        {
          id : 4,
          url :  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        },
        {
          id : 5,
          url :  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        },
        {
          id : 6,
          url : "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        },
        {
          id : 7,
          url :  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        },
        {
          id : 8,
          url :  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
        }
      ]
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  togglePopup() {
    this.setState({
        showPopup: !this.state.showPopup
    });
  }
  handleClick(id) {
    this.setState({
      showPopup: !this.state.showPopup
  });
  }
  render() {

    return (
      <div>
        <ImageList clicker={this.handleClick} images = {this.state.images}/>
        {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}
      </div>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));