import { Component, Input } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CommonModule } from '@angular/common';
echarts.use([BarChart, GridComponent, CanvasRenderer, TooltipComponent, LegendComponent,LineChart]);

@Component({
  selector: 'app-smoothed-line-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './smoothed-line-chart.component.html',
  styleUrl: './smoothed-line-chart.component.css',
  providers:[
    provideEchartsCore({echarts})
  ]
})
export class SmoothedLineChartComponent {

  option = {

    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      type: 'value',
      splitLine:{
        show:false
      }
    },
    label:{
      show:true,
      
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        name:"growth"
      }
    ]
  };

}
