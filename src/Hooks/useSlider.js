import React, { useEffect, useState } from 'react';

const useSlider = () => {
	const [slider, setSlider] = useState([]);
	// Fetch Data
	useEffect(() => {
		fetch('data/slider.json')
			.then(res => res.json())
			.then(data => setSlider(data))
	}, [])
	return [slider, setSlider]
};

export default useSlider;