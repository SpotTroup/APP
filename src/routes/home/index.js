import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';
const mapStyles = {
  width: '100%',
  height: '100%'
};
export class Home extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let markers = [ // Just an example this should probably be in your state or props. 
      {
        name: "marker1",
        position: { lat: 49.17655, lng: -123.138564 }
      },
      {
        name: "marker2",
        position: { lat: 49.16659, lng: -123.113569 }
      },
      {
        name: "marker3",
        position: { lat: 49.15659, lng: -123.143569 }
      }
    ];
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        {markers.map((marker, index) => (
      <Marker
        key={index} // Need to be unique
        onClick={this.onMarkerClick}
        name={marker.name}
        position={marker.position}
      />
    ))}
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww'
})(Home);