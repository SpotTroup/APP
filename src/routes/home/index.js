/*     ___   _____      ___    _________  _________   ______      ___     _    _   ____
 *    / __| | ___  \   /   \   |__    __| |__    __| |  __   \   / _ \   | |  | | |  _  \
 *   / /    | |__| |  / _   \     |  |       |  |    | |__|  |  / / \ \  | |  | | | |_|  |
 *   \ \    |  ___ / |  | |  |    |  |       |  |    |    __/  | |   | | | |  | | |  ___/
 *    \ \   | |      |  | |  |    |  |       |  |    | |\ \    | |   | | | |  | | | |
 *     \ \  | |      |  |_|  |    |  |       |  |    | | \ \   | |   | | | |  | | | |
 *   __/ /  | |       \     /     |  |       |  |    | |  \ \   \ \_/  /  \ \_/ / | |
 *  |___/   |_|        \___/      |__|       |__|    |_|   \_\   \___/     \___/  |_|
 *  ---------------------------------------------------------------------------------------
 *      Parkingspace sharing for everyone -- CO² reduction -- eastsee cleaning 
 * ----------------------------------------------------------------------------------------
 */

import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CurrentLocation from "./Map";
import { Link1 } from "preact-fluid";

import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Radio/style.css';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/Button/style.css';

const mapStyles = {
  width: "100%",
  height: "100%",
};
export class Home extends Component {
  state = {
    persons: [],
    markers: [],
  };

  componentDidMount() {
    axios
      .get("http://116.203.95.95:1234/api/spottroup/parentdevice/")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log("persons:....");
        console.log(persons);
        // for (let index = 0; index < this.state.persons.length; index++) {
        //   this.state.markers[index].name = this.state.persons[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}

        // }
      });
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    value: 0,
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleClick(event) {
    this.setState({ value: undefined });
  }
  render() {
    try {
      console.log(this.state.persons.length);
      for (let index = 0; index < this.state.persons.length; index++) {
        this.state.markers[index].name = this.state.persons[index].areaname;
        this.state.markers[index].position = {
          lat: parseFloat(this.state.persons[index].latitude),
          lng: parseFloat(this.state.persons[index].longitude),
        };
      }
      console.log(this.state.markers);
      console.log(this.state.persons);
    } catch (error) {
      this.state.markers = [
        // Just an example this should probably be in your state or props.
        {
          name: "Prking Lot1",
          position: { lat: 54.33666843424961, lng: 10.122042618360124 },
        },
        {
          name: "Prking Lot2",
          position: { lat: 54.3236877956612, lng: 10.120146467496845 },
        },
        {
          name: "Prking Lot3",
          position: { lat: 54.321251147910694, lng: 10.12785028619348 },
        },
      ];
    }

    return (
      <div>
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index} // Need to be unique
              onClick={this.onMarkerClick}
              name={marker.name}
              position={marker.position}
            />
          ))}
          <Marker onClick={this.onMarkerClick} name={"Current Location"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              Rating:
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <h4>{this.state.selectedPlace.name}</h4>
              <a href="https://www.w3schools.com/">Book this parking space</a>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww",
})(Home);
