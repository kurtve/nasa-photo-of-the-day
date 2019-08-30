
import axios from "axios";

export default function(apiURL, setter) {

	/*
	axios
		.get(apiURL)
		.then(res => {
			console.log(res.data);
			setter(res.data);
		})
		.catch(err => console.log(err));
	*/

	const testData = {
		date: '2019-08-28',
		title: 'Messier 61 Close Up',
		url: 'https://apod.nasa.gov/apod/image/1908/M61-HST-ESO-L.jpg',
		media_type: 'image',
		explanation: "Image data from the Hubble Space Telescope, the European Southern Observatory, and small telescopes on planet Earth are combined in this magnificent portrait of face-on spiral galaxy Messier 61 (M61). A mere 55 million light-years away in the Virgo Cluster of Galaxies, M61 is also known as NGC 4303. It's considered to be an example of a barred spiral galaxy similar to our own Milky Way. Like other spiral galaxies, M61 also features sweeping spiral arms, cosmic dust lanes, pinkish star forming regions, and young blue star clusters. The bright galactic core is offset to the left in this 50 thousand light-year wide close-up.",
	};


	// for development, so we don't exhaust our call limit
	window.setInterval(() => {
		setter(testData);
	}, 2000);


}
