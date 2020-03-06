import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
	const handleTemperatureChange = e => onTemperatureChange(e.target.value);

	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature} onChange={handleTemperatureChange} />
		</fieldset>
	);
}

export default TemperatureInput;