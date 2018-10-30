import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { Chart } from 'chart.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.css']
})
export class TestComponent {

  public chart: any;
  public dataPoints: any;
  // public labels: any;

  public category;

  // --------------------------------

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  };

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: '1st Year',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59]
    },
    {
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];

  constructor(private _router: Router) {
  }

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

  changePlot(option) {
    console.log(option);

    switch (option) {
      case '1':
        this.dataPoints = [20, 25];
        console.log(this.dataPoints);
        // UPDATE CHART VALUES HERE TO MATCH ELETRICA
        break;
      case '2':
        this.dataPoints = [10, 5];
        console.log(this.dataPoints);
        // UPDATE CHART VALUES HERE TO MATCH HIDRAULICA
        break;
      case '3':
        this.dataPoints = [1, 2];
        console.log(this.dataPoints);
        // UPDATE CHART VALUES HERE TO MATCH JARDIM
        break;
      default:
        this.dataPoints = [5, 5];
        console.log(this.dataPoints);
        // UPDATE CHART VALUES HERE TO MATCH DETETIZACAO
        break;
    }
  }


}
