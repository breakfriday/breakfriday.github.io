/**
 * Created by dupenghui on 2015/1/5.
 */
define(function(require){

    var objectAsDataCtrl=["$scope","$element",function($scope, $element){
        var d3=require("D3")

        var data = [ // <- A
            {width: 10, color: 23},{width: 15, color: 33},
            {width: 30, color: 40},{width: 50, color: 60},
            {width: 80, color: 22},{width: 65, color: 10},
            {width: 55, color: 5},{width: 30, color: 30},
            {width: 20, color: 60},{width: 10, color: 90},
            {width: 8, color: 10}
        ];
        var element=$element[0]

        var colorScale = d3.scale.linear()
            .domain([0, 100])
            .range(["#add8e6", "blue"]); // <- B
        function render(data) {
            d3.select(element).selectAll("div.h-bar")
                .data(data)
                .enter().append("div")
                .attr("class", "h-bar")
                .append("span");

            d3.select(element).selectAll("div.h-bar")
                .data(data)
                .exit().remove();

            d3.select(element).selectAll("div.h-bar")
                .data(data)
                .attr("class", "h-bar")
                .style("width", function (d) { // <- C
                    return (d.width * 5) + "px"; // <- D
                })
                .style("background-color", function(d){
                    return colorScale(d.color); // <- E
                })
                .select("span")
                .text(function (d) {
                    return d.width; // <- F
                });
        }
        function randomValue() {
            return Math.round(Math.random() * 100);
        }
        setInterval(function () {
            data.shift();
            data.push({width: randomValue(), color: randomValue()});
            render(data);
        }, 1500);
        render(data);

    }]

    return objectAsDataCtrl
})