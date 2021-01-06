import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import React, { useReducer } from 'react';
import style from './style.css';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import Select from 'react-select'
const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.name]: event.value
	}
   }
// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
  
	const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  setFormData({
		name: 'paymentstatus',
		value: 'ok',
	  },
	  {
		name: 'userid',
		value: '1122',
	  },
	  {
		name: 'parentdeviceid',
		value: user,
	  });
  console.log(formData);
  axios({
    method: 'post',
    url: 'http://116.203.95.95:1234/api/spottroup/blog/',
    data: formData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
	  setTimeout(() => {
		setSubmitting(false);
	  }, 3000);
	}
  
	const handleChange = event => {
	  
	  try {
		setFormData({
			name: event.target.name,
			value: event.target.value,
		  });
	  } catch (error) {
		setFormData({
			name: 'blogid',
			value: event.value,
		  },
		  {
			name: 'classname',
			value: event.classname,
		  });
	  }
	}
	
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [options, setoptions] = useState([{ value: 'chocolate', label: 'Chocolate',id:'' },
	{ value: 'strawberry', label: 'Strawberry',id:''},
	{ value: 'vanilla', label: 'Vanilla',id:'' }]);
	 
	useEffect(() => {

		axios.get("http://116.203.95.95:1234/api/spottroup/findbyparentdeviceid/"+user)
      .then(res => {
		const
		blog = res.data;
       //=res.data;
        console.log("persons:...."+user );
		console.log(blog );
		console.log(options );
		for (let index = 0; index < blog.length; index++) {
			options[index].id = blog[index].id;
			options[index].value = blog[index].id;
			options[index].lebel = 'Blog'+index;
			options[index].classname = blog[index].classname;
			
		  }
		  console.log(options );
		  setoptions(options);
        // for (let index = 0; index < this.state.persons.length; index++) {
        //   this.state.markers[index].name = this.state.persons[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
          
        // }
      })
	}, []);

	return (
		<div class={style.profile}>
		
  <head>
    <title>QR Code Scanner</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
    <link rel="stylesheet" href="src/styles.css" />
    <script src="https://rawgit.com/sitepoint-editors/jsqrcode/master/src/qr_packed.js"></script>
  </head>

  <body>
    <div id="container">
      <h1>QR Code Scanner</h1>

      <a id="btn-scan-qr">
        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/07/1499401426qr_icon.svg"/>
      </a>

      <canvas hidden="" id="qr-canvas"></canvas>

      <div id="qr-result" hidden="">
        <b>Data:</b> <span id="outputData"></span>
      </div>
    </div>

    <script src="./js/qrCodeScanner.js"></script>
  </body>



		</div>
	);
}

export default Profile;
