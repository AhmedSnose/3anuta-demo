import React, { useEffect, useRef, useState } from 'react';
import { getRelativePosition  } from 'chart.js/helpers';
import Chart from 'chart.js/auto';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles  from './css/style.module.css';
import { getLableOriginalStatus } from './functions/functions';
import { moneyFormat } from '../../helpers/functions/functions';

// Chart.register(ChartDataLabels);

// Chart.defaults.set('plugins.datalabels', {
//   color: '#FE777B'
// });




const ordersStatus = [ "Canceled", "Confirmed", "Delivered", "New Order" ];
const barColors = [ "#ef5350", "orange", "#9ccc65", "#00aa90"];
const yValues = [ 4, 1, 1, 40 ];
const arrayOfSummaryForEachOrderStatus = [
  {
      "totalAmount": 558.85,
      "averagePrice": 139.7125,
      "index":0
  },
  {
      "totalAmount": 6,
      "averagePrice": 6,
      "index":1
  },
  {
      "totalAmount": 179,
      "averagePrice": 179,
      "index":2
  },
  {
      "totalAmount": 3029.71,
      "averagePrice": 75.74275,
      "index":3
  }
]
const arrayOfOrderStatusNameWithOriginalOrderStatus = {
  "Canceled": "CANCELED",
  "Confirmed": "CONFIRMED",
  "Delivered": "DELIVERED",
  "New Order": "ORDERED"
}




const footer = (tooltipItems) => {
  let averagePrice = 0;
  let totalAmount = 0;
  
  tooltipItems.forEach(function(tooltipItem) {
      if (arrayOfSummaryForEachOrderStatus.hasOwnProperty(tooltipItem.dataIndex)) {
          averagePrice    = 'Average invoice value  ' + moneyFormat(arrayOfSummaryForEachOrderStatus[tooltipItem.dataIndex].averagePrice , 'ar-EG');
          totalAmount     = 'Total invoice values  ' + moneyFormat(arrayOfSummaryForEachOrderStatus[tooltipItem.dataIndex].totalAmount);
      }
  });

  return ['', averagePrice, '', totalAmount];
};


export default function Piechart() {
    const chartRef = useRef();
    const [currentChart , setCurrentChart] = useState({});
    const [config , setConfig] = useState({
      type: 'doughnut',
      data: {
        labels: ordersStatus,
          datasets: [{
            backgroundColor: barColors,
            data: yValues,
            datalabels: {
              formatter: function(value, context) {
                return value;
              },
              labels: {
                onClick:()=> console.log('j'),
                title: {
                  font: {
                    weight: 'bold'
                  }
                },
              }
            },
        }]
      },

      plugins: [ChartDataLabels],
      options: {
        plugins: {
          tooltip: {
            usePointStyle: true,
            callbacks: {
              footer: footer,
            }
          },
        
          legend : {
            // position : 'right',
            onClick: function(evt , item) {
              // console.log(getLableOriginalStatus(item.text , arrayOfOrderStatusNameWithOriginalOrderStatus) , evt.chart.tooltip);
              // do the anmation or update the config data then do chart.update(ctx ,  new config data) look at walied config object code 
            // ex => 
              //  chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle;
            // chart.update();
            },
          }
        },
        onClick: (e , ctx) => {
          console.log(ctx);
          // if (ctx[0].datasetIndex !== undefined)
            // console.log(getLableOriginalStatus(ordersStatus[ctx[0].datasetIndex] , arrayOfOrderStatusNameWithOriginalOrderStatus));
        },
        
      }
      
    })


  
    useEffect(() => {
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, config);
      setCurrentChart(chart)


        return () => {
          chart.destroy()
        }
      }, [config]);

      const chartOnClickHandle = function (evt) {
      // let activeSegmentsIndexies = Object.keys(currentChart._hiddenIndices);
      // let solution = arrayOfSummaryForEachOrderStatus.filter(({index})=>{
      //   return activeSegmentsIndexies.filter(e => e != index)
      // })
      //   console.log(solution);
        // console.log(currentChart.data , "evt");

        let objectOfIndexHiddenSegments = []
        let arrayOfActiveSegments = [];
        let averageOfInvoicesValues = 0;
        let totalOfInvoicesValues = 0;
  };


  return  (
    <div className={styles.chartConatiner}>
      <canvas ref={chartRef} onClick={chartOnClickHandle}></canvas>
    </div>
  )
}
