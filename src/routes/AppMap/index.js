//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js 
// Comments: JS file for AppMap
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 

*/

//=========================================================================================
// Structure 
//=========================================================================================

/**
* Index
* @class S
* @constructor 
* @extends 
* @functions
* @useEffect to prevend window undefind errors
* @return
*/

//=========================================================================================


import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import CurrentLocation from './Map';
import { Link1 } from 'preact-fluid';

import '../../css/bootstrap';
import '../../js/bootstrap';
import style from './style.css';




const mapStyles = {
  width: '100%',
  height: '100%'
};
export class AppMap extends Component {
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
  i=0;
  constructor(props) {
    super(props);
 

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedplaceid:{},
    selectedplacename:{},
    value: 0
  };
 nameid=0;
  onMarkerClick = (props, marker, e) =>
  {
   
   //console.log('marker:..'+marker.id);
   this.nameid = props.name.split("/");
   console.log('props:..'+this.nameid);
    this.setState({
      selectedPlace: props,
      selectedplacename: this.nameid[0],
      selectedplaceid : this.nameid[1],
      activeMarker: marker,
      showingInfoWindow: true
     
    });

  }
 

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
        this.state.markers[index].id = this.state.persons[index].id;
        this.state.markers[index].name = this.state.persons[index].areaname;
        this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
        this.state.markers[index].avaiable = parseFloat(this.state.persons[index].blognumber) - parseFloat(this.state.persons[index].totalavailable);
      }
      console.log(this.state.markers);
      console.log(this.state.persons);
    } catch (error) {
      this.state.markers = [ // Just an example this should probably be in your state or props. 
        {
          name: "Prking Lot1",
          position: { lat:54.33666843424961,lng: 10.122042618360124 }
        },
        {
          name: "Prking Lot2",
          position: { lat:54.3236877956612,lng: 10.120146467496845 }
        },
        {
          name: "Prking Lot3",
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
        name={marker.name+'/'+marker.id}
        position={marker.position}
        icon= {                   marker.avaiable>0 ?          {url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }  :     { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"               }     }
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
            

            <a href={'/profile/'+  this.state.selectedplaceid}>Book this parking space</a>
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