var axios = require('axios');

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fcbf3344cf5ded2ead66408f0e5d6a87&units=metric

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fcbf3344cf5ded2ead66408f0e5d6a87&units=metric';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res){
			throw new Error(res.data.message);
		});
	}
}
