import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

import { Button } from 'semantic-ui-react'
import Select from 'react-select'

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	  ]
	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
		

  <form >
  <Select options={options} />
  <label for="meeting-time">Choose a date and time for your appointment:</label>

<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00"/>
	   <label for="quantity">Choose booked time :</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
  <br/>
  <Button>Click Here</Button>
  <input type="submit"/>
</form>


		</div>
	);
}

export default Profile;
