import React, {useEffect} from 'react'
import * as d3 from 'd3'

const chart = () => {
	const divRef = useRef(null);
	useEffect(() => {
		let accessToRef = d3.selectAll(divRef.current);
	}, [])


	let data = [12, 36, 6, 25, 35, 10, 20];

	let width = 500; // <-- 1
	let height = 500;

	const accessToRef = d3.select(divRef.current)
		.append('svg')
		.attr("width", width) // <-- 2
		.attr("height", height);
	
	accessToRef.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('x', (d, i) => i * 70) 
		.attr('y', (d, i) => h - 10 * 70); 
		


  	return <svg ref={divRef}></svg>;
};

export default chart
