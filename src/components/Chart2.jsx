
import React, { useEffect, Fragment } from 'react';
import * as d3 from 'd3'
// css
import '../css/chart2.css'

const drawChart2 = (datos) => {

    let x = d3.scaleLinear()
    .domain([0, d3.max(datos)])
    .range([0, 144])
    let g = d3.select('.barras')

    g.selectAll('div')
    .data(datos)
    .enter().append('div')
    .style('width', d => x(d) + 'px')
    .text(d => d)
}

const Chart2 = () => {
    const datos = [
        1, 2, 3, 5, 8, 13, 21, 34, 55, 89
    ]

    useEffect(() => {
        drawChart2(datos)

    });

    return (
        <Fragment>
            <div className='barras'></div>
        </Fragment>
    );
}

export default Chart2
