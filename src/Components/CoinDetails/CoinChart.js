import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const CoinChart = ({ data }) => {
    const {year} = data

  const options = {
      animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    zoomEnabled: true,
    // zoomType: "xy",
    title:{
        text: "Bounce Rate by Week of Year"
      },
      exportEnabled: false,
      axisY: {
        tickLength :0,

        gridThickness: 0,
          lineThickness: 0,
          labelFormatter: function(e){
            return " ";
          },
        // title: "Bounce Rate",
        includeZero: false,
        // suffix: ""
    },
    axisX: {
        // title: "Week of Year",
        // prefix: "",
        tickLength :0,
        gridThickness: 0,
          lineThickness: 0,
          labelFormatter: function(e){
            return " ";
          },
        interval: 1
    },
    data: [{
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: year
    }]
    }
  
 
    return (
      <div style={{ width: "50vw" }}>
        <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		
        
        </div>
    )
}

export default CoinChart
