import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import CurrentLocation from './Map';
const mapStyles = {
  width: '100%',
  height: '100%'
};
export class Home extends Component {
  state = {
    persons: [],
    markers :[]
  }

  componentDidMount() {
    axios.get("http://116.203.95.95:1234/api/spottroup/parentdevice/")
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log("persons:...." );
        console.log(persons );
        // for (let index = 0; index < this.state.persons.length; index++) {
        //   this.state.markers[index].name = this.state.persons[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
          
        // }
      })
  }

  constructor(props) {
    super(props);
  

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    value: 0
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
  handleClick(event) {
    this.setState({value: undefined});
  }
  render() {
    try {
      console.log(this.state.persons.length);
      for (let index = 0; index < this.state.persons.length; index++) {
        this.state.markers[index].name = this.state.persons[index].areaname;
        this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
        
      }
      console.log(this.state.markers);
      console.log(this.state.persons);
    } catch (error) {
      this.state.markers = [ // Just an example this should probably be in your state or props. 
        {
          name: "marker1",
          position: { lat:54.33666843424961,lng: 10.122042618360124 }
        },
        {
          name: "marker2",
          position: { lat:54.3236877956612,lng: 10.120146467496845 }
        },
        {
          name: "marker3",
          position: { lat:54.321251147910694, lng:10.12785028619348 }
        }
      ];
    }
  
   
    return (
      <div>
     
      <CurrentLocation
        centerAroundCurrentLocation
        
        google={this.props.google}
      >
        {this.state.markers.map((marker, index) => (
      <Marker
        key={index} // Need to be unique
        onClick={this.onMarkerClick}
        name={marker.name}
        position={{ lat:54.321251147910694, lng:10.12785028619348}}
      />
    ))}
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
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
            <button onClick={this.handleClick}>Book</button>
          </div>
        </InfoWindow>
        
      </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww'
})(Home);