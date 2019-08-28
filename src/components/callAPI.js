
import axios from "axios";

export default function(apiURL, setter) {

	axios
		.get(apiURL)
		.then(res => {
			console.log(res.data);
			setter(res.data);
		})
		.catch(err => console.log(err));

}
