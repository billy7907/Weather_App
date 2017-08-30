import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		// converting to Celsius
		const temps = _.map(
			cityData.list.map(weather => weather.main.temp),
			temp => temp - 273
		);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;
		// 👆 same as 👇
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color="red" units="˚C" />
				</td>
				<td>
					<Chart data={pressures} color="black" units="hPA" />
				</td>
				<td>
					<Chart data={humidities} color="blue" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (˚C)</th>
						<th>Pressure (hPA)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapsStateToProps({ weather }) {
	return { weather };
}

export default connect(mapsStateToProps)(WeatherList);
