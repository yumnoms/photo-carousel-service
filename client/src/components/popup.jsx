import React from 'react';
import style from './popup.css';
import RightIcon from './RightIcon.jsx';
import LeftIcon from './LeftIcon.jsx';
import PopupRight from './PopupRight.jsx';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageIndex: 5
    };
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log("Component in popup");
    // console.log("I got an id in PopUP", this.props.id);
    this.setState({ images: this.props.images, imageIndex: this.props.id }, () =>
      console.log("the data of setstate is", this.state.images));

  }
  handleScrollLeft() {
    // console.log("Scroll Left clicked")
    if (this.state.imageIndex !== 0) {
      this.setState({ imageIndex: this.state.imageIndex -= 1 });
    }
    console.log("Image Index is", this.state.imageIndex);
  }
  handleScrollRight() {
    console.log("Scroll right clicked");
    if (this.state.imageIndex < this.state.images.length - 1) {
      console.log("Scroll right clicked")
      this.setState({ imageIndex: this.state.imageIndex += 1 });
    }
    console.log("Image Index is", this.state.imageIndex);
  }

  handleClick(id) {
    console.log("I got an id", id);
    this.setState({imageIndex:id});
  }

  render() {

    const ImageSlides = this.state.images.map((image, index) =>
      <div className={style.imageDiv}>
        <img className={style.img} src={image.imageUrl} />
      </div>
    );

    const t1 = <h1>Test</h1>
    console.log("The image index is", this.state.imageIndex);
    console.log(this.state.images[this.state.imageIndex]);
    return (
      <div className={style.popup}>

        <div className={style.popup_inner}>

          <div className={style.wrapper}>

            {ImageSlides[this.state.imageIndex]}


            <button className={style.leftButton} onClick={() => this.handleScrollLeft()}>
              <LeftIcon width={48} fill="white" ></LeftIcon>
            </button>
            <button className={style.rightButton} onClick={() => this.handleScrollRight()}>
              <RightIcon width={48} fill="white" ></RightIcon>
            </button>

            <div className={style.rightCol}>


              <PopupRight cb={this.handleClick} images={this.props.images} id={this.state.imageIndex}></PopupRight>


            </div>

          </div>

          <button onClick={this.props.closePopup}>close me</button>
        </div>



      </div>
    );
  }
}

export default Popup;