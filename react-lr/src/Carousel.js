import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps(props) {
    var photos = ["http://placecorgi.com/600/600"];
    console.log("ye ha media", props);

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    console.log(photos, "ye han photos");

    return { photos };
  }

  handleIndexClick = (e) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index == active ? "active" : ""}
              src={photo}
              alt="aniamal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
