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
const SignIn = ({ user }) => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
  
	const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  
  axios({
    method: 'post',
    url: 'http://116.203.95.95:1234/api/spottroup/booking/',
    data: formData,
   
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
		  console.log(formData);
	  } catch (error) {
		setFormData({
			name: 'blogid',
			value: event.value,
		  });
		  setFormData(
		  {
			name: 'classname',
			value: event.classname,
		  });
		  setFormData({
			name: 'paymentstatus',
			value: 'ok',
		  });
		  console.log(formData);
		  setFormData(
		  {
			name: 'userid',
			value: '1122',
		  });
		  console.log(formData);
		  setFormData(
		  {
			name: 'parentdeviceid',
			value: user,
		  });
	  console.log(formData);
		  console.log(formData);
	  }
	}
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [blog, setoptions] = useState([]);
	 
	useEffect(() => {

		axios.get("http://116.203.95.95:1234/api/spottroup/findbyparentdeviceid/"+user)
      .then(res => {
		const
		blog = res.data;
      // options=res.data;
		console.log("persons:...."+user );
		console.log("blog...." );
		console.log(blog );
	//	console.log(options );
		for (let index = 0; index < blog.length; index++) {
			blog[index].value = blog[index].id;
			
			blog[index].label = 'Blog'+index;
			//options[index].classname = blog[index].classname;
			
		  }
		  console.log(blog );
		  setoptions(blog);
        // for (let index = 0; index < this.state.persons.length; index++) {
        //   this.state.markers[index].name = this.state.persons[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
          
        // }
      })
	}, []);

	return (
		<div class={style.profile}>
		

  <form onSubmit={handleSubmit}>
  <Select name="blog" options={blog} onChange={handleChange}/>
  <label for="meeting-time">Choose a date and time for your appointment:</label>

  <input type="datetime-local" id="birthdaytime" name="parkingtime" onChange={handleChange}></input>
	   <label for="quantity">Choose booked time :</label>
  <input type="number" id="quantity" name="parkingduration" min="1" max="5" onChange={handleChange}></input>
  <br/>
  <Button>Click Here</Button>
  <input type="submit"/>
</form>


		</div>
	);
}

export default SignIn;
