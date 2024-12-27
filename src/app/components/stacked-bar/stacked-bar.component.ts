import { Component, Input } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CommonModule } from '@angular/common';
import { EChartsOption, SeriesOption } from 'echarts/types/dist/shared';
echarts.use([BarChart, GridComponent, CanvasRenderer, TooltipComponent, LegendComponent]);

@Component({
  selector: 'app-stacked-bar',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './stacked-bar.component.html',
  styleUrl: './stacked-bar.component.css',
  providers:[
    provideEchartsCore({echarts})
  ]
})
export class StackedBarComponent {

  @Input() chartData:any = [
    {"color":"#7E1891", "name":"stocks","weight":4, "data":[320]},
    {"color":"#D4F6FF", "name":"stocks", "weight":2, "data":[320]},
    {"color":"#88C273", "name":"stocks", "weight":2, "data":[320]},
    {"color":"#FFF7D1", "name":"stocks", "weight":2, "data":[320]}
  ];
  option:EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show:false
    },
    grid: {
      show:true,
      left:"0%",
      right:"0%",
      bottom:"0%",
      top:"0%"
    },
    xAxis: {
      show:false,
      type: 'value'
    },
    yAxis: {
      show: false,
      type: 'category',
      data: ['investment-details']
    },
    series: [
   
    ]
  };
  
  ngOnInit()
  {
    this.setColors()
  }

  ngOnChanges()
  {
    this.setColors();
  }

  ngAfterViewInit()
  {
    
  }


  setOptions()
  {
    let tempSeries:SeriesOption[] = []
    this.chartData.forEach((bar:any) => {
        let seriesdata:SeriesOption =  {
          name: bar.name,
          type: 'bar',
          stack: 'total',
          barWidth:"25%",
          itemStyle:
          {
              borderWidth:60,
              color:bar.color,
              borderRadius: [5, 5, 5, 5] // Optional, for rounded corners
          },
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: bar.data
        }
      
      tempSeries.push(seriesdata);
    });
    this.option.series = tempSeries;
  }

  generateRandomColor(): string {
    const r = Math.floor(Math.random() * 128) + 128;  // Ensure red is bright (between 128 and 255)
    const g = Math.floor(Math.random() * 128) + 128;  // Ensure green is bright (between 128 and 255)
    const b = Math.floor(Math.random() * 128) + 128;  // Ensure blue is bright (between 128 and 255)
    
    // To make it more "bright", at least one component should be close to 255
    // This makes sure that one of the RGB components has a high value
    if (Math.random() > 0.5) {
      return `rgb(${r}, ${Math.floor(Math.random() * 128) + 128}, ${255})`; // Blue component at max
    } else {
      return `rgb(${255}, ${Math.floor(Math.random() * 128) + 128}, ${b})`; // Red component at max
    }
  }

  setColors()
  {
    this.chartData.forEach((row:any) => {
      row.color = this.generateRandomColor();
      row.class = 'col-span-' + row.weight;
    });
  } 

}
