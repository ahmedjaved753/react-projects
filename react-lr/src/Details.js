import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import LoadingBar from "react-top-loading-bar";
import Carousel from "./Carousel";

class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //   };
  // }

  state = { loading: true, progress: 90 };

  componentDidMount() {
    console.log("chala re............");
    pet.animal(this.props.id).then(({ animal }) => {
      console.log("animal ki photos", animal.photos);
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
        progress: 100,
      });
    }, console.error);
    console.log(this.state.loading, "ha loading");
    console.log(this.props);
  }

  render() {
    // if (this.state.loading) {
    //   return <h1>loading...</h1>;
    // }

    const {
      animal,
      name,
      breed,
      location,
      description,
      loading,
      progress,
      media,
    } = this.state;

    console.log("details ka media", media);

    return (
      <div
        style={
          loading
            ? {
                display: "grid",
                placeItems: "center",
              }
            : {}
        }
        className="details"
      >
        {/* <LoadingBar
          loaderSpeed={2000}
          shadow
          height={4}
          color="red"
          progress={progress}
        /> */}
        <Carousel media={media} />

        {loading ? (
          <BeatLoader color="#bf3334" loading={loading} />
        ) : (
          <div>
            <h1>{name}</h1>
            <h2>
              {animal} - {breed} - {location}
            </h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Details;
