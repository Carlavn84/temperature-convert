import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict.js';
import TemperatureInput from './TemperatureInput.js';


function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

export default function Calculator() {
	const [temperature, setTemperature] = useState('');

	const [scale, setScale] = useState('c');

	console.log('render');
	console.log(temperature);
	console.log(scale);

	const handleCelsiusChange = temperature => {
		setScale('c');
		setTemperature(temperature);
	};

	console.log('render');
	console.log(temperature);
	console.log(scale);

	const handleFahrenheitChange = temperature => {
		setScale('f');
		setTemperature(temperature);
	};

	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<div className="Calculator">
			<div>
				<TemperatureInput
					temperature={celsius}
					scale="c"
					onTemperatureChange={handleCelsiusChange}
				/>
				<TemperatureInput
					temperature={fahrenheit}
					scale="f"				
					onTemperatureChange={handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		</div>
	);
}
