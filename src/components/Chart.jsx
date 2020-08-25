import React, { Component, createRef } from "react";
import * as d3 from 'd3'
import data from '../data/data'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
    }
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        
        let nodeData = data;
        let width = 300; 
        let height = 300;
        let radius = Math.min(width, height) / 2;
        let color = d3.scaleOrdinal()
            .range(["red", "green", "blue", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        let g = d3
            .select("svg") 
            .attr("width", width) 
            .attr("height", height)
            .append("g") 
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        let partition = d3.partition()
            .size([2 * Math.PI, radius]);
        let root = d3.hierarchy(nodeData)  // <-- 1
            .sum(function (d) { return d.size}); 
        partition(root);  // <-- 1
        let arc = d3.arc()  // <-- 2
            .startAngle(function (d) { return d.x0 })
            .endAngle(function (d) { return d.x1 })
            .innerRadius(function (d) { return d.y0 })
            .outerRadius(function (d) { return d.y1 });
        
        g.selectAll('path')  // <-- 1
            .data(root.descendants())  // <-- 2
            .enter()  // <-- 3
            .append('path')  // <-- 4
            .attr("display", function (d) { return d.depth ? null : "none"; })  // <-- 5
            .attr("d", arc)  // <-- 6
            .style('stroke', '#fff')  // <-- 7
            .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });  // <-- 8
        
    }

    render() {
        return (
            <>
                <svg ref={this.myRef}></svg>
            </>
        )
    }
}

export default Chart
