import React, { useState, useEffect } from "react";
import "./App.css";

// components
import callAPI from "./components/callAPI.js";



function App() {

	//const apiKey = 'DEMO_KEY';
	const apiKey = 'gnhcw9bPsrGArQIUzHOPOXzZflboDaQcevEmaanQ';
	const nasaAPOD = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

	const initialObj = {
		url: null,
		date: '',
		title: '',
		explanation: '',
		media_type: 'image'
	};

	const [imageObj, updateImage] = useState(initialObj);

	useEffect(() => {
		callAPI(nasaAPOD, updateImage);
	}, [nasaAPOD]);



	const previousHandler = () => {
		console.log('previous');
	};

	const nextHandler = () => {
		console.log('next');
	};

	const randomHandler = () => {
		console.log('random');
	};


	if (!imageObj.url) {
		return (
			<div className="AppContainer">
				<div className="container">
					<h1>My Astro Pics!</h1>
					<h3>Loading...</h3>
				</div>
			</div>
		);
	}


	return (
		<div className="AppContainer">
			<div className="container">
				<h1>My Astro Pics!</h1>

				<div className="controlBox">
					<button className="back">&lt;&lt; Previous</button>
					<button className="random">Random</button>
					<button className="next">Next &gt;&gt;</button>
				</div>

				<div className='mediaContainer'>
					{(imageObj.media_type === 'image') && (
						<img src={imageObj.url} alt={imageObj.title} />
					)}

					{(imageObj.media_type === 'video') && (
						<video width="100%" height="auto" controls>
						  <source src={imageObj.url} type={imageObj.media_type} />
							Your browser does not support the video tag.
						</video>
					)}
				</div>

				<div className="photoHeading">
					<p>{imageObj.date}</p> <p>{imageObj.title}</p>
				</div>

				<div className="photoInfo">
					<p>{imageObj.explanation}</p>
				</div>

			</div>
		</div>
	);
}

export default App;
