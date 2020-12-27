import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import React, { useReducer } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'
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
const SignUp = ({ user }) => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
  
	const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  
  axios({
    method: 'post',
    url: 'http://116.203.95.95:1234/signup',
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
		setFormData({
			name: event.name,
			value: event.value,
		  });
		 
		  console.log(formData);
	 
	}
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [blog, setoptions] = useState([]);
	 
	useEffect(() => {

		
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

<Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
		</div>
	);
}

export default SignUp;
