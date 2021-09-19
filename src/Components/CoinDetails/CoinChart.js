import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const CoinChart = ({ data }) => {
    const options = {
    animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    zoomEnabled: true,
      exportEnabled: false,
      axisY: {
        tickLength :0,

        gridThickness: 0,
        includeZero: false,
        suffix: ""
    },
    axisX: {
        // title: "Week of Year",
      prefix: "",
      ValueFormatString: "MMM YYYY",
        interval: 3
    },
    data: [{
      type: "line",
      // lineColor: "red",
      fallingColor: "#AF2020",
      xValueFormatString: "HH:MM",
			yValueFormatString: "#,##0.00",
      toolTipContent: "Price : { y }",
      dataPoints: data()
    }]
    }
    return (
      <div>
        <CanvasJSChart options = {options}/>
        </div>
    )
}

export default CoinChart
