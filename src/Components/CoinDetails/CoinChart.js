import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const CoinChart = ({ data }) => {
    const {day} = data
    const options = {
    animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    zoomEnabled: true,
    // zoomType: "xy",
    // title:{
    //     text: "Bounce Rate by Week of Year"
    //   },
      exportEnabled: false,
      axisY: {
        tickLength :0,

        gridThickness: 0,
          // lineThickness: 0,
          
        // title: "Bounce Rate",
        includeZero: false,
        suffix: ""
    },
    axisX: {
        // title: "Week of Year",
      prefix: "",
      ValueFormatString: "MMM YYYY",
        // tickLength :0,
        // gridThickness: 0,
          // lineThickness: 0,
         
        interval: 3
    },
    data: [{
      type: "line",
      // lineColor: "red",
      fallingColor: "#AF2020",
      xValueFormatString: "HH:MM",
			yValueFormatString: "$#,##0.00",
      toolTipContent: "Time : {x} | Price : { y }",
      dataPoints: day
    }]
    }
  
 
    return (
      <div>
        <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		
        
        </div>
    )
}

export default CoinChart
