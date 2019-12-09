import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList.jsx';
import Popup from './components/Popup.jsx';
import RightIcon from './components/RightIcon.jsx';
import LeftIcon from './components/LeftIcon.jsx';
import style from './components/button.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      images: [
        {
          id: 0,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/0.jpg",
        },
        {
          id: 1,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/1.jpg",
        },
        {
          id: 2,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/2.jpg",
        },
        {
          id: 3,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/3.jpg",
        },
        {
          id: 4,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/4.jpg",
        },
        {
          id: 5,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/5.jpg",
        },
        {
          id: 6,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/6.jpg",
        },
        {
          id: 7,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/7.jpg",
        },
        {
          id: 8,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/8.jpg",
        },
        {
          id: 9,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/9.jpg",
        },
        {
          id: 10,
          url: "https://gpksingh.s3.us-east-2.amazonaws.com/10.jpg",
        }
      ]
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
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
  handleScrollRight() {
    document.getElementById("row").scrollLeft += 200;
  }
  handleScrollLeft() {
    document.getElementById("row").scrollLeft -= 200;
  }
  componentDidMount() {
    let endpoint = window.location.pathname.split('/')[1];
    axios.get(`/api/carousel/${endpoint}`)
      .then((data) => {

        console.log("the state of the images is now", this.state.images)

      });
  }

  render() {

    return (
      <div>
        <div>
          <div>

            <ImageList clicker={this.handleClick} images={this.state.images} />
            {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}

            <button className={style.leftButton} onClick={() => this.handleScrollLeft()}>
              <LeftIcon width={48} fill="white" ></LeftIcon>
            </button>

            <button className={style.rightButton} onClick={() => this.handleScrollRight()}>
              <RightIcon width={48} fill="white" ></RightIcon>
            </button>



          </div>
        </div>


      </div>

    );

  }
}
ReactDOM.render(<App />, document.getElementById('app'));