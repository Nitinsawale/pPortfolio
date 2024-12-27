import { Component } from '@angular/core';
import { StackedBarComponent } from '../stacked-bar/stacked-bar.component';
import { SmoothedLineChartComponent } from '../smoothed-line-chart/smoothed-line-chart.component';
import { InvestmentDetails } from '../../core/DTOs/InvestmentDetails';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StackedBarComponent,SmoothedLineChartComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  investmentDetails:InvestmentDetails = {
    totalInvested : 50000,
    currentValue :60000,
    rateOfReturn : 10,
    totalProfit : 1000,
    goldInvestment:10000,
    stockInvestment:15000,
    mutualFundInvestment:25000,
    realEstateInvestment:0
  }

  dashboardData:any = {}
  allocationChartData:any = []
  constructor()
  {

  }


  ngOnInit()
  {
      this.calculateDashboardValues();
  }

  fetchData()
  {

  }


  calculateDashboardValues()
  {
    let stockDetails:any = {}
    stockDetails['percentage'] = (this.investmentDetails.stockInvestment / this.investmentDetails.totalInvested ) * 100;
    stockDetails['weight'] = stockDetails['percentage'] / 10;
    stockDetails['name'] = "Stocks"
    stockDetails['amount'] = this.investmentDetails.stockInvestment

    let goldDetails:any = {}
    goldDetails['percentage'] = (this.investmentDetails.goldInvestment / this.investmentDetails.totalInvested ) * 100;
    goldDetails['weight'] = goldDetails['percentage'] / 10;
    goldDetails['name'] = "Gold"
    goldDetails['amount'] = this.investmentDetails.goldInvestment

    let mutualFundDetails:any = {}
    mutualFundDetails['percentage'] = (this.investmentDetails.mutualFundInvestment / this.investmentDetails.totalInvested ) * 100;
    mutualFundDetails['weight'] = mutualFundDetails['percentage'] / 10;
    mutualFundDetails['name'] = "Mutual Fund"
    mutualFundDetails['amount'] = this.investmentDetails.mutualFundInvestment

    let realEstateInvestment:any = {}
    if(this.investmentDetails.realEstateInvestment)
    {
      realEstateInvestment['percentage'] = (this.investmentDetails.realEstateInvestment / this.investmentDetails.totalInvested ) * 100;
      realEstateInvestment['weight'] = realEstateInvestment['percentage'] / 10;
      realEstateInvestment['name'] = "Real Estate"
      realEstateInvestment['amount'] = this.investmentDetails.realEstateInvestment
      this.allocationChartData.push(realEstateInvestment);
    }
    this.allocationChartData.push(stockDetails);
    this.allocationChartData.push(goldDetails);
    this.allocationChartData.push(mutualFundDetails);
   
    console.log(this.allocationChartData)
  }

}
