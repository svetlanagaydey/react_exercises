import axios from 'axios';
import React, { useState, useEffect } from 'react';
const CancelRequest = () => {
	const [toogleButton, setToogleButton] = useState(true);
	const [randomJoke, setRandomJoke] = useState('');
	
	useEffect(() => {
		const joke = async() => {
			const getRandomJoke = await axios.get('https://api.chucknorris.io/jokes/random');
			setRandomJoke(getRandomJoke.data.value);
		}
		joke();
	}, [toogleButton])

	const printButton = () => {
        
		if (toogleButton == true) {
			return(
				<div>
						<button onClick={() => {setToogleButton(false)}}>Display data</button>
				</div>
			)         
		} else {
			return(
				<div>
						<button onClick={() => {setToogleButton(true)}}>Hide data</button>
						<div>{randomJoke}</div>
				</div>
			)    
		}
	}
	return(
		<div>
			{printButton()}
		</div>
	)
}
export default CancelRequest;