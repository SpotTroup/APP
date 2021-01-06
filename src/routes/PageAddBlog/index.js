import React from 'react';
import { createRef, Component } from 'preact';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import MyClass from './GlobalState';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import { Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link1 } from 'preact-fluid';
const mapStyles = {
  width: '100%',
  height: '100%'
};
import { store, useGlobalState } from 'state-pool';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://116.203.95.95:4001";



export class AddBlog extends Component {
  _isMounted = false;
  state = {
    lat : 0.0,
    lng : 0.0
   
  };
  
  

  componentWillUnmount() {
    this._isMounted = false;
  }
  onMapClicked = (props) => {
    console.log('onmap clicked');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  componentDidMount() {
   

    axios.get("http://116.203.95.95:1234/api/spottroup/parentdevice/")
      .then(res => {
        const parentdevice = res.data;
        this.setState({ parentdevice });
        console.log("parentdevice:....");
        console.log(parentdevice);
        // for (let index = 0; index < this.state.parentdevice.length; index++) {
        //   this.state.markers[index].name = this.state.parentdevice[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.parentdevice[index].latitude),lng: parseFloat(this.state.parentdevice[index].longitude)}

        // }
      })

  
  }
  i = 0;
  constructor(props) {
    super(props);


    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedplaceid: {},
    selectedplacename: {},
    value: 0
  };
  nameid = 0;
  onMarkerClick = (props, marker, e) => {

   
    this.setState({
      
      showingInfoWindow: true

    });

  }
  onMarkerDragend = (props, marker, e) => {
   let  lat = marker.getPosition().lat();
  let   lng = marker.getPosition().lng();
   this.setState({lat});
   this.setState({lng});
    console.log('drag lat lang'+ lat+' '+lng);

    console.log('on dragend');
  }


  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
   handleChange = event => {
	  
	  
	}
  handleClick(event) {
    this.setState({ value: undefined });
  }
  render() {
    
   
    
  
    return (
      <div>
<Grid  style={{ textAlign:'center' , marginTop : 50 }} horizontalAlign='middle' centered>
  <Grid.Row>
  <Grid.Column style={{ maxWidth: 450 , height:450}}>
<Button>Scan qr code</Button>
    <Map
          style={{width: '300px', height: '450px', marginTop:20}}
          onClick={this.onMapClicked}
          google={this.props.google}
        >
         
          <Marker draggable={true}
  onDragend={this.onMarkerDragend}
          onClick={this.onMarkerClick} name={'Current Location'} />
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


              <a href={'/profile/' + this.state.selectedplaceid}>Book this parking space</a>
            </div>
          </InfoWindow>

        </Map>
      
    </Grid.Column>
  </Grid.Row>

  <Grid.Row>
    <Grid.Column style={{ maxWidth: 450  }}>
    <h3>latitude: {this.state.lat}</h3>
        <h3>longitude: {this.state.lng}</h3>
      <input type="datetime-local" id="birthdaytime" name="parkingtime" onChange={this.handleChange}></input>
    </Grid.Column>
    </Grid.Row>
  
    
   
    
  </Grid>
       
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww'
})(AddBlog);